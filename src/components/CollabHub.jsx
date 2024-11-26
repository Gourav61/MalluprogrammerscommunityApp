import { Box, Typography, Button, Grid, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation

const CollabHub = () => {
  const navigate = useNavigate(); // Initialize navigation hook

  return (
    <Box sx={{ padding: '2rem', backgroundColor: '#f4f4f4' }}>
      {/* Welcome Section */}
      <Box sx={{ textAlign: 'center', marginBottom: '2rem' }}>
        <Typography variant="h3" sx={{ fontWeight: 'bold' }}>
          Welcome to CollabHub
        </Typography>
        <Typography variant="subtitle1" sx={{ marginTop: '1rem' }}>
          Empowering Connections and Opportunities
        </Typography>
        <Button variant="contained" color="primary" sx={{ marginTop: '1.5rem' }}>
          Get Started
        </Button>
      </Box>

      {/* Quick Actions */}
      <Grid container spacing={4} justifyContent="center" sx={{ marginBottom: '2rem' }}>
        <Grid item xs={12} sm={6}>
          <Paper sx={{ padding: '1.5rem', textAlign: 'center' }}>
            <Typography variant="h5" sx={{ fontWeight: 'bold', marginBottom: '1rem' }}>
              I’m Looking for Work
            </Typography>
            <Button
              variant="outlined"
              color="secondary"
              onClick={() => navigate('/jobseeker')} // Navigate to JobSeekerForm
            >
              Showcase Skills
            </Button>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper sx={{ padding: '1.5rem', textAlign: 'center' }}>
            <Typography variant="h5" sx={{ fontWeight: 'bold', marginBottom: '1rem' }}>
              I’m Hiring or Collaborating
            </Typography>
            <Button
              variant="outlined"
              color="secondary"
              onClick={() => navigate('/employer')} // Navigate to EmployerForm
            >
              Post Opportunity
            </Button>
          </Paper>
        </Grid>
      </Grid>

      {/* Highlights */}
      <Box>
        <Typography variant="h4" sx={{ marginBottom: '1rem' }}>
          Featured Opportunities
        </Typography>
        {/* Example list of featured items */}
        <Paper sx={{ padding: '1rem', marginBottom: '1rem' }}>
          <Typography variant="h6">Open Collaboration: Frontend Developer for Startup</Typography>
          <Typography variant="body2">Skills Needed: React, JavaScript, Design</Typography>
        </Paper>
        <Paper sx={{ padding: '1rem', marginBottom: '1rem' }}>
          <Typography variant="h6">Hiring: Backend Engineer for Freelance Project</Typography>
          <Typography variant="body2">Skills Needed: Node.js, APIs, Databases</Typography>
        </Paper>
      </Box>
    </Box>
  );
};

export default CollabHub;
