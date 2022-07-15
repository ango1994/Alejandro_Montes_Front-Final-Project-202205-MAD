import { createAction } from '@reduxjs/toolkit';
import { iUser, userWithToken } from '../../interfaces/iUser';
import { actionTypes } from './users.action.types';

export interface iAction {
    type: actionTypes;
    payload: any;
}

export const loadUserAction = createAction<userWithToken>(
    actionTypes['user@load']
);
export const deleteUserAction = createAction<userWithToken>(
    actionTypes['user@delete']
);
export const updateUserAction = createAction<iUser>(actionTypes['user@update']);
