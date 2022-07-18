import { Link } from 'react-router-dom';
import { iComic } from '../../interfaces/iComics';
import styles from './search.result.module.css';

export function SearchResult({ comic }: { comic: iComic }) {
    return (
        <Link to={'/comic'} state={{ comic }} className={styles.link}>
            <div className={styles.container}>
                <img src={comic.image} alt="" className={styles.comicImg} />
                <p className={styles.comicName}>{comic.name}</p>
            </div>
        </Link>
    );
}
