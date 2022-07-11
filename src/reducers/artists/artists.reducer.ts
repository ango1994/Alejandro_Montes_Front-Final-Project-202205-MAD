import { createReducer } from '@reduxjs/toolkit';
import { iArtist } from '../../interfaces/iArtist';
import { loadArtistsAction } from './artists.action.creators';

const initialState: Array<iArtist> = [];

export const artistsReducer = createReducer(initialState, (builder) => {
    return builder
        .addCase(loadArtistsAction, (state, action) => [...action.payload])
        .addDefaultCase((state) => state);
});
