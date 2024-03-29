import React, { useState } from 'react';
import { Button, TextField } from '@mui/material';
import { useDispatch } from 'react-redux';
import { setUser } from '../store/actions/userActions';
import { login } from '../services/authService';
import { useRouter } from 'next/router';

const LoginPage: React.FC = () => {
    const dispatch = useDispatch();
    const router = useRouter();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const userData = await login(username, password);
            dispatch(setUser(userData));
            router.push('/profile');
        } catch (error: any) {
            console.error(error.message);
        }
    };

    return (
        <div>
            <h1>Login</h1>
            <p>Please enter your information</p>
            <form onSubmit={handleSubmit}>
                <TextField
                    label="Username"
                    variant="outlined"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <TextField
                    type="password"
                    label="Password"
                    variant="outlined"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <Button type="submit" variant="contained" color="primary">
                    Login
                </Button>
            </form>
        </div>
    );
};

export default LoginPage;
