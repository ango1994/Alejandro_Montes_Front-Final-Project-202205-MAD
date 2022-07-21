import { useEffect } from 'react';
import styles from './home.module.css';

export function Home() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div>
            <div className={styles.header}></div>
            <div className={styles.container}>
                <h2 className={styles.text}>
                    The right <span className={styles.bold}>place</span> to
                    manage your <span className={styles.bold}>comics</span>
                </h2>
                <div className={styles.carousel}>
                    <img
                        src="https://firebasestorage.googleapis.com/v0/b/comix-46ded.appspot.com/o/Comics%2FAMERICANO%2FMesa%20de%20trabajo%201.webp?alt=media&token=0215c4e7-24d2-41be-bb32-8b1abccbd2d6"
                        alt=""
                        className={styles.car}
                    />
                    <img
                        src="https://firebasestorage.googleapis.com/v0/b/comix-46ded.appspot.com/o/Comics%2FMANGA%2FAKIRA.webp?alt=media&token=cc8e7790-149d-4fa3-be4d-34ab4319a632"
                        alt=""
                        className={styles.car}
                    />
                    <img
                        src="https://firebasestorage.googleapis.com/v0/b/comix-46ded.appspot.com/o/Comics%2FMANGA%2FBerserk2Short.webp?alt=media&token=a7da703c-1db0-4af2-b7ae-c867bec3d44f"
                        alt=""
                        className={styles.car}
                    />
                </div>
            </div>
        </div>
    );
}

export default Home;
