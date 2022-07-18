import { Link } from 'react-router-dom';
import { iArtist } from '../../interfaces/iArtist';
import styles from './pic.artist.module.css';

export function PicArtist({ artist }: { artist: iArtist }) {
    return (
        <Link to={'/artist'} state={{ artist }}>
            <img src={artist.image} alt={artist.name} className={styles.img} />
        </Link>
    );
}
