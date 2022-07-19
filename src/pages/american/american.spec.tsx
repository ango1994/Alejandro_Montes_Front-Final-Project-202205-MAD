import { BrowserRouter } from 'react-router-dom';
import { iArtist } from '../../interfaces/iArtist';
import { iComic } from '../../interfaces/iComics';
import { userWithToken } from '../../interfaces/iUser';
import { artistsReducer } from '../../reducers/artists/artists.reducer';
import { comicsReducer } from '../../reducers/comics/comics.reducer';
import { usersReducer } from '../../reducers/users/users.reducer';
import { iStore } from '../../store/store';
import { render, screen } from '../../utils/test.utils';
import American from './american';

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
describe('Given the component American', () => {
    describe('When it is called', () => {
        test('Then it should render the american page', () => {
            render(
                <BrowserRouter>
                    <American></American>
                </BrowserRouter>,
                {
                    preloadedState,
                    reducer,
                }
            );
            const element = screen.getByText(/American/i);
            expect(element).toBeInTheDocument();
        });
    });
});
