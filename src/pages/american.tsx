import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { iStore } from '../store/store';
import styles from './american.module.css';

export function American() {
    const comics = useSelector((store: iStore) => store.comics);
    return (
        <div>
            <h1>American</h1>;
            <ul className={styles.list}>
                {comics
                    .filter((comic) => comic.category === 'american')
                    .map((comic) => (
                        <li>
                            <Link to={'/comic'} state={{ comic }}>
                                <img
                                    src={comic.image}
                                    alt=""
                                    className={styles.img}
                                />
                            </Link>
                        </li>
                    ))}
            </ul>
        </div>
    );
}

export default American;
