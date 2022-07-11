import { iArtist } from '../../interfaces/iArtist';
import { artistsReducer } from './artists.reducer';
import { loadArtistsAction } from './artists.action.creators';
import { AnyAction } from '@reduxjs/toolkit';

const artistsArray: Array<iArtist> = [
    {
        name: '',
        about: '',
        comics: [],
        id: '',
        image: '',
        rol: 'writer',
    },
    {
        name: '',
        about: '',
        comics: [],
        id: '',
        image: '',
        rol: 'writer',
    },
];

describe('Given artistReducer', () => {
    describe('When calling it with loadArtistsAction with an array of artists', () => {
        test('Then it should return a new state with the array of artists', () => {
            const newState = artistsReducer(
                [],
                loadArtistsAction(artistsArray)
            );
            expect(newState).toEqual(artistsArray);
        });
        test('Then it', () => {
            const newState = artistsReducer([], {} as AnyAction);
            expect(newState).toEqual([]);
        });
    });
});
