import { MemoryRouter } from 'react-router-dom';
import { iArtist } from '../../interfaces/iArtist';
import { iComic } from '../../interfaces/iComics';
import { iUser, userWithToken } from '../../interfaces/iUser';
import { artistsReducer } from '../../reducers/artists/artists.reducer';
import { comicDisplayReducer } from '../../reducers/comic.display/comic.display.reducer';
import { comicsReducer } from '../../reducers/comics/comics.reducer';
import { usersReducer } from '../../reducers/users/users.reducer';
import { UserHttpStore } from '../../services/user.http.store';
import { iStore } from '../../store/store';
import { fireEvent, render, screen } from '../../utils/test.utils';
import { AddFavourite } from './add.favourite';

const reducer = {
    comics: comicsReducer,
    artists: artistsReducer,
    user: usersReducer,
    comicDisplay: comicDisplayReducer,
};

const preloadedState: iStore = {
    comics: [] as Array<iComic>,
    artists: [] as Array<iArtist>,
    user: { token: '99', user: { _id: '33' } } as userWithToken,
    comicDisplay: {} as iComic,
};

const mockComic = {} as iComic;

describe('Given the component AddFavourite', () => {
    describe('When it is called and Add Favourite button is clicked', () => {
        test('The it should call handleClick funciton', () => {
            render(
                <MemoryRouter>
                    <AddFavourite comic={mockComic}></AddFavourite>
                </MemoryRouter>,
                { preloadedState, reducer }
            );
            const result = (UserHttpStore.prototype.addFavouriteComicToUser =
                jest.fn().mockResolvedValue({} as iUser));

            const button = screen.getByText('Add Favourite');
            fireEvent.click(button);
            expect(result).toHaveBeenCalled();
        });
    });
});
