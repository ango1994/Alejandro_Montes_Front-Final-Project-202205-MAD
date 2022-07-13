import styles from './header.module.css';

export function Header() {
    return (
        <div className={styles.header}>
            <p className={styles.comix}>comix</p>

            <p className={styles.menu}>menu</p>
        </div>
    );
}
