import { SyntheticEvent, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { iComic } from '../../interfaces/iComics';
import {
    loadComicDisplayAction,
    unloadComicDisplayAction,
} from '../../reducers/comic.display/comic.display.action.creators';
import { ComicHttpStore } from '../../services/comic.http.store';
import { iStore } from '../../store/store';

import styles from './score.module.css';

export function Score({ comic }: { comic: iComic }) {
    const [state, setState] = useState(-1);
    const dispatcher = useDispatch();
    const user = useSelector((store: iStore) => store.user);

    useEffect(() => {
        dispatcher(unloadComicDisplayAction(comic));
        dispatcher(loadComicDisplayAction(comic));
    }, [comic, dispatcher]);

    const comicInStore = useSelector((store: iStore) => store.comicDisplay);

    useEffect(() => {
        function findAlreadyVoted() {
            return comicInStore.score.find(
                (item) => item.user === user.user._id
            );
        }
        if (comicInStore) {
            const display = findAlreadyVoted();
            display?.scored ? setState(display?.scored) : setState(-1);
            console.log({ display });
        }
    }, [comicInStore, comicInStore._id, comicInStore.score, user.user._id]);

    async function handleChange(ev: SyntheticEvent) {
        const element = ev.target as HTMLFormElement;
        await new ComicHttpStore()
            .scoreComic(comicInStore._id, element.value)
            .then((comic) => dispatcher(loadComicDisplayAction(comic)));
    }
    return (
        <div>
            <select
                className={styles.select}
                name="score"
                id=""
                value={state}
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
