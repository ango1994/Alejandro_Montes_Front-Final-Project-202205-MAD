import { getToken } from './getToken';

const mockUser = {
    token: '998237498234',
};

describe('Given the function getToken', () => {
    describe('When it es called and a user is loged in', () => {
        test('Then it should call localSotrage', async () => {
            localStorage.setItem('user', JSON.stringify(mockUser));
            const result = getToken();
            expect(result).toBe(mockUser.token);
        });
    });
    describe('When it es called and a user is not loged in', () => {
        test('Then it should not call localSotrage', async () => {
            localStorage.clear();
            const result = getToken();
            expect(result).toBe(undefined);
        });
    });
});
