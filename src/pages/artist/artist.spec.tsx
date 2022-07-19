import { BrowserRouter } from 'react-router-dom';
import { iArtist } from '../../interfaces/iArtist';
import { iComic } from '../../interfaces/iComics';
import { userWithToken } from '../../interfaces/iUser';
import { artistsReducer } from '../../reducers/artists/artists.reducer';
import { comicDisplayReducer } from '../../reducers/comic.display/comic.display.reducer';
import { comicsReducer } from '../../reducers/comics/comics.reducer';
import { usersReducer } from '../../reducers/users/users.reducer';
import { iStore } from '../../store/store';
import { render, screen } from '../../utils/test.utils';
import Artist from './artist';

const reducer = {
    comics: comicsReducer,
    artists: artistsReducer,
    user: usersReducer,
    comicDisplay: comicDisplayReducer,
};

const preloadedState: iStore = {
    comics: [
        {
            artist: [] as Array<iArtist>,
            category: 'american',
            description: '',
            _id: '',
            image: '',
            name: '',
            publicationDate: '',
        },
    ] as Array<iComic>,
    artists: [
        {
            about: '',
            comics: [] as Array<iComic>,
            id: '',
            image: '',
            name: '',
            rol: 'writer',
        },
    ] as Array<iArtist>,
    user: {} as userWithToken,
    comicDisplay: {} as iComic,
};
describe('Given the component Artist', () => {
    describe('When it is called', () => {
        test('Then it should render the artist page', () => {
            render(
                <BrowserRouter>
                    <Artist></Artist>
                </BrowserRouter>,
                {
                    preloadedState,
                    reducer,
                }
            );
            const element = screen.getByText(/Artists/i);
            expect(element).toBeInTheDocument();
        });
    });
});
