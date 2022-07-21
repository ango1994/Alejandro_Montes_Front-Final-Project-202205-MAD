import { useLocation } from 'react-router-dom';
import { PicComic } from '../../components/pic.comic/pic.comic';
import { iArtist } from '../../interfaces/iArtist';
import styles from './artist.module.css';

export function Artist() {
    const location = useLocation();
    const props = location.state as { artist: iArtist };
    return (
        <div>
            <div className={styles.header}></div>
            <div className={styles.container}>
                <div>
                    <img
                        src={props.artist.image}
                        alt={props.artist.name}
                        className={styles.img}
                    />
                </div>
                <div className={styles.info}>
                    <h2 className={styles.name}>{props.artist.name}</h2>
                    <p className={styles.about}>{props.artist.about}</p>
                </div>
            </div>
            <ul className={styles.list}>
                {props &&
                    props.artist.comics.map((comic) => (
                        <li className={styles.comic}>
                            <PicComic comic={comic} key={comic._id}></PicComic>
                            <p className={styles.comicName}>{comic.name}</p>
                        </li>
                    ))}
            </ul>
        </div>
    );
}

export default Artist;
