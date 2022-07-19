import { iUser, userWithToken } from '../interfaces/iUser';
import { UserHttpStore } from './user.http.store';

const user: iUser = {
    name: '',
    comics: [],
    email: '',
    password: '',
    _id: '',
};

const mockuserWithToken: userWithToken = {
    token: '',
    user: user,
};

jest.spyOn(Storage.prototype, 'getItem');
Storage.prototype.getItem = jest
    .fn()
    .mockReturnValue({ user: { token: '88' } });

describe('Given UserHttpStore', () => {
    describe('When registerUser is called', () => {
        test('Then it should return a user', async () => {
            global.fetch = jest.fn().mockResolvedValue({
                json: jest.fn().mockResolvedValue(user),
            });
            const api = new UserHttpStore();
            const response = await api.registerUser(user);
            expect(response).toEqual(user);
        });
    });
    describe('When loginUser is called', () => {
        test('Then it should return a user with token', async () => {
            global.fetch = jest.fn().mockResolvedValue({
                json: jest.fn().mockResolvedValue(mockuserWithToken),
            });
            const api = new UserHttpStore();
            const response = await api.loginUser(user);
            expect(response).toEqual(mockuserWithToken);
        });
    });
    describe('When deleteUser is called', () => {
        test('Then it should delete a user', async () => {
            global.fetch = jest.fn().mockResolvedValue({
                json: jest.fn().mockResolvedValue({}),
            });
            const api = new UserHttpStore();
            const response = await api.deleteUser(user._id, '');
            expect(response).toEqual({});
        });
    });
    describe('When updateUser is called', () => {
        test('Then it should update a user', async () => {
            global.fetch = jest.fn().mockResolvedValue({
                json: jest.fn().mockResolvedValue({ ...user, comics: [''] }),
            });

            const api = new UserHttpStore();
            await api.addFavouriteComicToUser(user._id, '');
            expect(fetch).toBeCalled();
        });
    });
});
