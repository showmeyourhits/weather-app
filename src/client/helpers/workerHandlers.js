import {createError, sendResponse} from './workerActions';
import {promisifyRequest} from './dbHelpers';
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
            const db = await self.dbPromise;

            let objectStore = db.transaction(route, 'readonly').objectStore(route);
            const valuesCount = await promisifyRequest(objectStore.count());

            if (!valuesCount) {
                const response = await fetch(`./data/${route}.json`);
                const data = await response.json();
                
                objectStore = db.transaction(route, 'readwrite').objectStore(route);
                data.forEach(item => {
                    objectStore.add(item);
                });
            }

            self.postMessage(sendResponse(route, 200));
        } catch (error) {
            console.error(error);
        }
        break;
    }
}