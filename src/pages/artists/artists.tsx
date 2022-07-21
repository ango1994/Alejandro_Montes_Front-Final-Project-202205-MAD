import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { PicArtist } from '../../components/pic.artist/pic.artist';
import { iStore } from '../../store/store';
import styles from './artists.module.css';

export function Artists() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const artists = useSelector((store: iStore) => store.artists);
    return (
        <div>
            <div className={styles.header}></div>
            <div className={styles.containerArists}>
                <h1 className={styles.artists}>Artists</h1>
            </div>

            <ul className={styles.list}>
                {artists.map((artist) => (
                    <li key={artist.name} className={styles.artist}>
                        <PicArtist artist={artist}></PicArtist>
                        <h3 className={styles.name}>{artist.name}</h3>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Artists;
