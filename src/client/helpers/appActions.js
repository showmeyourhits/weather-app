import {FETCH_DATA} from './actionTypes';
import {createAction} from './utils';

/**
 * @description Request data passed in action
 * @typedef {object} RequestData
 * @property {string} route Data route
 * @property {?object} params Feath params (query data)
 */

/**
 * @param {string} route
 * @param {object} params
 * @returns {RequestData} data for request
*/
export const fetchData = createAction(
    FETCH_DATA,
    (route, params) => ({route, params}),
);
