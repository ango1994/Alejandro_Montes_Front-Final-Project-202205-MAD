import { configureStore } from '@reduxjs/toolkit';
import { iArtist } from '../interfaces/iArtist';
import { iComic } from '../interfaces/iComics';
import { userWithToken } from '../interfaces/iUser';
import { artistsReducer } from '../reducers/artists/artists.reducer';
import { comicDisplayReducer } from '../reducers/comic.display/comic.display.reducer';
import { comicsReducer } from '../reducers/comics/comics.reducer';
import { usersReducer } from '../reducers/users/users.reducer';

export interface iStore {
    comics: Array<iComic>;
    artists: Array<iArtist>;
    user: userWithToken;
    comicDisplay: iComic;
}

const preloadedState = {
    comics: [] as Array<iComic>,
    artists: [] as Array<iArtist>,
    user: {} as userWithToken,
    comicDisplay: {} as iComic,
};

export const store = configureStore({
    reducer: {
        comics: comicsReducer,
        artists: artistsReducer,
        user: usersReducer,
        comicDisplay: comicDisplayReducer,
    },
    preloadedState,
});
