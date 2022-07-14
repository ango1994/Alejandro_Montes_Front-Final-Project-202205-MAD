import styles from './menu.module.css';

export function Menu({ menu }: { menu: Function }) {
    const handleClick = () => {
        menu();
    };
    return (
        <div className={styles.menu}>
            <h1>Menu</h1>
            <button onClick={handleClick}>CLOSE</button>
        </div>
    );
}
