import { iArtist } from '../../interfaces/iArtist';
import { iComic } from '../../interfaces/iComics';
import { userWithToken } from '../../interfaces/iUser';
import { artistsReducer } from '../../reducers/artists/artists.reducer';
import { comicsReducer } from '../../reducers/comics/comics.reducer';
import { usersReducer } from '../../reducers/users/users.reducer';
import { iStore } from '../../store/store';
import { fireEvent, render, screen } from '../../utils/test.utils';
import { Menu } from './menu';

const reducer = {
    comics: comicsReducer,
    artists: artistsReducer,
    user: usersReducer,
};

const preloadedState: iStore = {
    comics: [] as Array<iComic>,
    artists: [] as Array<iArtist>,
    user: {} as userWithToken,
};
const mockFunction = jest.fn();
describe('Given the component Menu', () => {
    describe('When it is called', () => {
        test('Then it should render the menu', () => {
            render(<Menu menu={mockFunction}></Menu>, {
                preloadedState,
                reducer,
            });
            const element = screen.getByText(/close/i);
            expect(element).toBeInTheDocument();
        });
    });
    describe('When it is called and button close is clicked', () => {
        test('Then it should call the mocked function funciton', async () => {
            render(<Menu menu={mockFunction}></Menu>, {
                preloadedState,
                reducer,
            });
            const button = screen.getByText('CLOSE');
            fireEvent.click(button);

            expect(mockFunction).toHaveBeenCalled();
        });
    });
});
