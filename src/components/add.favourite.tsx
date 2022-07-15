import { useDispatch, useSelector } from 'react-redux';
import { iComic } from '../interfaces/iComics';
import { updateUserAction } from '../reducers/users/users.action.creators';
import { UserHttpStore } from '../services/user.http.store';
import { iStore } from '../store/store';

export function AddFavourite({ comic }: { comic: iComic }) {
    const dispatch = useDispatch();
    const user = useSelector((store: iStore) => store.user);
    console.log(user.user._id);
    console.log(comic._id);

    const handleClick = async () => {
        console.log(user.user._id);
        console.log(comic._id);
        const response = await new UserHttpStore().updateUser(
            user.user._id as string,
            comic._id as string
        );
        dispatch(updateUserAction(response));
        localStorage.setItem(
            'user',
            JSON.stringify({ token: user.token, user: response })
        );
    };
    return <button onClick={handleClick}>Add Favourite</button>;
}
