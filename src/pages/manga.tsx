import { useSelector } from 'react-redux';
import { PicComic } from '../components/pic.comic';
import { iStore } from '../store/store';
import styles from './european.module.css';

export function Manga() {
    const comics = useSelector((store: iStore) => store.comics);
    return (
        <div>
            <ul className={styles.list}>
                {comics
                    .filter((comic) => comic.category === 'manga')
                    .map((comic) => (
                        <li className={styles.comic}>
                            <PicComic comic={comic}></PicComic>
                            <h3 className={styles.comicName}>{comic.name}</h3>
                        </li>
                    ))}
            </ul>
        </div>
    );
}

export default Manga;
