import React, { useEffect, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import { Home } from './pages/home';
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
    <Routes>
        <Route path="/casa" element={<Home></Home>}></Route>
    </Routes>;
    return (
        <div className="App">
            <Link to="/casa">El pepe</Link>
            <h1>Hola mundo</h1>;
        </div>
    );
}

export default App;
