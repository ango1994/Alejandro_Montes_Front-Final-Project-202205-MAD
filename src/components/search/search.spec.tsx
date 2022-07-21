import { BrowserRouter } from 'react-router-dom';
import { iArtist } from '../../interfaces/iArtist';
import { iComic } from '../../interfaces/iComics';
import { userWithToken } from '../../interfaces/iUser';
import { artistsReducer } from '../../reducers/artists/artists.reducer';
import { comicsReducer } from '../../reducers/comics/comics.reducer';
import { usersReducer } from '../../reducers/users/users.reducer';
import { ComicHttpStore } from '../../services/comic.http.store';
import { iStore } from '../../store/store';
import { fireEvent, render, screen } from '../../utils/test.utils';
import { Search } from './search';

const reducer = {
    comics: comicsReducer,
    artists: artistsReducer,
    user: usersReducer,
    comicDisplay: comicsReducer,
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
    artists: [] as Array<iArtist>,
    user: {} as userWithToken,
    comicDisplay: {} as iComic,
};

describe('Given the component Search', () => {
    describe('When it is called', () => {
        test('Then it should print the component', () => {
            render(
                <BrowserRouter>
                    <Search setResponse={() => {}}></Search>
                </BrowserRouter>,
                {
                    preloadedState,
                    reducer,
                }
            );
            const element = screen.getByRole('textbox');
            expect(element).toBeInTheDocument();
        });
    });
    describe('When it is called and textbox is filled', () => {
        test('Then it should print the component', () => {
            render(
                <BrowserRouter>
                    <Search setResponse={() => {}}></Search>
                </BrowserRouter>,
                {
                    preloadedState,
                    reducer,
                }
            );
            ComicHttpStore.prototype.getComicByName = jest
                .fn()
                .mockResolvedValue({});
            const element = screen.getByRole('textbox');
            fireEvent.change(element, { target: { value: 'test' } });
            expect(element).toBeInTheDocument();
        });
    });
    describe('When it is called and textbox is clicked', () => {
        test('Then it should call setState', () => {
            render(
                <BrowserRouter>
                    <Search setResponse={() => {}}></Search>
                </BrowserRouter>,
                {
                    preloadedState,
                    reducer,
                }
            );
            ComicHttpStore.prototype.getComicByName = jest
                .fn()
                .mockResolvedValue({});
            const element = screen.getByRole('textbox');
            fireEvent.click(element);
            fireEvent.change(element, { target: { value: 'test' } });
            expect(element).toBeInTheDocument();
        });
    });
});
