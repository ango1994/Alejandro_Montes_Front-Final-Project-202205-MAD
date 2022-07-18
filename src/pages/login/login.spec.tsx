import { MemoryRouter } from 'react-router-dom';
import sweetalert2 from 'sweetalert2';
import { iArtist } from '../../interfaces/iArtist';
import { iComic } from '../../interfaces/iComics';
import { userWithToken } from '../../interfaces/iUser';
import { artistsReducer } from '../../reducers/artists/artists.reducer';
import { comicsReducer } from '../../reducers/comics/comics.reducer';
import { usersReducer } from '../../reducers/users/users.reducer';
import { UserHttpStore } from '../../services/user.http.store';
import { iStore } from '../../store/store';
import { fireEvent, render, screen, waitFor } from '../../utils/test.utils';
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

jest.mock('sweetalert2', () => ({
    fire: jest
        .fn()
        .mockResolvedValue({ params: { title: 'User or password invalid' } }),
}));

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
    describe('When form is filled and click button send with invalid params', () => {
        test('Then Swal.fire should be called', async () => {
            render(
                <MemoryRouter>
                    <Login></Login>
                </MemoryRouter>,
                { preloadedState, reducer }
            );
            UserHttpStore.prototype.loginUser = jest.fn().mockResolvedValue({});
            const inputs = screen.getAllByRole('textbox');
            fireEvent.change(inputs[0], { target: { value: 'test' } });
            const button = screen.getByText('Send');
            fireEvent.click(button);
            await waitFor(() => {
                expect(sweetalert2.fire).toHaveBeenCalled();
            });

            expect(await sweetalert2.fire).toHaveBeenCalled();
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
            const button = screen.getByText('Send');
            fireEvent.click(button);
            expect(UserHttpStore.prototype.loginUser).toBeCalled();
        });
    });
});
