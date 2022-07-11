import { createReducer } from '@reduxjs/toolkit';
import { iUser } from '../../interfaces/iUser';
import {
    deleteUserAction,
    loadUserAction,
    updateUserAction,
} from './users.action.creators';

const initialState: iUser = {
    id: '',
    comics: [],
    email: '',
    name: '',
    password: '',
};
export const usersReducer = createReducer(initialState, (builder) => {
    return builder
        .addCase(loadUserAction, (state, action) => action.payload)
        .addCase(updateUserAction, (state, action) => (state = action.payload))
        .addCase(deleteUserAction, (state, action) => (state = initialState));
});
