import React, { useEffect, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import { loadArtistsAction } from './reducers/artists/artists.action.creators';
import { loadComicsAction } from './reducers/comics/comics.action.creators';
import { ArtistHttpStore } from './services/artist.http.store';
import { ComicHttpStore } from './services/comic.http.store';

function App() {
    const dispatcher = useDispatch();
    const apiArtsits = useMemo(() => new ArtistHttpStore(), []);
    const apiComics = useMemo(() => new ComicHttpStore(), []);

    useEffect(() => {
        apiArtsits
            .getAllArtists()
            .then((artists) => dispatcher(loadArtistsAction(artists)));
        apiComics
            .getAllComics()
            .then((comics) => dispatcher(loadComicsAction(comics)));
    }, [apiArtsits, apiComics, dispatcher]);

    return (
        <div className="App">
            <h1>Hola mundo</h1>
        </div>
    );
}

export default App;
