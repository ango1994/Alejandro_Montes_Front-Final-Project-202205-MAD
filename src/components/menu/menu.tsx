import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { iStore } from '../../store/store';
import { Logout } from '../logout/logout';
import styles from './menu.module.css';

export function Menu({ menu }: { menu: Function }) {
    const user = useSelector((store: iStore) => store.user.token);
    const handleClick = () => {
        menu();
    };
    return (
        <div className={styles.menu}>
            <nav className={styles.navigation}>
                <div className={styles.item}>
                    <p className={styles.small}>01</p>
                    <div className={styles.containerUnder}>
                        <Link
                            to={'/home'}
                            className={styles.navItem}
                            onClick={handleClick}
                        >
                            HOME
                        </Link>
                        <div className={styles.underlineHome}></div>
                    </div>
                </div>
                <div className={styles.item}>
                    <p className={styles.small}>02</p>
                    <div className={styles.containerUnder}>
                        <Link
                            to={'/artists'}
                            className={styles.navItem}
                            onClick={handleClick}
                        >
                            ARTISTS
                        </Link>
                        <div className={styles.underlineArtists}></div>
                    </div>
                </div>
                <div className={styles.item}>
                    <p className={styles.small}>03</p>
                    <div className={styles.containerUnder}>
                        <Link
                            to={'/categories'}
                            className={styles.navItem}
                            onClick={handleClick}
                        >
                            CATEGORIES
                        </Link>
                        <div className={styles.underlineCategories}></div>
                    </div>
                </div>
                <div className={styles.item}>
                    <p className={styles.small}>04</p>
                    <div className={styles.containerUnder}>
                        <Link
                            to={'/mycomix'}
                            className={styles.navItem}
                            onClick={handleClick}
                        >
                            MYCOMIX
                        </Link>
                        <div className={styles.underlineMycomix}></div>
                    </div>
                </div>
            </nav>
            <div className={styles.menuRight}>
                <button onClick={handleClick} className={styles.close}>
                    close
                </button>
                {!user ? (
                    <Link
                        to={'/login'}
                        className={styles.login}
                        onClick={handleClick}
                    >
                        login
                    </Link>
                ) : (
                    <div className={styles.login}>
                        <Logout click={handleClick}></Logout>
                    </div>
                )}
            </div>
        </div>
    );
}
