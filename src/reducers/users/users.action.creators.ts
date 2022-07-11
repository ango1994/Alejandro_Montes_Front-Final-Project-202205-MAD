import { createAction } from '@reduxjs/toolkit';
import { actionTypes } from './users.action.types';

export interface iAction {
    type: actionTypes;
    payload: any;
}

export const addUserAction = createAction(actionTypes['user@add']);
export const loadUserAction = createAction(actionTypes['user@load']);
export const deleteUserAction = createAction(actionTypes['user@delete']);
export const updateUserAction = createAction(actionTypes['user@update']);
