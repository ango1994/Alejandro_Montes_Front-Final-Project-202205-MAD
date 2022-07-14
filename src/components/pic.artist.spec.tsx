import { BrowserRouter } from 'react-router-dom';
import { iArtist } from '../interfaces/iArtist';
import { iComic } from '../interfaces/iComics';
import { userWithToken } from '../interfaces/iUser';
import { artistsReducer } from '../reducers/artists/artists.reducer';
import { comicsReducer } from '../reducers/comics/comics.reducer';
import { usersReducer } from '../reducers/users/users.reducer';
import { iStore } from '../store/store';
import { render, screen } from '../utils/test.utils';
import { PicArtist } from './pic.artist';

const reducer = {
    comics: comicsReducer,
    artists: artistsReducer,
    user: usersReducer,
};

const mockArtist: iArtist = {
    about: '',
    comics: [] as Array<iComic>,
    id: '',
    image: 'test',
    name: 'test',
    rol: 'writer',
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
                <BrowserRouter>
                    <PicArtist artist={mockArtist}></PicArtist>
                </BrowserRouter>,
                {
                    preloadedState,
                    reducer,
                }
            );
            const element = screen.getByAltText(/test/i);
            expect(element).toBeInTheDocument();
        });
    });
});
