// components/LogoutButton.tsx
import React from 'react';
import { Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { setUser } from '../store/actions/userActions';
import { useRouter } from 'next/router';

const LogoutButton: React.FC = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const handleLogout = () => {
    // Clear user state in Redux store
    dispatch(setUser(null));

    // Redirect to the login page
    router.push('/login');
  };

  return (
    <Button variant="contained" color="primary" onClick={handleLogout}>
      Logout
    </Button>
  );
};

export default LogoutButton;
