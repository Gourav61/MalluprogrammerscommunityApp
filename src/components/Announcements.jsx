import { useState } from 'react';
import { Box, Typography, Button, Grid, Card, CardContent, CircularProgress } from '@mui/material';
import { Link } from 'react-router-dom';
import { keyframes } from '@mui/system'; // For animation
import Footer from './Footer';

// Define a hover animation for cards
const hoverAnimation = keyframes`
  0% {
    transform: translateY(0);
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  }
  100% {
    transform: translateY(-10px);
    box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.2);
  }
`;

const Announcements = () => {
  const [expandedAnnouncementId, setExpandedAnnouncementId] = useState(null);

  // Dummy announcement data
  const announcements = [
    { id: 1, title: 'Upcoming Webinar on React', date: '2024-11-30', description: 'Join us for a live webinar to learn the latest trends in React development!' },
    { id: 2, title: 'Hackathon Registration Open', date: '2024-12-10', description: 'Sign up now for our annual hackathon and showcase your skills! This event is for all skill levels and provides great opportunities for networking and learning!' },
    { id: 3, title: 'New Mentorship Program', date: '2024-12-01', description: 'Apply for our new mentorship program to get guidance from industry professionals. Our mentors have years of experience and will provide valuable insights!' },
  ];

  // Simulate loading state (this would normally be true when fetching data from an API)
  const isLoading = false;

  return (
    <Box sx={{ padding: '3rem 1.5rem', backgroundColor: '#f9f9f9' }}>
      {/* Section Title */}
      <Typography variant="h4" sx={{ fontWeight: 'bold', marginBottom: '2rem', textAlign: 'center', color: '#333' }}>
        Announcements
      </Typography>

      {/* Conditional Rendering for Loading State */}
      {isLoading ? (
        <CircularProgress sx={{ display: 'block', margin: '0 auto' }} />
      ) : announcements.length === 0 ? (
        <Typography variant="body1" sx={{ textAlign: 'center', color: '#777' }}>
          No announcements at the moment.
        </Typography>
      ) : (
        <Grid container spacing={4} justifyContent="center">
          {announcements.map((announcement) => (
            <Grid item xs={12} sm={6} md={4} key={announcement.id}>
              <Card
                sx={{
                  height: '100%', // Ensures the card fills the available space
                  display: 'flex',
                  flexDirection: 'column', // Makes the card content stack vertically
                  transition: 'all 0.3s ease-in-out',
                  '&:hover': {
                    animation: `${hoverAnimation} 0.3s forwards`,
                    cursor: 'pointer',
                  },
                  boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
                  borderRadius: '8px',
                  overflow: 'hidden',
                  backgroundColor: '#fff',
                }}
              >
                <CardContent sx={{ flexGrow: 1, padding: '2rem' }}>
                  <Typography variant="h5" sx={{ fontWeight: 'bold', marginBottom: '1rem', color: '#333' }}>
                    {announcement.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#888', marginBottom: '1rem' }}>
                    {announcement.date}
                  </Typography>
                  <Typography variant="body1" sx={{ color: '#555', marginBottom: '1.5rem' }}>
                    {/* Show short description or full description based on the state */}
                    {expandedAnnouncementId === announcement.id
                      ? announcement.description
                      : announcement.description.slice(0, 100)} 
                  </Typography>

                  {/* Button for short announcements */}
                  {announcement.description.length <= 100 ? (
                    <Button
                      variant="contained"
                      component={Link}
                      to={`/announcements/${announcement.id}`}
                      sx={{
                        backgroundColor: '#646cff',
                        color: 'white',
                        '&:hover': {
                          backgroundColor: '#5050f0',
                        },
                        width: '100%',
                        borderRadius: '4px',
                        padding: '0.5rem',
                        fontWeight: 'bold',
                      }}
                    >
                      Read More
                    </Button>
                  ) : (
                    // Button for long announcements that toggle content within the card
                    <Button
                      variant="contained"
                      onClick={() => setExpandedAnnouncementId(expandedAnnouncementId === announcement.id ? null : announcement.id)}
                      sx={{
                        backgroundColor: '#646cff',
                        color: 'white',
                        '&:hover': {
                          backgroundColor: '#5050f0',
                        },
                        width: '100%',
                        borderRadius: '4px',
                        padding: '0.5rem',
                        fontWeight: 'bold',
                      }}
                    >
                      {expandedAnnouncementId === announcement.id ? 'Show Less' : 'Read More'}
                    </Button>
                  )}
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}

      {/* Add space between the content and footer */}
      <Box sx={{ marginBottom: '3rem' }} />

      {/* Footer with same width as the NavBar */}
      <Footer sx={{ width: '100%' }} />
    </Box>
  );
};

export default Announcements;
