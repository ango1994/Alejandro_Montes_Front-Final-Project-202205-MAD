import { BrowserRouter } from 'react-router-dom';
import { iArtist } from '../interfaces/iArtist';
import { iComic } from '../interfaces/iComics';
import { userWithToken } from '../interfaces/iUser';
import Home from '../pages/home';
import { artistsReducer } from '../reducers/artists/artists.reducer';
import { comicsReducer } from '../reducers/comics/comics.reducer';
import { usersReducer } from '../reducers/users/users.reducer';
import { iStore } from '../store/store';
import { render, screen } from '../utils/test.utils';
import { Footer } from './footer';

const reducer = {
    comics: comicsReducer,
    artists: artistsReducer,
    user: usersReducer,
};

const menuOptions = [{ path: '', label: '', page: <Home></Home> }];

const preloadedState: iStore = {
    comics: [] as Array<iComic>,
    artists: [] as Array<iArtist>,
    user: {} as userWithToken,
};
describe('Given the component Header', () => {
    describe('When it is called', () => {
        test('Then it should render the header', () => {
            render(
                <BrowserRouter>
                    <Footer menuOptions={menuOptions}></Footer>
                </BrowserRouter>,
                {
                    preloadedState,
                    reducer,
                }
            );
            const element = screen.getByText(/home/i);
            expect(element).toBeInTheDocument();
        });
    });
});
