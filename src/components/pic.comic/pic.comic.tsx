import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { iComic } from '../../interfaces/iComics';
import { iStore } from '../../store/store';
import { AddFavourite } from '../add.favourite/add.favourite';
import styles from './pic.comic.module.css';

export function PicComic({ comic }: { comic: iComic }) {
    const user = useSelector((store: iStore) => store.user);
    const [faved, setFaved] = useState(false);

    function toggleFav() {
        setFaved(!faved);
    }

    function toggleClass(faved: boolean) {
        if (!faved) {
            return styles.notFaved;
        }
        return styles.faved;
    }
    return (
        <>
            <Link to={'/comic'} state={{ comic }}>
                <img
                    src={comic.image}
                    alt={comic.name}
                    className={`${styles.img} ${toggleClass(faved)}`}
                />
            </Link>
            {user.token ? (
                <AddFavourite comic={comic} func={toggleFav}></AddFavourite>
            ) : (
                ''
            )}
        </>
    );
}
