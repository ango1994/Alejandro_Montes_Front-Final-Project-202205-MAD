import { getToken } from './getToken';

localStorage.setItem('user', '');

jest.spyOn(Storage.prototype, 'setItem');
jest.spyOn(Storage.prototype, 'getItem');

describe('Given the function getToken', () => {
    describe('When it es called', () => {
        test('Then it should call localSotrage', async () => {
            getToken();

            expect(localStorage.getItem).toHaveBeenCalledWith('user');
        });
    });
});
