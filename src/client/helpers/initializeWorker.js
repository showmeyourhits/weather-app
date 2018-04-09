import {handleAppMessage} from './appHandlers';

const worker = new Worker('./worker.js');

worker.onmessage = handleAppMessage;

export {worker};
