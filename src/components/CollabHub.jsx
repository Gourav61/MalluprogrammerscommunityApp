import { Box, Typography, Button, Grid, Paper, CircularProgress } from '@mui/material';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import WorkIcon from '@mui/icons-material/Work';
import BusinessIcon from '@mui/icons-material/Business';
import { useState } from 'react';
import { useEffect } from 'react';

const CollabHub = () => {
  const navigate = useNavigate(); // Initialize navigation hook

  // Static data for featured opportunities
  const opportunities = [
    {
      id: 1,
      title: 'Open Collaboration: Frontend Developer for Startup',
      skills: ['React', 'JavaScript', 'Design']
    },
    {
      id: 2,
      title: 'Hiring: Backend Engineer for Freelance Project',
      skills: ['Node.js', 'APIs', 'Databases']
    }
  ];

  // Loading state
  const [loading, setLoading] = useState(false);

  // Simulate fetching data with delay (You can remove this part once you integrate API)
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false); // Simulate data fetched
    }, 1500);
  }, []);

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
        <Grid item xs={12} sm={6} md={4}>
          <Paper sx={{ padding: '1.5rem', textAlign: 'center', borderRadius: '8px' }}>
            <Typography variant="h5" sx={{ fontWeight: 'bold', marginBottom: '1rem' }}>
              I’m Looking for Work
            </Typography>
            <Button
              variant="outlined"
              color="secondary"
              startIcon={<WorkIcon />}
              onClick={() => navigate('/jobseeker')}
            >
              Showcase Skills
            </Button>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Paper sx={{ padding: '1.5rem', textAlign: 'center', borderRadius: '8px' }}>
            <Typography variant="h5" sx={{ fontWeight: 'bold', marginBottom: '1rem' }}>
              I’m Hiring or Collaborating
            </Typography>
            <Button
              variant="outlined"
              color="secondary"
              startIcon={<BusinessIcon />}
              onClick={() => navigate('/employer')}
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

        {/* Loading Indicator */}
        {loading ? (
          <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '2rem' }}>
            <CircularProgress />
          </Box>
        ) : (
          // Render the opportunities
          opportunities.map((opportunity) => (
            <Paper
              key={opportunity.id}
              sx={{
                padding: '1rem',
                marginBottom: '1rem',
                cursor: 'pointer',
                borderRadius: '8px',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                '&:hover': {
                  backgroundColor: '#e0e0e0',
                  transform: 'scale(1.05)',
                  boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
                }
              }}
              onClick={() => navigate(`/opportunity/${opportunity.id}`)}
            >
              <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                {opportunity.title}
              </Typography>
              <Typography variant="body2" sx={{ color: '#777' }}>
                Skills Needed: {opportunity.skills.join(', ')}
              </Typography>
            </Paper>
          ))
        )}
      </Box>

      {/* Success Stories Section */}
      <Box sx={{ marginTop: '3rem', textAlign: 'center' }}>
        <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
          Success Stories
        </Typography>
        <Typography variant="body2" sx={{ marginTop: '1rem' }}>
        &quot;Thanks to CollabHub, I found a perfect collaborator for my startup&quot;
        </Typography>
        <Typography variant="body2" sx={{ marginTop: '0.5rem' }}>
          - Jane Doe, Frontend Developer
        </Typography>
        <Typography variant="body2" sx={{ marginTop: '1.5rem' }}>
        &quot;I hired a talented developer for my project through CollabHub!&quot;
        </Typography>
        <Typography variant="body2" sx={{ marginTop: '0.5rem' }}>
          - John Smith, CTO, Startup Co.
        </Typography>
      </Box>
    </Box>
  );
};

export default CollabHub;
