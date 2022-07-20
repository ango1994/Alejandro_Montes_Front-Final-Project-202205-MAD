import { SyntheticEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateComicsAction } from '../../reducers/comics/comics.action.creators';
import { ComicHttpStore } from '../../services/comic.http.store';
import { iStore } from '../../store/store';
import styles from './score.module.css';

export function Score() {
    const displayComic = useSelector((store: iStore) => store.comicDisplay);
    const user = useSelector((store: iStore) => store.user);
    const dispatch = useDispatch();

    const alreadyVoted = displayComic.score.find(
        (item) => item.user === user.user._id
    );

    async function handleChange(ev: SyntheticEvent) {
        const element = ev.target as HTMLFormElement;
        await new ComicHttpStore()
            .scoreComic(displayComic._id, element.value)
            .then((resp) => {
                dispatch(updateComicsAction(resp));
            });
    }
    return (
        <div>
            <select
                className={styles.select}
                name="score"
                id=""
                defaultValue={alreadyVoted ? alreadyVoted.scored : -1}
                onChange={handleChange}
            >
                <option value="-1">No leído</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
            </select>
        </div>
    );
}
