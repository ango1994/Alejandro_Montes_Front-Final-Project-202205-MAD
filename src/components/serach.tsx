import { SyntheticEvent, useEffect, useState } from 'react';
import { iComic } from '../interfaces/iComics';
import { ComicHttpStore } from '../services/comic.http.store';

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
                    type="text"
                    name="search"
                    id=""
                    value={searchData}
                    onChange={handleChange}
                />
                <button type="submit">Search</button>
            </form>
            {response ? response.map((comic) => <p>{comic.name}</p>) : ''}
        </>
    );
}
