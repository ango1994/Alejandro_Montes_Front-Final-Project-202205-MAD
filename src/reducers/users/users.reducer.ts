import { createReducer } from '@reduxjs/toolkit';
import { userWithToken } from '../../interfaces/iUser';
import { loadUserAction, updateUserAction } from './users.action.creators';

const initialState: userWithToken = {
    token: '',
    user: {
        _id: '',
        comics: [],
        email: '',
        name: '',
        password: '',
    },
};
export const usersReducer = createReducer(initialState, (builder) => {
    return builder
        .addCase(loadUserAction, (state, action) => action.payload)
        .addCase(updateUserAction, (state, action) => ({
            ...state,
            user: action.payload.user,
        }))
        .addDefaultCase((state) => state);
});
