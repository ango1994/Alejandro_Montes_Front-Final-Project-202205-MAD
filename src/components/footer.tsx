import { Link } from 'react-router-dom';
import { iRouterItem } from '../interfaces/iRouterItem';
import styles from './footer.module.css';

export function Footer({ menuOptions }: { menuOptions: Array<iRouterItem> }) {
    return (
        <div className={styles.footer}>
            <ul className={styles.navigation}>
                {/* {menuOptions.map((route) => (
                    <Link to={route.path} className={styles.navItem}>
                        {route.label}
                    </Link>
                    
                ))} */}
                <Link to={'/'} className={styles.navItem}>
                    HOME
                </Link>
                <Link to={'/artists'} className={styles.navItem}>
                    ARTISTS
                </Link>
                <Link to={'/categories'} className={styles.navItem}>
                    CATEGORIES
                </Link>
                <Link to={'/mycomix'} className={styles.navItem}>
                    MYCOMIX
                </Link>
            </ul>
        </div>
    );
}
