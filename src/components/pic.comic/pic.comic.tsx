import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { iComic } from '../../interfaces/iComics';
import { iStore } from '../../store/store';
import { AddFavourite } from '../add.favourite/add.favourite';
import styles from './pic.comic.module.css';

export function PicComic({ comic }: { comic: iComic }) {
    const user = useSelector((store: iStore) => store.user);
    return (
        <>
            <Link to={'/comic'} state={{ comic }}>
                <img
                    src={comic.image}
                    alt={comic.name}
                    className={styles.img}
                />
            </Link>
            {user.token ? <AddFavourite comic={comic}></AddFavourite> : ''}
        </>
    );
}
