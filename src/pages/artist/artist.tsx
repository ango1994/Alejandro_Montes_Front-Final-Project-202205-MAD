import { useLocation } from 'react-router-dom';
import { PicComic } from '../../components/pic.comic/pic.comic';
import { iArtist } from '../../interfaces/iArtist';
import styles from './artist.module.css';

export function Artist() {
    const location = useLocation();
    const props = location.state as { artist: iArtist };
    return (
        <div>
            <div className={styles.container}>
                <div>
                    <img
                        src={props.artist.image}
                        alt=""
                        className={styles.img}
                    />
                </div>
                <div>
                    <h2>{props.artist.name}</h2>
                    <p>{props.artist.about}</p>
                </div>
            </div>
            <ul>
                {props.artist.comics
                    ? props.artist.comics.map((comic) => (
                          <PicComic comic={comic}></PicComic>
                      ))
                    : ''}
            </ul>
        </div>
    );
}

export default Artist;
