import {sendResponse, createError} from '../workerActions';
import {RECIEVE_DATA, ERROR} from '../actionTypes';

describe('Worker Actions', () => {
    describe('sendResponse', () => {
        it('creates action with passed response data', () => {
            expect(sendResponse('testurl', 304, ['data'])).toEqual({
                type: RECIEVE_DATA,
                payload: {
                    data: ['data'],
                    code: 304,
                    route: 'testurl',
                }
            });
        });
    });
    describe('createError', () => {
        it('create an action with message and error', () => {
            expect(createError({source: 'You'}, 'Error source')).toEqual({
                type: ERROR,
                payload: {
                    error: {
                        source: 'You',
                    },
                    message: 'Error source',
                }
            });
        });
    });
});