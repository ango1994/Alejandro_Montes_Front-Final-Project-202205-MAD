import { createAction } from '@reduxjs/toolkit';
import { iUser } from '../../interfaces/iUser';
import { actionTypes } from './users.action.types';

export interface iAction {
    type: actionTypes;
    payload: any;
}

export const addUserAction = createAction<iUser>(actionTypes['user@add']);
export const loadUserAction = createAction<iUser>(actionTypes['user@load']);
export const deleteUserAction = createAction<iUser>(actionTypes['user@delete']);
export const updateUserAction = createAction<iUser>(actionTypes['user@update']);
