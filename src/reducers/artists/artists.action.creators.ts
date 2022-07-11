import { createAction } from '@reduxjs/toolkit';
import { actionTypes } from './artists.action.types';

export interface iAction {
    type: actionTypes;
    payload: any;
}

export const loadArtistsAction = createAction(
    actionTypes['artist@load'].toString()
);
