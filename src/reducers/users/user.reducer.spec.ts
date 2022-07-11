import { AnyAction } from '@reduxjs/toolkit';
import { userWithToken } from '../../interfaces/iUser';
import { loadUserAction, updateUserAction } from './users.action.creators';
import { usersReducer } from './users.reducer';

const user: userWithToken = {
    token: '',
    user: {
        comics: [],
        email: '',
        id: '',
        name: '',
        password: '',
    },
};

describe('Given userReducer', () => {
    describe('When calling loadUserAction', () => {
        test('Then it should return a new state with the user', () => {
            const initialState = {
                token: '',
                user: {
                    id: '',
                    comics: [],
                    email: '',
                    name: 'test',
                    password: '',
                },
            };
            const newState = usersReducer(initialState, loadUserAction(user));
            expect(newState).toEqual(user);
        });
    });
    describe('When calling updateUserAction', () => {
        test('Then it should return a new state with the user updated', () => {
            const newState = usersReducer(
                user,
                updateUserAction({
                    ...user,
                    user: {
                        comics: [''],
                        email: '',
                        id: '',
                        name: '',
                        password: '',
                    },
                })
            );
            expect(newState.user.comics).toEqual(['']);
        });
    });
    describe('When calling default it with a non existing action', () => {
        test('Then it shoul return a new state equal to the previous state', () => {
            const newState = usersReducer(user, {} as AnyAction);
            expect(newState).toEqual(user);
        });
    });
});
