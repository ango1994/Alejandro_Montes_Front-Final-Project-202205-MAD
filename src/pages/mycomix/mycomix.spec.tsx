import { BrowserRouter } from 'react-router-dom';
import { iArtist } from '../../interfaces/iArtist';
import { iComic } from '../../interfaces/iComics';
import { iUser, userWithToken } from '../../interfaces/iUser';
import { artistsReducer } from '../../reducers/artists/artists.reducer';
import { comicDisplayReducer } from '../../reducers/comic.display/comic.display.reducer';
import { comicsReducer } from '../../reducers/comics/comics.reducer';
import { usersReducer } from '../../reducers/users/users.reducer';
import { iStore } from '../../store/store';
import { render, screen } from '../../utils/test.utils';
import MyComix from './mycomix';

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
            category: 'manga',
            description: '',
            _id: '',
            image: '',
            name: '',
            publicationDate: '',
        },
    ] as Array<iComic>,
    artists: [] as Array<iArtist>,
    user: {
        token: '99',
        user: { comics: [{ name: 'test' } as iComic, {}] } as iUser,
    } as userWithToken,
    comicDisplay: {} as iComic,
};
describe('Given the component Manga', () => {
    describe('When it is called', () => {
        test('Then it should render the manga page', () => {
            render(
                <BrowserRouter>
                    <MyComix></MyComix>
                </BrowserRouter>,
                {
                    preloadedState,
                    reducer,
                }
            );
            const element = screen.getByText(/mycomix/i);
            expect(element).toBeInTheDocument();
        });
        test('Then it should render the manga', () => {
            render(
                <BrowserRouter>
                    <MyComix></MyComix>
                </BrowserRouter>,
                {
                    preloadedState,
                    reducer,
                }
            );
            const element = screen.getByText(/test/i);
            expect(element).toBeInTheDocument();
        });
    });
    describe('When it is called without', () => {
        test('Then it should render the manga page', () => {
            const preloadedState: iStore = {
                comics: [
                    {
                        artist: [] as Array<iArtist>,
                        category: 'manga',
                        description: '',
                        _id: '',
                        image: '',
                        name: '',
                        publicationDate: '',
                    },
                ] as Array<iComic>,
                artists: [] as Array<iArtist>,
                user: {
                    token: '99',
                    user: {} as iUser,
                } as userWithToken,
                comicDisplay: {} as iComic,
            };
            render(
                <BrowserRouter>
                    <MyComix></MyComix>
                </BrowserRouter>,
                {
                    preloadedState,
                    reducer,
                }
            );
            const element = screen.getByText(/no comics/i);
            expect(element).toBeInTheDocument();
        });
    });
});
