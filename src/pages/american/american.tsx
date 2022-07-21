import { useSelector } from 'react-redux';
import { PicComic } from '../../components/pic.comic/pic.comic';
import { iStore } from '../../store/store';
import styles from './american.module.css';

export function American() {
    const comics = useSelector((store: iStore) => store.comics);
    return (
        <div>
            <h1 className={styles.title}>American</h1>
            <ul className={styles.list}>
                {comics
                    .filter((comic) => comic.category === 'american')
                    .map((comic) => (
                        <li className={styles.comic} key={comic._id}>
                            <PicComic comic={comic}></PicComic>
                            <h3 className={styles.comicName}>{comic.name}</h3>
                        </li>
                    ))}
            </ul>
        </div>
    );
}

export default American;
