import { Link } from 'react-router-dom';
import { iRouterItem } from '../interfaces/iRouterItem';
import styles from './header.module.css';

export function Header({ menuOptions }: { menuOptions: Array<iRouterItem> }) {
    return (
        <div className={styles.header}>
            <p className={styles.comix}>comix</p>
            <form action="">
                <input
                    type="text"
                    placeholder="Search"
                    className={styles.search}
                />
            </form>
            <p className={styles.menu}>menu</p>
            {/* <ul>
                {menuOptions.map((route) => (
                    <Link to={route.path}>{route.label}</Link>
                ))}
            </ul> */}
        </div>
    );
}
