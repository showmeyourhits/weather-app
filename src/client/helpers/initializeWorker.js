import {handleAppMessage} from './appHandlers';
import {initializeDB} from './initializeDB';

const worker = new Worker('./worker.js');

worker.onmessage = handleAppMessage;

initializeDB();

export {worker};
