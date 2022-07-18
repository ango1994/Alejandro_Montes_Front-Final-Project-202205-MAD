import { SyntheticEvent, useEffect, useState } from 'react';
import { iComic } from '../interfaces/iComics';
import { ComicHttpStore } from '../services/comic.http.store';
import styles from './search.module.css';

export function Search() {
    const [searchData, setSearchData] = useState('');
    const [response, setResponse] = useState([] as Array<iComic>);

    useEffect(() => {
        if (searchData.length >= 3) {
            searchPrint(searchData).then((resp) => setResponse(resp));
        } else {
            setResponse([]);
        }
    }, [searchData]);

    async function searchPrint(search: string) {
        return new ComicHttpStore().getComicByName(search);
    }

    const handleChange = async (ev: SyntheticEvent) => {
        const element = ev.target as HTMLFormElement;
        setSearchData(element.value);
    };

    return (
        <>
            <form>
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
            {response ? response.map((comic) => <p>{comic.name}</p>) : ''}
        </>
    );
}
