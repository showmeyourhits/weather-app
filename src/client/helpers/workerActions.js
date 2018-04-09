import {createAction} from './utils';
import {ERROR, RECIEVE_DATA} from './actionTypes';

const defaultMessage = 'Something bad happened in worker';

/**
 * @typedef {object} ResponseData
 * @property {string} route Data route
 * @property {number} code HTTP like response code
 * @property {object} data Actual response
 */

export const createError = createAction(
    ERROR,
    (error, message = defaultMessage) => ({error, message}),
);

/**
 * @param {string} route
 * @param {number} code
 * @param {object} data
 * @returns {ResponseData} Response data
*/
export const sendResponse = createAction(
    RECIEVE_DATA,
    (route, code, data) => ({route, data, code}),
);