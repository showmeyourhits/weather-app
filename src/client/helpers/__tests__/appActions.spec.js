import {FETCH_DATA} from '../actionTypes';
import {fetchData} from '../appActions';

describe('App Actions', () => {
    describe('fetchData', () => {
        it('creates fetch action with passed params', () => {
            const route = 'https://www.youtube.com/watch?v=mH8-x5U7XsA';
            const params = {bitrate: '320kbps'};

            expect(fetchData(route, params)).toEqual({
                type: FETCH_DATA,
                payload: {route, params},
            });
        });
    });
});