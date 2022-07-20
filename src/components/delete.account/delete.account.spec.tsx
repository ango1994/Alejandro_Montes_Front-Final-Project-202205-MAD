import { MemoryRouter } from 'react-router-dom';
import { iArtist } from '../../interfaces/iArtist';
import { iComic } from '../../interfaces/iComics';
import { userWithToken } from '../../interfaces/iUser';
import { artistsReducer } from '../../reducers/artists/artists.reducer';
import { comicDisplayReducer } from '../../reducers/comic.display/comic.display.reducer';
import { comicsReducer } from '../../reducers/comics/comics.reducer';
import { usersReducer } from '../../reducers/users/users.reducer';
import { UserHttpStore } from '../../services/user.http.store';
import { iStore } from '../../store/store';
import { fireEvent, render, screen, waitFor } from '../../utils/test.utils';
import { DeleteAccount } from './delete.account';

const reducer = {
    comics: comicsReducer,
    artists: artistsReducer,
    user: usersReducer,
    comicDisplay: comicDisplayReducer,
};

const preloadedState: iStore = {
    comics: [] as Array<iComic>,
    artists: [] as Array<iArtist>,
    user: { token: '99', user: { _id: '33' } } as userWithToken,
    comicDisplay: {} as iComic,
};

describe('Given the component DeleteAccount', () => {
    describe('When it is called', () => {
        test('Then it should render the DeleteAccount component', () => {
            render(
                <MemoryRouter>
                    <DeleteAccount></DeleteAccount>
                </MemoryRouter>,
                { preloadedState, reducer }
            );
            const text = screen.getByText(/Delete account/i);
            expect(text).toBeInTheDocument();
        });
    });
    describe('When it is called and Delete account button is clicked and then cancel', () => {
        test('Then it should return no the same component', async () => {
            render(
                <MemoryRouter>
                    <DeleteAccount></DeleteAccount>
                </MemoryRouter>,
                { preloadedState, reducer }
            );
            UserHttpStore.prototype.deleteUser = jest
                .fn()
                .mockResolvedValue({});

            const button = screen.getByRole('button');
            fireEvent.click(button);
            const test = screen.getAllByRole('button');

            fireEvent.click(test[1]);

            await waitFor(() => {
                const text = screen.getByText(/Delete/i);
                expect(text).toBeInTheDocument();
            });
        });
    });
    describe('When it is called and Delete account button is clicked and then confirm', () => {
        test('Then api should be called', async () => {
            render(
                <MemoryRouter>
                    <DeleteAccount></DeleteAccount>
                </MemoryRouter>,
                { preloadedState, reducer }
            );
            const api = (UserHttpStore.prototype.deleteUser = jest
                .fn()
                .mockResolvedValue({}));

            const button = screen.getByRole('button');
            fireEvent.click(button);
            const test = screen.getAllByRole('button');

            fireEvent.click(test[0]);

            await waitFor(() => {
                expect(api).toHaveBeenCalled();
            });
        });
    });
});
