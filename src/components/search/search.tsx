import { SyntheticEvent, useEffect, useMemo, useState } from 'react';

import { ComicHttpStore } from '../../services/comic.http.store';
import styles from './search.module.css';

export function Search({ setResponse }: { setResponse: Function }) {
    const [searchData, setSearchData] = useState('');
    const apiComics = useMemo(() => new ComicHttpStore(), []);

    useEffect(() => {
        if (searchData.length >= 3) {
            apiComics
                .getComicByName(searchData)
                .then((resp) => setResponse(resp));
        } else {
            setResponse([]);
        }
    }, [apiComics, searchData, setResponse]);

    const handleChange = async (ev: SyntheticEvent) => {
        const element = ev.target as HTMLFormElement;
        setSearchData(element.value);
    };

    return (
        <div>
            <form autoComplete="off">
                <input
                    className={styles.input}
                    type="text"
                    name="search"
                    id=""
                    value={searchData}
                    placeholder="Search a comic"
                    onChange={handleChange}
                />
            </form>
        </div>
    );
}
