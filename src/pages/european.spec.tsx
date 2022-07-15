import { BrowserRouter } from 'react-router-dom';
import { iArtist } from '../interfaces/iArtist';
import { iComic } from '../interfaces/iComics';
import { userWithToken } from '../interfaces/iUser';
import { artistsReducer } from '../reducers/artists/artists.reducer';
import { comicsReducer } from '../reducers/comics/comics.reducer';
import { usersReducer } from '../reducers/users/users.reducer';
import { iStore } from '../store/store';
import { render, screen } from '../utils/test.utils';
import European from './european';

const reducer = {
    comics: comicsReducer,
    artists: artistsReducer,
    user: usersReducer,
};

const preloadedState: iStore = {
    comics: [
        {
            artist: [] as Array<iArtist>,
            category: 'european',
            description: '',
            id: '',
            image: '',
            name: '',
            publicationDate: '',
        },
    ] as Array<iComic>,
    artists: [] as Array<iArtist>,
    user: {} as userWithToken,
};
describe('Given the component European', () => {
    describe('When it is called', () => {
        test('Then it should render the european page', () => {
            render(
                <BrowserRouter>
                    <European></European>
                </BrowserRouter>,
                {
                    preloadedState,
                    reducer,
                }
            );
            const element = screen.getByText(/European/i);
            expect(element).toBeInTheDocument();
        });
    });
});
