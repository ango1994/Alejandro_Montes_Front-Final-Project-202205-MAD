import { useSelector } from 'react-redux';
import { PicComic } from '../../components/pic.comic/pic.comic';
import { iStore } from '../../store/store';
import styles from './mycomix.module.css';

export function MyComix() {
    const comics = useSelector((store: iStore) => store.user.user.comics);
    return (
        <div>
            <h1>mycomix</h1>
            {comics
                ? comics.map((comic) => (
                      <>
                          <PicComic comic={comic} key={comic._id}></PicComic>
                          <p className={styles.name}>{comic.name}</p>
                      </>
                  ))
                : 'No comics found'}
        </div>
    );
}

export default MyComix;
