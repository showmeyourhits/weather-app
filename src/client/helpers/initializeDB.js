import {temperatureRoute, precipitationRoute} from './actionTypes';

export async function initializeDB() {
    const dbName = 'weather_app';

    const dbPromise = new Promise((resolve, reject) => {
        const dbRequest = indexedDB.open(dbName, 1);

        dbRequest.onupgradeneeded = function(event) {
            const db = event.target.result;

            db.createObjectStore(temperatureRoute, {keyPath: 't'});
            db.createObjectStore(precipitationRoute, {keyPath: 't'});
        };
        dbRequest.onsuccess = function(event) {
            resolve(event.target.result);
        };
        dbRequest.onerror = function(event) {
            reject(event);
        };
    });

    return dbPromise;
}
