import { MemoryRouter } from 'react-router-dom';
import { iArtist } from '../interfaces/iArtist';
import { iComic } from '../interfaces/iComics';
import { userWithToken } from '../interfaces/iUser';
import { artistsReducer } from '../reducers/artists/artists.reducer';
import { comicsReducer } from '../reducers/comics/comics.reducer';
import { usersReducer } from '../reducers/users/users.reducer';
import { UserHttpStore } from '../services/user.http.store';
import { iStore } from '../store/store';
import { fireEvent, render, screen } from '../utils/test.utils';
import Login from './login';

const reducer = {
    comics: comicsReducer,
    artists: artistsReducer,
    user: usersReducer,
};

const preloadedState: iStore = {
    comics: [] as Array<iComic>,
    artists: [] as Array<iArtist>,
    user: {} as userWithToken,
};

describe('Given the Login component', () => {
    describe('When it is called', () => {
        test('Then it shoul render the login page', async () => {
            render(
                <MemoryRouter>
                    <Login></Login>
                </MemoryRouter>,
                { preloadedState, reducer }
            );

            const element = screen.getByPlaceholderText(/Username/i);
            expect(element).toBeInTheDocument();
        });
    });
    describe('When form is filled and click button send', () => {
        test('Then userHttpStore should be called', async () => {
            UserHttpStore.prototype.loginUser = jest
                .fn()
                .mockResolvedValue({ token: '', user: { test: 'pepe' } });
            render(
                <MemoryRouter>
                    <Login></Login>
                </MemoryRouter>,
                { preloadedState, reducer }
            );
            const inputs = screen.getAllByRole('textbox');
            fireEvent.change(inputs[0], { target: { value: 'test' } });
            fireEvent.change(inputs[1], { target: { value: 'test' } });
            const button = screen.getByRole('button');
            fireEvent.click(button);

            expect(UserHttpStore.prototype.loginUser).toBeCalled();
        });
        test('Then navigate should be called', async () => {
            // const mocknavigate = jest.spyOn(global, 'window', 'get');
            UserHttpStore.prototype.loginUser = jest
                .fn()
                .mockResolvedValue({ token: '9', user: { test: 'pepe' } });
            render(
                <MemoryRouter>
                    <Login></Login>
                </MemoryRouter>,
                { preloadedState, reducer }
            );
            const inputs = screen.getAllByRole('textbox');
            fireEvent.change(inputs[0], { target: { value: 'test' } });
            fireEvent.change(inputs[1], { target: { value: 'test' } });
            const button = screen.getByRole('button');
            fireEvent.click(button);
            expect(UserHttpStore.prototype.loginUser).toBeCalled();
        });
    });
});