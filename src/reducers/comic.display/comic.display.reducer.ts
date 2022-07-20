import { createReducer } from '@reduxjs/toolkit';
import { iComic } from '../../interfaces/iComics';
import { loadComicDisplayAction } from './comic.display.action.creators';

const initialState: iComic = {
    _id: '',
    artist: [],
    category: 'american',
    description: '',
    image: '',
    name: '',
    publicationDate: '',
    score: [],
};
export const comicDisplayReducer = createReducer(initialState, (builder) => {
    return builder
        .addCase(loadComicDisplayAction, (state, action) => action.payload)
        .addDefaultCase((state) => state);
});
