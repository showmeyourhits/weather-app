/**
 * Turn IndexedDB Request to Promise. Resolves on success
 *
 * @param {IDBRequest} request 
 * @returns {Promise<any>}
 */
export function promisifyRequest(request) {
    return new Promise((resolve, reject) => {
        request.onsuccess = () => resolve(request.result);

        request.onerror = reject;
    });
}