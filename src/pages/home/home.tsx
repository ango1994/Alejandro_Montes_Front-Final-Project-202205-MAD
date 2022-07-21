import styles from './home.module.css';

export function Home() {
    return (
        <div>
            <div className={styles.header}></div>
            <div className={styles.container}>
                <h2 className={styles.text}>
                    The right <span className={styles.bold}>place</span> to
                    manage your <span className={styles.bold}>comics</span>
                </h2>
            </div>
        </div>
    );
}

export default Home;
