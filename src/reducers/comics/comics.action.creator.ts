import { createAction } from '@reduxjs/toolkit';
import { actionTypes } from './comics.action.types';

export interface iAction {
    type: actionTypes;
    payload: any;
}

export const loadComicsAction = createAction(actionTypes['comic@load']);

export const updateComicsAction = createAction(actionTypes['comic@update']);
