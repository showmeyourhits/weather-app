import {RECIEVE_DATA, ERROR} from './actionTypes';

export function handleAppMessage(event) {
    try {
        const {data} = event;

        switch (data.type) {
        case RECIEVE_DATA:
            console.log(data.payload);
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