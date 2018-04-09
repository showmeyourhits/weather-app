import {createError, sendResponse} from './workerActions';
import {FETCH_DATA, temperatureRoute, precipitationRoute} from './actionTypes';

export function handleWorkerMessage(event) {
    try {
        const {data} = event;

        switch (data.type) {
        case FETCH_DATA:
            handleDataRequest(data.payload);
            break;
        default:
            throw 'Unknown data type';
        }
    } catch (error) {
        self.postMessage(createError(error));
    }
}
/**
 * @param {RequestData} data Request data
 */
export async function handleDataRequest({route, params}) {
    console.log(`should request on route: "${route}" with params`, params);

    switch(route) {
    case temperatureRoute:
    case precipitationRoute:
        try {

            const response = await fetch(`./data/${route}.json`);
            const data = await response.json();

            self.postMessage(sendResponse(route, 200, data));
        } catch (error) {
            console.error(error);
        }
        break;
    }
}