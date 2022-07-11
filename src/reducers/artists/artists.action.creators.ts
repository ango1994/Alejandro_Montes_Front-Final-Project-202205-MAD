import { createAction } from '@reduxjs/toolkit';
import { iArtist } from '../../interfaces/iArtist';
import { actionTypes } from './artists.action.types';

export interface iAction {
    type: actionTypes;
    payload?: any;
}

export const loadArtistsAction = createAction<Array<iArtist>>(
    actionTypes['artist@load']
);
