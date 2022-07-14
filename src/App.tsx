import React, { useEffect, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Layout } from './components/layout';
import { iRouterItem } from './interfaces/iRouterItem';
import { loadArtistsAction } from './reducers/artists/artists.action.creators';
import { loadComicsAction } from './reducers/comics/comics.action.creators';
import { loadUserAction } from './reducers/users/users.action.creators';
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
        const user = localStorage.getItem('user');
        if (user) {
            dispatcher(loadUserAction(JSON.parse(user)));
        }
    }, [apiArtsits, apiComics, dispatcher]);

    const HomePage = React.lazy(() => import('./pages/home'));
    const CategoriesPage = React.lazy(() => import('./pages/categories'));
    const ArtistsPage = React.lazy(() => import('./pages/artists'));
    const MyComixPage = React.lazy(() => import('./pages/mycomix'));
    const LoginPage = React.lazy(() => import('./pages/login'));
    const RegisterPage = React.lazy(() => import('./pages/register'));
    const AmericanPage = React.lazy(() => import('./pages/american'));
    const EuropeanPage = React.lazy(() => import('./pages/european'));
    const MangaPage = React.lazy(() => import('./pages/manga'));
    const ComicPage = React.lazy(() => import('./pages/comic'));

    const routerOptions: Array<iRouterItem> = [
        { path: '/', label: 'Home', page: <HomePage></HomePage> },
        {
            path: '/categories',
            label: 'Categories',
            page: <CategoriesPage></CategoriesPage>,
        },
        {
            path: '/comic',
            label: 'Comic',
            page: <ComicPage></ComicPage>,
        },
        {
            path: '/categories/american',
            label: 'American',
            page: <AmericanPage></AmericanPage>,
        },
        {
            path: '/categories/european',
            label: 'European',
            page: <EuropeanPage></EuropeanPage>,
        },
        {
            path: 'categories/manga',
            label: 'Manga',
            page: <MangaPage></MangaPage>,
        },
        {
            path: '/artists',
            label: 'Artists',
            page: <ArtistsPage></ArtistsPage>,
        },
        {
            path: '/mycomix',
            label: 'MyComix',
            page: <MyComixPage></MyComixPage>,
        },
        { path: '/login', label: 'Login', page: <LoginPage></LoginPage> },
        {
            path: '/register',
            label: 'Register',
            page: <RegisterPage></RegisterPage>,
        },
    ];
    return (
        <Layout menuOptions={routerOptions}>
            <React.Suspense>
                <Routes>
                    {routerOptions.map((item) => (
                        <Route
                            key={item.label}
                            path={item.path}
                            element={item.page}
                        ></Route>
                    ))}
                </Routes>
            </React.Suspense>
        </Layout>
    );
}

export default App;
