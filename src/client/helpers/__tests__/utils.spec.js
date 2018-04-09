import {createAction, identity} from '../utils';

describe('Utils', () => {
    describe('identity', () => {
        it('returns passed argument', () => {
            const obj = {me: 'you'};

            expect(identity(obj)).toBe(obj);
        });
        it('returns only first passd argument', () => {
            const obj = {you: 'me'};

            expect(identity(obj, {and: 'also me'})).toBe(obj);
        });
    });
    describe('createAction', () => {
        it('returns function', () => {
            expect(typeof createAction()).toBe('function');
        });
        it('creates flux action creator', () => {
            const getAction = createAction('TEST');

            expect(getAction()).toEqual({type: 'TEST'});
        });
        it('uses passed payload creator', () => {
            const getAction = createAction('BICEP', (isGoodSong, song) => ({isGoodSong, song}));
            
            expect(getAction(true, 'Spring')).toEqual({
                type: 'BICEP',
                payload: {
                    isGoodSong: true,
                    song: 'Spring',
                },
            });
        });
        it('uses identity function for payload creator by default', () => {
            const getAction = createAction('BICEP');

            expect(getAction('Spring')).toEqual({type: 'BICEP', payload: 'Spring'});
        });
    });
});