import { BrowserRouter } from 'react-router-dom';
import { iArtist } from '../../interfaces/iArtist';
import { iComic } from '../../interfaces/iComics';
import { userWithToken } from '../../interfaces/iUser';
import { artistsReducer } from '../../reducers/artists/artists.reducer';
import { comicDisplayReducer } from '../../reducers/comic.display/comic.display.reducer';
import { comicsReducer } from '../../reducers/comics/comics.reducer';
import { usersReducer } from '../../reducers/users/users.reducer';
import { ComicHttpStore } from '../../services/comic.http.store';
import { iStore } from '../../store/store';
import { fireEvent, render, screen } from '../../utils/test.utils';
import { Score } from './score';

const reducer = {
    comics: comicsReducer,
    artists: artistsReducer,
    user: usersReducer,
    comicDisplay: comicDisplayReducer,
};

// const mockComic: iComic = {
//     _id: '',
//     image: 'test',
//     name: 'test',
//     artist: [] as Array<iArtist>,
//     category: 'american',
//     description: '',
//     publicationDate: '',
//     score: [],
// };

const preloadedState: iStore = {
    comics: [] as Array<iComic>,
    artists: [] as Array<iArtist>,
    user: { token: '99', user: { _id: '83' } } as userWithToken,
    comicDisplay: {
        _id: '55',
        image: 'test',
        name: 'test',
        artist: [] as Array<iArtist>,
        category: 'american',
        description: '',
        publicationDate: '',
        score: [
            { scored: -1, user: '66' },
            { scored: -1, user: '83' },
        ],
    },
};

describe('Given the component Score', () => {
    describe('When it is called', () => {
        test('Then it should render the selector', () => {
            render(
                <BrowserRouter>
                    <Score></Score>
                </BrowserRouter>,
                {
                    preloadedState,
                    reducer,
                }
            );
            const element = screen.getByText(/No/i);
            expect(element).toBeInTheDocument();
        });
    });
    describe('When it is called and value input changes', () => {
        test('Then it should call the api', () => {
            const api = (ComicHttpStore.prototype.scoreComic = jest
                .fn()
                .mockResolvedValue({}));

            render(
                <BrowserRouter>
                    <Score></Score>
                </BrowserRouter>,
                {
                    preloadedState,
                    reducer,
                }
            );

            const selectOne = screen.getByRole('combobox', {
                name: '',
            });

            fireEvent.change(selectOne, { target: { name: 5 } });
            expect(api).toHaveBeenCalled();
        });
    });
});
