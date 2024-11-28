import { useState } from 'react';
import { Box, Typography, Grid, Card, CardContent, Button, IconButton } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack'; // Back Icon
import Footer from './Footer'; // Assuming Footer is already defined
import { keyframes } from '@mui/system';

// Animation for hover effect
const hoverAnimation = keyframes`
  0% { transform: translateY(0); box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1); }
  100% { transform: translateY(-10px); box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.2); }
`;

const ResourceHub = () => {
  // State to track the selected category, initialized to null
  const [selectedCategory, setSelectedCategory] = useState(null);

  // Categories data
  const categories = [
    {
      id: 'webdev',
      title: 'Web Development',
      resources: [
        {
          id: 1,
          title: 'Command Line Basics',
          description: 'Learn basic terminal commands.',
          type: 'youtube',
          link: 'https://www.youtube.com/watch?v=oxuRxtrO2Ag',
        },
        {
          id: 2,
          title: 'Git and GitHub',
          description: 'Version control basics.',
          type: 'doc',
          link: 'https://git-scm.com/doc',
        },
      ],
    },
    {
      id: 'datascience',
      title: 'Data Science',
      resources: [
        {
          id: 1,
          title: 'Python Basics',
          description: 'Learn Python for data analysis.',
          type: 'doc',
          link: 'https://www.learnpython.org/',
        },
      ],
    },
  ];

  return (
    <Box sx={{ backgroundColor: '#f9f9f9', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Box sx={{ padding: '3rem 1.5rem', flexGrow: 1 }}>
        {/* Title */}
        {!selectedCategory && (
          <Typography variant="h4" sx={{ fontWeight: 'bold', marginBottom: '2rem', textAlign: 'center', color: '#333' }}>
            Resource Hub
          </Typography>
        )}

        {/* Back to Categories Button */}
        {selectedCategory && (
          <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '2rem' }}>
            <IconButton
              size="large"
              onClick={() => setSelectedCategory(null)}
              sx={{
                color: '#333',
                marginRight: '0.5rem',
                '&:hover': { color: '#646cff' },
              }}
            >
              <ArrowBackIcon fontSize="large" />
            </IconButton>
            <Typography
              variant="h5"
              sx={{
                fontWeight: 'bold',
                cursor: 'pointer',
                color: '#333',
                '&:hover': { textDecoration: 'underline', color: '#646cff' },
              }}
              onClick={() => setSelectedCategory(null)}
            >
              Back to Categories
            </Typography>
          </Box>
        )}

        {/* Main Category View */}
        {!selectedCategory && (
          <Grid container spacing={4} justifyContent="center">
            {categories.map((category) => (
              <Grid item xs={12} sm={6} md={4} key={category.id}>
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'all 0.3s ease-in-out',
                    '&:hover': { animation: `${hoverAnimation} 0.3s forwards`, cursor: 'pointer' },
                    boxShadow: '0px 6px 12px rgba(0, 0, 0, 0.1)',
                    borderRadius: '10px',
                  }}
                  onClick={() => setSelectedCategory(category)}
                >
                  <CardContent sx={{ padding: '2rem', textAlign: 'center' }}>
                    <Typography variant="h5" sx={{ fontWeight: 'bold', marginBottom: '1rem', color: '#333' }}>
                      {category.title}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        )}

        {/* Subcategory View */}
        {selectedCategory && (
          <Grid container spacing={4}>
            {selectedCategory.resources.map((resource) => (
              <Grid item xs={12} sm={6} md={4} key={resource.id}>
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    boxShadow: '0px 6px 12px rgba(0, 0, 0, 0.1)',
                    borderRadius: '10px',
                  }}
                >
                  <CardContent sx={{ flexGrow: 1, padding: '2rem' }}>
                    <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: '1rem', color: '#333' }}>
                      {resource.title}
                    </Typography>
                    <Typography variant="body1" sx={{ color: '#555', marginBottom: '1.5rem' }}>
                      {resource.description}
                    </Typography>
                    <Button
                      variant="contained"
                      href={resource.link}
                      target="_blank"
                      sx={{
                        backgroundColor: resource.type === 'doc' ? '#646cff' : '#ff4081',
                        color: 'white',
                        '&:hover': { backgroundColor: resource.type === 'doc' ? '#5050f0' : '#e03670' },
                        width: '100%',
                      }}
                    >
                      {resource.type === 'doc' ? 'View Documentation' : 'Watch Video'}
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        )}
      </Box>

      {/* Footer */}
      <Footer />
    </Box>
  );
};

export default ResourceHub;
