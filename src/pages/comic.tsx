import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { Score } from '../components/score';
import { iComic } from '../interfaces/iComics';
import { iStore } from '../store/store';

import styles from './comic.module.css';

export function Comic() {
    const location = useLocation();
    const props = location.state as { comic: iComic };

    const comics = useSelector((store: iStore) => store.comics);
    const user = useSelector((store: iStore) => store.user);

    if (!props) {
        return <Navigate to="/home" replace />;
    }

    const findComic = comics.find((comic) => comic._id === props.comic._id);

    const calculateMediaScore = () => {
        if (findComic) {
            return (
                findComic.score.reduce((a, b) => a + b.scored, 0) /
                findComic.score.length
            ).toFixed(1);
        }
    };

    return (
        <div className={styles.main}>
            <div className={styles.headerSpace}></div>
            <div className={styles.container}>
                <div className={styles.containerLeft}>
                    <img
                        src={props.comic.image}
                        alt=""
                        className={styles.img}
                    />
                    <p className={styles.score}>{calculateMediaScore()}</p>
                </div>
                <div className={styles.info}>
                    <h2>{props.comic.name}</h2>

                    <p className={styles.description}>
                        {props.comic.description}
                    </p>
                    <div className={styles.infoLow}>
                        <div className={styles.yourScore}>
                            <h3>Your score</h3>
                            {findComic && user.token ? (
                                <Score comic={findComic}></Score>
                            ) : (
                                ''
                            )}
                        </div>
                        <div className={styles.date}>
                            <h3>Publication Date</h3>
                            <p>{props.comic.publicationDate}</p>
                        </div>
                        <div className={styles.artist}>
                            <h3>Artist</h3>
                            <p>
                                {props.comic.artist[0]
                                    ? props.comic.artist[0].name
                                    : ''}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Comic;
