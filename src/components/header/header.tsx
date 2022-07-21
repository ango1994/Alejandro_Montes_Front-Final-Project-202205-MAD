import { useCallback, useState } from 'react';
import { iComic } from '../../interfaces/iComics';
import styles from './header.module.css';
import { Menu } from '../menu/menu';
import { SearchResults } from '../search.results/search.results.component';

import { Search } from '../search/search';

export function Header() {
    const [menu, setMenu] = useState(false);
    const toggleMenu = () => {
        setMenu(!menu);
    };
    const [response, setResponse] = useState([] as Array<iComic>);

    const setResponseProps = useCallback((resp: Array<iComic>) => {
        setResponse(resp);
    }, []);

    function handleClick() {
        setResponse([]);
    }

    return (
        <>
            {menu ? <Menu menu={toggleMenu}></Menu> : ''}
            <div className={styles.searchContainer}>
                <div className={styles.searchOnHeader}>
                    <Search setResponse={setResponseProps}></Search>
                    <div onClick={handleClick} id="response">
                        {response && (
                            <SearchResults comics={response}></SearchResults>
                        )}
                    </div>
                </div>
            </div>
            <div className={styles.header}>
                <p className={styles.comix}>comix</p>
                <button onClick={toggleMenu} className={styles.menu}>
                    menu
                </button>
            </div>
        </>
    );
}
