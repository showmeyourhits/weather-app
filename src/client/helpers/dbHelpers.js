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

/**
 * @param {{start_date: string, end_date: string}}  params
 * @returns {IDBKeyRange}
 */
export function getIDBKeyRange({start_date: startDate, end_date: endDate}) {
    return IDBKeyRange.bound(
        `${startDate}-01-01`,
        `${endDate}-12-12`,
    );
}