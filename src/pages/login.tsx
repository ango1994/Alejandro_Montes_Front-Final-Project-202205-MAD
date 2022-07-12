import { SyntheticEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserHttpStore } from '../services/user.http.store';

export function Login() {
    const [formData, setFormData] = useState({
        id: '',
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
            navigate('/register');
        }
    };

    function handleChange(ev: SyntheticEvent) {
        const element = ev.target as HTMLFormElement;
        setFormData({ ...formData, [element.name]: element.value });
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Username"
                />
                <input
                    type="text"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Password"
                />
                <input
                    type="text"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                />
                <button type="submit"></button>
            </form>
        </div>
    );
}

export default Login;
