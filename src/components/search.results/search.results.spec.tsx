import { MemoryRouter } from 'react-router-dom';
import { iArtist } from '../../interfaces/iArtist';
import { iComic } from '../../interfaces/iComics';
import { userWithToken } from '../../interfaces/iUser';
import { artistsReducer } from '../../reducers/artists/artists.reducer';
import { comicDisplayReducer } from '../../reducers/comic.display/comic.display.reducer';
import { comicsReducer } from '../../reducers/comics/comics.reducer';
import { usersReducer } from '../../reducers/users/users.reducer';
import { iStore } from '../../store/store';
import { render, screen } from '../../utils/test.utils';
import { SearchResults } from './search.results.component';

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
const mockComics: Array<iComic> = [
    {
        _id: '',
        artist: [],
        category: 'american',
        description: '',
        image: '',
        name: 'test',
        publicationDate: '',
        score: [{ scored: 1, user: '' }],
    },
];

describe('Given the component SearchResults', () => {
    describe('When it is called', () => {
        test('Then it shoul print the component', () => {
            render(
                <MemoryRouter>
                    <SearchResults comics={mockComics}></SearchResults>
                </MemoryRouter>,
                { preloadedState, reducer }
            );
            const text = screen.getByText(/test/i);
            expect(text).toBeInTheDocument();
        });
    });
});
