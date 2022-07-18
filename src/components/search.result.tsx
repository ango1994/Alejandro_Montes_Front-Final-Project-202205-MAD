import { iComic } from '../interfaces/iComics';
import styles from './search.result.module.css';

export function SearchResult({ comic }: { comic: iComic }) {
    return (
        <div className={styles.container}>
            <img src={comic.image} alt="" className={styles.comicImg} />
            <p>{comic.name}</p>
        </div>
    );
}
