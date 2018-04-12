import {createError, sendResponse} from './workerActions';
import {promisifyRequest, getIDBKeyRange} from './dbHelpers';
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

            objectStore = db.transaction(route, 'readonly').objectStore(route);

            const data = await promisifyRequest(objectStore.getAll(getIDBKeyRange(params)));

            self.postMessage(sendResponse(route, 200, reduceToMean(data)));
        } catch (error) {
            console.error(error);
        }
        break;
    }
}

export function reduceToMean(list, count = 12) {
    return list.slice(0, count);
}