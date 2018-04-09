import {handleWorkerMessage} from './helpers/workerHandlers';

console.log('Worker installed');

self.onmessage = handleWorkerMessage;
