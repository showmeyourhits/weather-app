import {worker} from './helpers/initializeWorker';
import {fetchData} from './helpers/appActions';
import {temperatureRoute, precipitationRoute} from './helpers/actionTypes';

worker.postMessage(fetchData(temperatureRoute));
worker.postMessage(fetchData(precipitationRoute));
