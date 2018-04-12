import {initializeDB} from './helpers/initializeDB';
import {handleWorkerMessage} from './helpers/workerHandlers';

self.dbPromise = initializeDB();

console.log('Worker installed');

self.onmessage = handleWorkerMessage;
