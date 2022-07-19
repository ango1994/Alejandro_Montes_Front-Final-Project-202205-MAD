import { useDispatch, useSelector } from 'react-redux';
import { iComic } from '../../interfaces/iComics';
import { updateUserAction } from '../../reducers/users/users.action.creators';
import { UserHttpStore } from '../../services/user.http.store';
import { iStore } from '../../store/store';

export function AddFavourite({ comic }: { comic: iComic }) {
    const dispatch = useDispatch();
    const user = useSelector((store: iStore) => store.user);

    const handleClick = async () => {
        const response = await new UserHttpStore().addFavouriteComicToUser(
            user.user._id,
            comic._id
        );
        dispatch(updateUserAction({ token: user.token, user: response }));
        localStorage.setItem(
            'user',
            JSON.stringify({ token: user.token, user: response })
        );
    };
    return <button onClick={handleClick}>Add Favourite</button>;
}
