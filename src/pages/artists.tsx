import { useSelector } from 'react-redux';
import { PicArtist } from '../components/pic.artist';
import { iStore } from '../store/store';
import styles from './artists.module.css';

export function Artists() {
    const artists = useSelector((store: iStore) => store.artists);
    return (
        <div>
            <h1>Artists</h1>
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
