import React, { useState } from 'react';
import { Button, TextField, Typography, Container, Paper } from '@mui/material';
import { useDispatch } from 'react-redux';
import { setUser } from '../store/actions/userActions';
import { login } from '../services/authService';
import { useRouter } from 'next/router';

const LoginPage: React.FC = () => {
    const dispatch = useDispatch();
    const router = useRouter();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState<string>('');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const userData = await login(username, password);
            dispatch(setUser(userData));
            router.push('/profile');
        } catch (error: any) {
            setError('Invalid username or password');
            console.error(error.message);
        }
    };

    return (
        <Container component="main" maxWidth="xs">
            <Paper elevation={3} sx={{ padding: '20px', marginTop: '50px' }}>
                <Typography variant="h5" component="h1" align="center">
                    Login
                </Typography>
                <Typography variant="body1" align="center">
                    Please enter your information
                </Typography>
                <form onSubmit={handleSubmit}>
                    <TextField
                        label="Username"
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <TextField
                        type="password"
                        label="Password"
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        error={!!error}
                        helperText={error}
                    />
                    <Button type="submit" variant="contained" color="primary" fullWidth>
                        Login
                    </Button>
                </form>
            </Paper>
        </Container>
    );
};

export default LoginPage;
