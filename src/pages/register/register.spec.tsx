import { MemoryRouter } from 'react-router-dom';
import { iArtist } from '../../interfaces/iArtist';
import { iComic } from '../../interfaces/iComics';
import { userWithToken } from '../../interfaces/iUser';
import Register from './register';
import { artistsReducer } from '../../reducers/artists/artists.reducer';
import { comicsReducer } from '../../reducers/comics/comics.reducer';
import { usersReducer } from '../../reducers/users/users.reducer';
import { iStore } from '../../store/store';
import { fireEvent, render, screen, waitFor } from '../../utils/test.utils';
import { UserHttpStore } from '../../services/user.http.store';
import sweetalert2 from 'sweetalert2';

const reducer = {
    comics: comicsReducer,
    artists: artistsReducer,
    user: usersReducer,
    comicDisplay: comicsReducer,
};

const preloadedState: iStore = {
    comics: [] as Array<iComic>,
    artists: [] as Array<iArtist>,
    user: {} as userWithToken,
    comicDisplay: {} as iComic,
};

jest.mock('sweetalert2', () => ({
    fire: jest
        .fn()
        .mockResolvedValue({ params: { title: 'User or password invalid' } }),
}));
const mockedUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    ...(jest.requireActual('react-router-dom') as any),
    useNavigate: () => mockedUsedNavigate,
}));

describe('Given the Register component', () => {
    describe('When it is called', () => {
        test('Then it should render the register page', () => {
            render(
                <MemoryRouter>
                    <Register></Register>
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
                    <Register></Register>
                </MemoryRouter>,
                { preloadedState, reducer }
            );
            UserHttpStore.prototype.registerUser = jest
                .fn()
                .mockResolvedValue({});
            const inputs = screen.getAllByRole('textbox');
            fireEvent.change(inputs[0], { target: { value: 'test' } });
            const button = screen.getByText('Send');
            fireEvent.click(button);
            await waitFor(() => {
                expect(sweetalert2.fire).toHaveBeenCalled();
            });

            expect(await sweetalert2.fire).toHaveBeenCalled();
        });
    });
    describe('When form is filled and click button send with valid params', () => {
        test('Then Swal.fire should be called', async () => {
            render(
                <MemoryRouter>
                    <Register></Register>
                </MemoryRouter>,
                { preloadedState, reducer }
            );
            UserHttpStore.prototype.registerUser = jest
                .fn()
                .mockResolvedValue({ name: 'test' });
            const inputs = screen.getAllByRole('textbox');
            fireEvent.change(inputs[0], { target: { value: 'test' } });
            const button = screen.getByText('Send');
            fireEvent.click(button);
            await waitFor(() => {
                expect(mockedUsedNavigate).toHaveBeenCalled();
            });
        });
    });
});
