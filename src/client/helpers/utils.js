/**
 * It is an identity function, what else do you want?
 *
 * @param {any} any
 */
export const identity = (x) => x;

/**
 * Used for creating actions.
 *
 * @param {string} type Action type
 * @param {?function} creator Payload creator. Identity fucntion is default
 * @returns {function}
 */
export function createAction(type, creator = identity) {
    return function(...data) {
        return {
            type,
            payload: creator(...data),
        };
    };
}