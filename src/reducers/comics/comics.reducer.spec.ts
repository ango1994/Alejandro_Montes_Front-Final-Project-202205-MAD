import { AnyAction } from '@reduxjs/toolkit';
import { iComic } from '../../interfaces/iComics';
import { loadComicsAction, updateComicsAction } from './comics.action.creators';
import { comicsReducer } from './comics.reducer';

const comicsArray: Array<iComic> = [
    {
        artist: [],
        category: 'american',
        description: '',
        _id: '2',
        image: '',
        name: '',
        publicationDate: '',
        score: [],
    },
    {
        artist: [],
        category: 'american',
        description: '',
        _id: '',
        image: '',
        name: '',
        publicationDate: '',
        score: [],
    },
];

describe('Given comicReducer', () => {
    describe('When calling loadComicsAction with an array of comics', () => {
        test('Then it shoul return a new state with the array of comics', () => {
            const newState = comicsReducer([], loadComicsAction(comicsArray));
            expect(newState).toEqual(comicsArray);
        });
    });
    describe('When calling updateComicsAction with an array of comics', () => {
        test('Then it shoul return a new state with the array of comics', () => {
            const newState = comicsReducer(
                comicsArray,
                updateComicsAction({
                    ...comicsArray[0],
                    score: [{ user: '', scored: 3 }],
                })
            );
            expect(newState[0].score).toEqual([{ user: '', scored: 3 }]);
        });
    });
    describe('When calling default it with a non existing action', () => {
        test('Then it shoul return a new state equal to the previous state', () => {
            const newState = comicsReducer(comicsArray, {} as AnyAction);
            expect(newState).toEqual(comicsArray);
        });
    });
});
