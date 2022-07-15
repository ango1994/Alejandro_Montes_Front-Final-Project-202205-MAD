import { SyntheticEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { UserHttpStore } from '../services/user.http.store';
import styles from './register.module.css';

export function Register() {
    const [formData, setFormData] = useState({
        _id: '',
        name: '',
        email: '',
        password: '',
        comics: [],
    });
    let navigate = useNavigate();
    const handleSubmit = async (event: SyntheticEvent) => {
        event.preventDefault();
        const response = await new UserHttpStore().registerUser(formData);
        console.log(response);

        if (response.name) {
            navigate('/login');
        } else {
            Swal.fire({
                title: 'Invalid user o email',
                confirmButtonText: 'Ok',
            });
        }
    };

    function handleChange(ev: SyntheticEvent) {
        const element = ev.target as HTMLFormElement;
        setFormData({ ...formData, [element.name]: element.value });
    }
    return (
        <div>
            <form
                onSubmit={handleSubmit}
                className={styles.form}
                autoComplete="off"
            >
                <input
                    className={styles.input}
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Username"
                    required
                />
                <input
                    className={styles.input}
                    type="text"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Password"
                    required
                />
                <input
                    className={styles.input}
                    type="text"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    required
                />
                <button type="submit" className={styles.sendButton}>
                    Send
                </button>
            </form>
        </div>
    );
}

export default Register;
