import { useSelector } from 'react-redux';
import { iStore } from '../store/store';

export function CategoryPage() {
    const comics = useSelector((store: iStore) => store.comics);
    return (
        <ul>
            {comics
                .filter((comic) => comic.category === 'american')
                .map((comic) => (
                    <li>
                        <img src={comic.image} alt="" />
                    </li>
                ))}
        </ul>
    );
}

export default CategoryPage;
