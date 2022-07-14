import { useSelector } from 'react-redux';
import { PicComic } from '../components/pic.comic';
import { iStore } from '../store/store';
import styles from './american.module.css';

export function American() {
    const comics = useSelector((store: iStore) => store.comics);
    return (
        <div>
            <h1>American</h1>
            <ul className={styles.list}>
                {comics
                    .filter((comic) => comic.category === 'american')
                    .map((comic) => (
                        <li>
                            <PicComic comic={comic}></PicComic>
                        </li>
                    ))}
            </ul>
        </div>
    );
}

export default American;
