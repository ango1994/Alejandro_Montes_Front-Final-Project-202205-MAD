import { SyntheticEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loadUserAction } from '../reducers/users/users.action.creators';
import { UserHttpStore } from '../services/user.http.store';
import styles from './login.module.css';

export function Login() {
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({
        token: '',
        user: { id: '', name: '', email: '', password: '', comics: [] },
    });
    let navigate = useNavigate();

    const handleSubmit = async (event: SyntheticEvent) => {
        event.preventDefault();
        const response = await new UserHttpStore().loginUser(formData.user);
        console.log(response);

        if (response.token) {
            dispatch(loadUserAction(response));
            localStorage.setItem('user', JSON.stringify(response));
            navigate('/mycomix');
        }
    };

    function handleChange(ev: SyntheticEvent) {
        const element = ev.target as HTMLFormElement;
        setFormData({
            token: '',
            user: { ...formData.user, [element.name]: element.value },
        });
    }
    return (
        <div>
            <form onSubmit={handleSubmit} className={styles.form}>
                <input
                    className={styles.input}
                    type="text"
                    name="name"
                    required
                    value={formData.user.name}
                    onChange={handleChange}
                    placeholder="Username"
                />
                <input
                    className={styles.input}
                    type="text"
                    name="password"
                    required
                    value={formData.user.password}
                    onChange={handleChange}
                    placeholder="Password"
                />
                <button type="submit" className={styles.sendButton}>
                    Send
                </button>
            </form>
        </div>
    );
}

export default Login;
