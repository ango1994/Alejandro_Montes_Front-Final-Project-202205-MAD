import { Link } from 'react-router-dom';
import { iComic } from '../interfaces/iComics';
import styles from './pic.comic.module.css';

export function PicComic({ comic }: { comic: iComic }) {
    return (
        <Link to={'/comic'} state={{ comic }}>
            <img src={comic.image} alt={comic.name} className={styles.img} />
        </Link>
    );
}
