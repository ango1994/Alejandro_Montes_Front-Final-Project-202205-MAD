import styles from './categories.module.css';
import Category from './category';

export function Categories() {
    return (
        <div>
            <div className={styles.categories}>
                <div className={styles.container}>
                    <h1 className={styles.title}>categories</h1>
                    <h1 className={styles.title}>categories</h1>
                    <h1 className={styles.title}>categories</h1>
                </div>
            </div>
            <div>
                <div className={styles.right}>
                    <Category
                        name="european"
                        img="https://firebasestorage.googleapis.com/v0/b/comix-46ded.appspot.com/o/Portadas%2Feuropeo.png?alt=media&token=b4eba0e8-8df7-4ac0-b07d-72b59b18e06f"
                    ></Category>
                </div>
                <div>
                    <Category
                        name="american"
                        img="https://firebasestorage.googleapis.com/v0/b/comix-46ded.appspot.com/o/Portadas%2Famericano.png?alt=media&token=42cb296f-863b-4856-bd49-9390de53866b"
                    ></Category>
                </div>

                <div className={styles.right}>
                    <Category
                        name="manga"
                        img="https://firebasestorage.googleapis.com/v0/b/comix-46ded.appspot.com/o/Portadas%2Fmanga.png?alt=media&token=46cd438c-e57b-457b-88ce-24110e310a90"
                    ></Category>
                </div>

                {/* <div>
                    <img
                        src="https://firebasestorage.googleapis.com/v0/b/comix-46ded.appspot.com/o/Portadas%2Feuropeo.png?alt=media&token=b4eba0e8-8df7-4ac0-b07d-72b59b18e06f"
                        alt=""
                    />
                    <h3>EUROPEAN</h3>
                </div>
                <div>
                    <img
                        src="https://firebasestorage.googleapis.com/v0/b/comix-46ded.appspot.com/o/Portadas%2Famericano.png?alt=media&token=42cb296f-863b-4856-bd49-9390de53866b"
                        alt=""
                    />
                    <h3>AMERICAN</h3>
                </div>
                <div>
                    <img
                        src="https://firebasestorage.googleapis.com/v0/b/comix-46ded.appspot.com/o/Portadas%2Fmanga.png?alt=media&token=46cd438c-e57b-457b-88ce-24110e310a90"
                        alt=""
                    />
                    <h3>MANGA</h3>
                </div>

                <img src="" alt="" />
                <img src="" alt="" /> */}
            </div>
        </div>
    );
}

export default Categories;
