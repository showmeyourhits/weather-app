import {worker} from './helpers/initializeWorker';
import {fetchData} from './helpers/appActions';
import {temperatureRoute} from './helpers/actionTypes';
import './helpers/initializeUI';

worker.postMessage(fetchData(temperatureRoute));
