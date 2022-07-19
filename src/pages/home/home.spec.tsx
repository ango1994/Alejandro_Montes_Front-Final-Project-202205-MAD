import { BrowserRouter } from 'react-router-dom';
import { iArtist } from '../../interfaces/iArtist';
import { iComic } from '../../interfaces/iComics';
import { userWithToken } from '../../interfaces/iUser';
import Home from '../home/home';
import { artistsReducer } from '../../reducers/artists/artists.reducer';
import { comicsReducer } from '../../reducers/comics/comics.reducer';
import { usersReducer } from '../../reducers/users/users.reducer';
import { iStore } from '../../store/store';
import { render, screen } from '../../utils/test.utils';
import { comicDisplayReducer } from '../../reducers/comic.display/comic.display.reducer';

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
describe('Given the component Header', () => {
    describe('When it is called', () => {
        test('Then it should render the header', () => {
            render(
                <BrowserRouter>
                    <Home></Home>
                </BrowserRouter>,
                {
                    preloadedState,
                    reducer,
                }
            );
            const element = screen.getByText(/the place/i);
            expect(element).toBeInTheDocument();
        });
    });
});
