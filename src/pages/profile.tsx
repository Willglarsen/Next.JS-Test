import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import LogoutButton from '@/components/logout';
import { useRouter } from 'next/router';
import { Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';

const ProfilePage: React.FC = () => {
  const user = useSelector((state: RootState) => state.user.user);
  const router = useRouter();

  React.useEffect(() => {
    if (!user) {
      router.push('/login');
    }
  }, [user, router]);


  return (
    <div>
      <h1>Profile</h1>
      {user && (
        <TableContainer component={Paper}>
        <Table aria-label="user profile table">
            <TableHead>
                <TableRow>
                    <TableCell>Attribute</TableCell>
                    <TableCell>Value</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                <TableRow>
                    <TableCell>ID</TableCell>
                    <TableCell>{user.id}</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>First Name</TableCell>
                    <TableCell>{user.firstName}</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Last Name</TableCell>
                    <TableCell>{user.lastName}</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Username</TableCell>
                    <TableCell>{user.username}</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Email</TableCell>
                    <TableCell>{user.email}</TableCell>
                </TableRow>
            </TableBody>
        </Table>
    </TableContainer>
      )}
      <LogoutButton />
    </div>
  );
};

export default ProfilePage;
