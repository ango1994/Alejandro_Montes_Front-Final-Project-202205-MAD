import { useLocation } from 'react-router-dom';
import { iComic } from '../interfaces/iComics';

import styles from './comic.module.css';

export function Comic() {
    const location = useLocation();
    const props = location.state as { comic: iComic };

    return (
        <div>
            <h1>Comic</h1>
            <div>
                <img src={props.comic.image} alt="" className={styles.img} />
                <div>
                    <h2>{props.comic.name}</h2>
                    <p>{props.comic.description}</p>
                </div>
            </div>
            <div>
                <div>
                    <h3>Publication Date</h3>
                    <p>{props.comic.publicationDate}</p>
                </div>
                <div>
                    <h3>Artist</h3>
                    <p>
                        {props.comic.artist[0]
                            ? props.comic.artist[0].name
                            : ''}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Comic;
