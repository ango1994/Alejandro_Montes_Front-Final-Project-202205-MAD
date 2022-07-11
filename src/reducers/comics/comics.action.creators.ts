import { createAction } from '@reduxjs/toolkit';
import { iComic } from '../../interfaces/iComics';
import { actionTypes } from './comics.action.types';

export interface iAction {
    type: actionTypes;
    payload: any;
}

export const loadComicsAction = createAction<Array<iComic>>(
    actionTypes['comic@load']
);
export const updateComicsAction = createAction<iComic>(
    actionTypes['comic@update']
);
