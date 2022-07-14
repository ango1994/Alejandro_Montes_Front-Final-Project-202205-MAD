import { MemoryRouter } from 'react-router-dom';
import { iArtist } from '../interfaces/iArtist';
import { iComic } from '../interfaces/iComics';
import { userWithToken } from '../interfaces/iUser';
import MyComix from '../pages/mycomix';
import { artistsReducer } from '../reducers/artists/artists.reducer';
import { comicsReducer } from '../reducers/comics/comics.reducer';
import { usersReducer } from '../reducers/users/users.reducer';
import { iStore } from '../store/store';
import { ProtectedRoute } from './protect.route';
import { render, screen } from './test.utils';

const reducer = {
    comics: comicsReducer,
    artists: artistsReducer,
    user: usersReducer,
};

const preloadedState: iStore = {
    comics: [] as Array<iComic>,
    artists: [] as Array<iArtist>,
    user: { token: '' } as userWithToken,
};

export function MockTemplate() {
    return <p>test</p>;
}

describe('Given the componen ProtectRoute', () => {
    describe('When it is called with a user token', () => {
        test('Then it should render mycomix page', () => {
            render(
                <MemoryRouter>
                    <ProtectedRoute token="9">
                        <MyComix></MyComix>
                    </ProtectedRoute>
                </MemoryRouter>,
                { preloadedState, reducer }
            );
            const element = screen.getByText('mycomix');
            expect(element).toBeInTheDocument();
        });
    });
    describe('When it is called without a user token', () => {
        test('Then it should render login page', () => {
            render(
                <MemoryRouter>
                    <ProtectedRoute token={''}>
                        <MockTemplate></MockTemplate>
                    </ProtectedRoute>
                </MemoryRouter>,
                { preloadedState, reducer }
            );
            const element = screen.getByText('Send');
            expect(element).toBeInTheDocument();
            expect(element).toBeInTheDocument();
        });
    });
});
