import { MemoryRouter } from 'react-router-dom';
import { iArtist } from '../../interfaces/iArtist';
import { iComic } from '../../interfaces/iComics';
import { userWithToken } from '../../interfaces/iUser';
import { artistsReducer } from '../../reducers/artists/artists.reducer';
import { comicDisplayReducer } from '../../reducers/comic.display/comic.display.reducer';
import { comicsReducer } from '../../reducers/comics/comics.reducer';
import { usersReducer } from '../../reducers/users/users.reducer';
import { iStore } from '../../store/store';
import { fireEvent, render, screen } from '../../utils/test.utils';
import { Logout } from './logout';

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

const mockFunction = jest.fn();

describe('Given the component logout', () => {
    describe('When it is called', () => {
        test('Then it should rednder the logout component', () => {
            render(
                <MemoryRouter>
                    <Logout click={mockFunction}></Logout>
                </MemoryRouter>,
                { preloadedState, reducer }
            );
            const text = screen.getByText(/Logout/i);
            expect(text).toBeInTheDocument();
        });
    });
    describe('When it is called and Logout button is clicked', () => {
        test('Then mockFunction should be called', () => {
            render(
                <MemoryRouter>
                    <Logout click={mockFunction}></Logout>
                </MemoryRouter>,
                { preloadedState, reducer }
            );
            const button = screen.getByRole('button');
            fireEvent.click(button);
            expect(mockFunction).toHaveBeenCalled();
        });
    });
});
