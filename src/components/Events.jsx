import { Box, Typography, Button, Grid, Card, CardContent, CardMedia, Chip } from '@mui/material';
import { keyframes } from '@mui/system';
import { Link } from 'react-router-dom';
import Footer from './Footer';

// Hover animation for cards
const hoverAnimation = keyframes`
  0% {
    transform: scale(1);
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  }
  100% {
    transform: scale(1.05);
    box-shadow: 0px 15px 20px rgba(0, 0, 0, 0.3);
  }
`;

// Button hover animation
const buttonHoverAnimation = keyframes`
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(1.05);
  }
`;

const Events = () => {
  // Dummy event data with images
  const events = [
    {
      id: 1,
      title: 'React Meetup 2024',
      date: '2024-12-15',
      location: 'Online',
      description: 'Join us for an engaging session on advanced React concepts and real-world case studies.',
      image: 'https://via.placeholder.com/400x200', // Replace with actual image URLs
    },
    {
      id: 2,
      title: 'Hackathon 2024',
      date: '2025-01-10',
      location: 'Kochi, Kerala',
      description: 'A 24-hour hackathon with exciting prizes and networking opportunities.',
      image: 'https://via.placeholder.com/400x200',
    },
    {
      id: 3,
      title: 'Open Source Bootcamp',
      date: '2025-01-20',
      location: 'Online',
      description: 'Learn how to contribute to open-source projects and grow your career.',
      image: 'https://via.placeholder.com/400x200',
    },
  ];

  return (
    <Box
      sx={{
        padding: '3rem 1.5rem',
        background: 'linear-gradient(135deg, #f5f7fa, #c3cfe2)',
        minHeight: '100vh',
      }}
    >
      {/* Section Title */}
      <Typography
        variant="h4"
        sx={{
          fontWeight: 'bold',
          marginBottom: '2rem',
          textAlign: 'center',
          color: '#333',
        }}
      >
        Events
      </Typography>

      {/* Event Cards */}
      <Grid container spacing={4} justifyContent="center">
        {events.map((event) => (
          <Grid item xs={12} sm={6} md={4} key={event.id}>
            <Card
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                position: 'relative',
                transition: 'all 0.3s ease-in-out',
                '&:hover': {
                  animation: `${hoverAnimation} 0.3s forwards`,
                  cursor: 'pointer',
                },
                boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
                borderRadius: '12px',
                overflow: 'hidden',
              }}
            >
              {/* Event Image */}
              <CardMedia
                component="img"
                height="200"
                image={event.image}
                alt={event.title}
              />

              {/* Floating Date */}
              <Chip
                label={event.date}
                sx={{
                  position: 'absolute',
                  top: '15px',
                  left: '15px',
                  backgroundColor: '#646cff',
                  color: 'white',
                  fontWeight: 'bold',
                  fontSize: '0.85rem',
                }}
              />

              <CardContent sx={{ flexGrow: 1, padding: '2rem' }}>
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 'bold',
                    marginBottom: '1rem',
                    color: '#333',
                  }}
                >
                  {event.title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: '#888',
                    marginBottom: '1rem',
                  }}
                >
                  Location: {event.location}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: '#555',
                    marginBottom: '1.5rem',
                  }}
                >
                  {event.description}
                </Typography>
                <Button
                  variant="contained"
                  component={Link}
                  to={`/event/register/${event.id}`}
                  sx={{
                    backgroundColor: '#646cff',
                    color: 'white',
                    '&:hover': {
                      backgroundColor: '#5050f0',
                      animation: `${buttonHoverAnimation} 0.2s forwards`,
                    },
                    width: '100%',
                    borderRadius: '4px',
                    padding: '0.5rem',
                    fontWeight: 'bold',
                  }}
                >
                  Register
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Add space between content and footer */}
      <Box sx={{ marginBottom: '3rem' }} />

      {/* Footer */}
      <Footer />
    </Box>
  );
};

export default Events;
