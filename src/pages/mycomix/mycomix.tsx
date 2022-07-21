import { useSelector } from 'react-redux';
import { PicComic } from '../../components/pic.comic/pic.comic';
import { iStore } from '../../store/store';
import styles from './mycomix.module.css';

export function MyComix() {
    const comics = useSelector((store: iStore) => store.user.user.comics);
    return (
        <div>
            <div className={styles.header}></div>
            <div className={styles.container}>
                <h1 className={styles.title}>mycomix</h1>
            </div>

            <ul className={styles.list}>
                {comics
                    ? comics.map((comic) => (
                          <li key={comic._id} className={styles.comic}>
                              <PicComic
                                  comic={comic}
                                  key={comic._id}
                              ></PicComic>
                              <p className={styles.name}>{comic.name}</p>
                          </li>
                      ))
                    : 'No comics found'}
            </ul>
        </div>
    );
}

export default MyComix;
