import { Link } from 'react-router-dom';
import styles from './category.module.css';

interface props {
    name: string;
    img: string;
}

export function Category(props: props) {
    return (
        <div className={styles.container}>
            <Link to={props.name} className={styles.link}>
                <img
                    className={styles.image}
                    src={props.img}
                    alt={props.name}
                />
                <h2 className={styles.name}>{props.name}</h2>
                <div className={styles.line}></div>
            </Link>
        </div>
    );
}

export default Category;
