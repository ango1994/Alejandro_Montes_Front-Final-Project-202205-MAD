import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { iRouterItem } from '../../interfaces/iRouterItem';
import { iStore } from '../../store/store';
import { DeleteAccount } from '../delete.account/delete.account';
import styles from './footer.module.css';

export function Footer({ menuOptions }: { menuOptions: Array<iRouterItem> }) {
    const user = useSelector((store: iStore) => store.user);
    return (
        <div className={styles.footer}>
            <div className={styles.top}>
                <p className={styles.caption}>
                    The right place to manage your comics
                </p>
                <ul className={styles.navigation}>
                    <Link to={'/home'} className={styles.navItem}>
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
            <div className={styles.line}></div>
            <div className={styles.bottom}>
                <p className={styles.copy}>&copy; Alejandro Montes Domínguez</p>
                <p className={styles.msg}>
                    “The one place Gods inarguably exist is in our minds where
                    they are real beyond refute, in all their grandeur and
                    monstrosity.”
                </p>
                {user.token && <DeleteAccount></DeleteAccount>}
            </div>
        </div>
    );
}
