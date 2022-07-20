import { AnyAction } from '@reduxjs/toolkit';
import { iComic } from '../../interfaces/iComics';
import { loadComicDisplayAction } from './comic.display.action.creators';
import { comicDisplayReducer } from './comic.display.reducer';

const comic: iComic = {
    artist: [],
    category: 'american',
    description: '',
    _id: '2',
    image: '',
    name: '',
    publicationDate: '',
    score: [],
};

describe('Given comicDisplayReducer', () => {
    describe('When calling loadComicDisplayAction with a comics', () => {
        test('Then it shoul return a new state with the comics', () => {
            const newState = comicDisplayReducer(
                {} as iComic,
                loadComicDisplayAction(comic)
            );
            expect(newState).toEqual(comic);
        });
    });

    describe('When calling default it with a non existing action', () => {
        test('Then it shoul return a new state equal to the previous state', () => {
            const newState = comicDisplayReducer(comic, {} as AnyAction);
            expect(newState).toEqual(comic);
        });
    });
});
