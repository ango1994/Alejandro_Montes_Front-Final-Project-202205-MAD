import { SyntheticEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { deleteUserAction } from '../../reducers/users/users.action.creators';
import { UserHttpStore } from '../../services/user.http.store';
import { iStore } from '../../store/store';

export function DeleteAccount() {
    const dispatch = useDispatch();
    const user = useSelector((store: iStore) => store.user);
    let navigate = useNavigate();

    function handleClick(ev: SyntheticEvent) {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!',
        }).then(async (result) => {
            if (result.isConfirmed) {
                await new UserHttpStore().deleteUser(user.user._id);
                dispatch(deleteUserAction());
                localStorage.clear();
                navigate('./home');
            }
        });
    }

    return <button onClick={handleClick}>Delete Account</button>;
}
