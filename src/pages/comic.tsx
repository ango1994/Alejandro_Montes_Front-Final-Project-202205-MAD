import { useLocation } from 'react-router-dom';
import { iComic } from '../interfaces/iComics';

export function Comic() {
    const location = useLocation();
    const comic = location.state as { comic: iComic };

    console.log(comic);

    return (
        <div>
            <h1>Comic</h1>
            <p>{comic.comic.name}</p>
            <img src={comic.comic.image} alt="" />
        </div>
    );
}

export default Comic;
