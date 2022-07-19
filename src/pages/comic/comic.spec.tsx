import { MemoryRouter } from 'react-router-dom';
import { iArtist } from '../../interfaces/iArtist';
import { iComic } from '../../interfaces/iComics';
import { userWithToken } from '../../interfaces/iUser';
import { artistsReducer } from '../../reducers/artists/artists.reducer';
import { comicsReducer } from '../../reducers/comics/comics.reducer';
import { usersReducer } from '../../reducers/users/users.reducer';
import { iStore } from '../../store/store';
import Comic from './comic';

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
    user: { token: '' } as userWithToken,
    comicDisplay: {} as iComic,
};

jest.mock('react-router-dom', () => ({
    useLocation: jest.fn().mockResolvedValue({
        pathname: '/comic',
        state: {
            comic: {
                artist: [] as Array<iArtist>,
                category: 'american',
                description: '',
                _id: '',
                image: '',
                name: '',
                publicationDate: '',
            },
        },
    }),
}));

describe('Given the componen ProtectRoute', () => {
    describe('When it is called with a user token', () => {
        test.skip('Then it should render mycomix page', () => {
            render(
                <MemoryRouter>
                    <Comic></Comic>
                </MemoryRouter>,
                { preloadedState, reducer }
            );
            const element = screen.getByText('Comic');
            expect(element).toBeInTheDocument();
        });
    });
});
