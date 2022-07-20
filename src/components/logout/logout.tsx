import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { deleteUserAction } from '../../reducers/users/users.action.creators';

export function Logout({ click }: { click: Function }) {
    const dispatch = useDispatch();
    let navigate = useNavigate();

    function handleClick() {
        dispatch(deleteUserAction());
        localStorage.clear();
        navigate('./home');
        click();
    }
    return <button onClick={handleClick}>Logout</button>;
}
