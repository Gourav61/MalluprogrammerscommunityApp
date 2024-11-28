import { Box, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const RegistrationSuccess = () => {
  return (
    <Box sx={{ padding: '2rem', textAlign: 'center' }}>
      <Typography variant="h4" sx={{ fontWeight: 'bold', marginBottom: '1rem' }}>
        Registration Successful!
      </Typography>
      <Typography variant="body1" sx={{ marginBottom: '2rem' }}>
        Thank you for registering for the event! We look forward to seeing you there.
      </Typography>
      <Button variant="contained" component={Link} to="/events" sx={{ backgroundColor: '#646cff', fontWeight: 'bold' }}>
        Go Back to Events
      </Button>
    </Box>
  );
};

export default RegistrationSuccess;
