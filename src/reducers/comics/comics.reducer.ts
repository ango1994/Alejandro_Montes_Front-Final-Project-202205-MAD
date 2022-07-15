import { createReducer } from '@reduxjs/toolkit';
import { iComic } from '../../interfaces/iComics';
import { loadComicsAction, updateComicsAction } from './comics.action.creators';

const initialState: Array<iComic> = [];
export const comicsReducer = createReducer(initialState, (builder) => {
    return builder
        .addCase(loadComicsAction, (state, action) => [...action.payload])
        .addCase(updateComicsAction, (state, action) =>
            state.map((comic) =>
                comic._id === action.payload._id ? action.payload : comic
            )
        )
        .addDefaultCase((state) => state);
});
