import { MemoryRouter } from 'react-router-dom';
import { iArtist } from '../../interfaces/iArtist';
import { iComic } from '../../interfaces/iComics';
import { userWithToken } from '../../interfaces/iUser';
import { artistsReducer } from '../../reducers/artists/artists.reducer';
import { comicsReducer } from '../../reducers/comics/comics.reducer';
import { usersReducer } from '../../reducers/users/users.reducer';
import { iStore } from '../../store/store';
import { fireEvent, render, screen } from '../../utils/test.utils';
import { Header } from './header';

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
describe('Given the component Header', () => {
    describe('When it is called', () => {
        test('Then it should render the header', () => {
            render(
                <MemoryRouter>
                    <Header></Header>
                </MemoryRouter>,
                { preloadedState, reducer }
            );
            const element = screen.getByText(/menu/i);
            expect(element).toBeInTheDocument();
        });
    });
    describe('When it is called and button menu is clicked', () => {
        test('Then it should call toggleMenu funciton', async () => {
            render(
                <MemoryRouter>
                    <Header></Header>
                </MemoryRouter>,
                { preloadedState, reducer }
            );
            const button = screen.getByText('menu');
            fireEvent.click(button);
            const element = screen.getByText(/close/i);
            expect(element).toBeInTheDocument();
        });
    });
});
