import { createAction } from '@reduxjs/toolkit';
import { iComic } from '../../interfaces/iComics';
import { actionTypes } from './comic.display.action.types';

export interface iAction {
    type: actionTypes;
    payload: any;
}

export const loadComicDisplayAction = createAction<iComic>(
    actionTypes['comic@loadComicDisplay']
);
export const unloadComicDisplayAction = createAction<iComic>(
    actionTypes['comic@unloadComicDisplay']
);
