import { BrowserRouter } from 'react-router-dom';
import { iArtist } from '../interfaces/iArtist';
import { iComic } from '../interfaces/iComics';
import { userWithToken } from '../interfaces/iUser';
import { artistsReducer } from '../reducers/artists/artists.reducer';
import { comicsReducer } from '../reducers/comics/comics.reducer';
import { usersReducer } from '../reducers/users/users.reducer';
import { iStore } from '../store/store';
import { render, screen } from '../utils/test.utils';
import { PicComic } from './pic.comic';

const reducer = {
    comics: comicsReducer,
    artists: artistsReducer,
    user: usersReducer,
};

const mockComic: iComic = {
    _id: '',
    image: 'test',
    name: 'test',
    artist: [] as Array<iArtist>,
    category: 'american',
    description: '',
    publicationDate: '',
    score: [],
};

const preloadedState: iStore = {
    comics: [] as Array<iComic>,
    artists: [] as Array<iArtist>,
    user: { token: '99', user: { _id: '83' } } as userWithToken,
};
describe('Given the component Header', () => {
    describe('When it is called', () => {
        test('Then it should render the header', () => {
            render(
                <BrowserRouter>
                    <PicComic comic={mockComic}></PicComic>
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
