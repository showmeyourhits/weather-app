import {worker} from './initializeWorker';
import {RECIEVE_DATA, ERROR} from './actionTypes';
import {endSelectID, startSelectID} from './appConstants';
import {fetchData} from './appActions';
import {drawGraph, clearCanvas, drawGrid} from './canvasHelpers';

export function handleAppMessage(event) {
    try {
        const {data} = event;

        switch (data.type) {
        case RECIEVE_DATA:
            clearCanvas();
            drawGrid();
            drawGraph(data.payload);
            console.log('Client recieved', data.payload);
            break;
        case ERROR:
            throw data.payload;
        default:
            throw new Error(`Unknown data type: ${data.type}`);
        }
    } catch (error) {
        console.error(error);
    }
}

/**
 * @param {ResponseData} data
 */
export function handleDataRecieve(response) {
    try {
        const {route, data} = response;

        console.log(`Recieved from ${route}: `, data);
    } catch (error) {
        console.error(error);
    }
}

export function handleSelectChange() {
    requestData();
}

export function handleTypeClick(event) {
    const cn = 'btn--selected';

    if (event.target.classList.contains(cn)) {
        event.preventDefault();
        event.stopPropagation;

        return;
    }

    Array.prototype.forEach.call(
        document.getElementsByClassName(cn),
        el => el.classList.remove(cn)
    );

    event.target.classList.add(cn);
}

export function handleFormSubmit(event) {
    event.preventDefault();
    requestData();
}

export function serializeForm() {
    const params = {};

    [startSelectID, endSelectID].forEach(selectID => {
        const selectElement = document.getElementById(selectID);

        params[selectElement.name] = selectElement.value;
    });

    const typeElement = document.querySelector('#controls .btn--selected');

    params.route = typeElement.value;

    return params;
}

export function requestData() {
    const params = serializeForm();

    worker.postMessage(fetchData(params.route, params));
}