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
import { Menu } from './menu';

const reducer = {
    comics: comicsReducer,
    artists: artistsReducer,
    user: usersReducer,
    comicDisplay: comicDisplayReducer,
};

const preloadedState: iStore = {
    comics: [] as Array<iComic>,
    artists: [] as Array<iArtist>,
    user: {} as userWithToken,
    comicDisplay: {} as iComic,
};
const mockFunction = jest.fn();
describe('Given the component Menu', () => {
    describe('When it is called', () => {
        test('Then it should render the menu', () => {
            render(
                <MemoryRouter>
                    <Menu menu={mockFunction}></Menu>
                </MemoryRouter>,
                {
                    preloadedState,
                    reducer,
                }
            );
            const element = screen.getByText(/close/i);
            expect(element).toBeInTheDocument();
        });
    });
    describe('When it is called and button close is clicked', () => {
        test('Then it should call the mocked function funciton', async () => {
            render(
                <MemoryRouter>
                    <Menu menu={mockFunction}></Menu>
                </MemoryRouter>,
                {
                    preloadedState,
                    reducer,
                }
            );
            const button = screen.getByText('close');
            fireEvent.click(button);

            expect(mockFunction).toHaveBeenCalled();
        });
    });
    describe('When it is called and user is  logged in', () => {
        test('Then it delete account should be rendered', async () => {
            const preloadedState: iStore = {
                comics: [] as Array<iComic>,
                artists: [] as Array<iArtist>,
                user: { token: 'test', user: {} } as userWithToken,
                comicDisplay: {} as iComic,
            };
            render(
                <MemoryRouter>
                    <Menu menu={mockFunction}></Menu>
                </MemoryRouter>,
                {
                    preloadedState,
                    reducer,
                }
            );
            const element = screen.getByText(/Logout/i);
            expect(element).toBeInTheDocument();
        });
    });
});
