import {worker} from './helpers/initializeWorker';
import {fetchData} from './helpers/appActions';
import {temperatureRoute} from './helpers/actionTypes';

worker.postMessage(fetchData(temperatureRoute));
