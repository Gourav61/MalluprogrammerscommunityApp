import { Box, Typography } from '@mui/material';

const AdminHome = () => {
  return (
    <Box
      sx={{
        padding: '1rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
      }}
    >
      <Typography variant="h4" gutterBottom>
        Welcome to the Admin Dashboard
      </Typography>
      <Typography variant="body1">
        Use the navigation menu to manage users and events.
      </Typography>
    </Box>
  );
};

export default AdminHome;
