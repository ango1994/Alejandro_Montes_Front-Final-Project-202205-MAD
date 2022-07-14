import { useSelector } from 'react-redux';
import { iStore } from '../store/store';

export function European() {
    const comics = useSelector((store: iStore) => store.comics);
    return (
        <div>
            <h1>American</h1>;
            <ul>
                {comics
                    .filter((comic) => comic.category === 'european')
                    .map((comic) => (
                        <li>
                            <img src={comic.image} alt="" />
                        </li>
                    ))}
            </ul>
        </div>
    );
}

export default European;
