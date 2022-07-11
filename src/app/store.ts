import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { artistsReducer } from '../reducers/artists/artists.reducer';

export const store = configureStore({
    reducer: {
        artist: artistsReducer,
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;

