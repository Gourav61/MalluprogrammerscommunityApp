import { Box, Typography, Button, Grid, Link } from '@mui/material';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from './Footer';

const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
  };

  return (
    <Box sx={{ textAlign: 'center', width: '100%', padding: 0, margin: 0, maxWidth: '100vw', overflowX: 'hidden' }}>
      
      {/* Hero Section with Carousel */}
      <Box sx={{ position: 'relative', width: '100%', overflow: 'hidden', margin: 0 }}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            zIndex: 10,
            color: 'white',
            textAlign: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            padding: '20px',
            borderRadius: '8px',
          }}
        >
          <Typography variant="h4" sx={{ fontWeight: 'bold' }} gutterBottom>
            Welcome to Mallu Programmers
          </Typography>
          <Typography variant="body1">
            A platform for Learning, Collaboration, and Networking.
          </Typography>
          <Button
            variant="contained"
            sx={{ backgroundColor: '#646cff', color: 'white', padding: '0.8rem 2rem', marginTop: '1.5rem' }}
            component="a"
            href="https://www.facebook.com/share/g/EyqRyaWWfU8AaPWf/" // Facebook group link
            target="_blank"
          >
            Join Us Now
          </Button>
        </Box>

        {/* Carousel Slider */}
        <Slider {...settings}>
          <div>
            <img src="/assets/mp4.jpg" alt="Image 1" style={{ width: '100%', height: '600px', objectFit: 'cover' }} />
          </div>
          <div>
            <img src="/assets/mp3.jpg" alt="Image 2" style={{ width: '100%', height: '600px', objectFit: 'cover' }} />
          </div>
          <div>
            <img src="/assets/mp2.jpg" alt="Image 3" style={{ width: '100%', height: '600px', objectFit: 'cover' }} />
          </div>
          <div>
            <img src="/assets/mp1.jpg" alt="Image 4" style={{ width: '100%', height: '600px', objectFit: 'cover' }} />
          </div>
        </Slider>
      </Box>

      {/* What We Do, Our Aim, How Mallu Programmers Was Formed Section */}
      <Box sx={{ padding: '3rem 2rem', backgroundColor: '#f9f9f9' }}>
        <Grid container spacing={4}>
          {/* What We Do */}
          <Grid item xs={12} md={4}>
            <Box
              sx={{
                backgroundColor: '#ffffff',
                padding: '2rem',
                borderRadius: '8px',
                boxShadow: '0px 4px 12px rgba(0,0,0,0.1)',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <Typography variant="h5" sx={{ fontWeight: 'bold', marginBottom: '1rem' }}>
                What We Do
              </Typography>
              <Typography variant="body1" sx={{ marginBottom: '1.5rem', color: '#555' }}>
                At Mallu Programmers, we are not just about coding—it’s about creating an ecosystem where learning and innovation come alive. Whether you are a beginner or an experienced developer, you will find the support, tools, and resources you need to thrive.
              </Typography>
              <Typography variant="body1" sx={{ marginBottom: '1.5rem', color: '#555' }}>
                Collaborate, learn, and grow together with like-minded individuals through collaborative projects, workshops, and mentorship programs that are designed to push the boundaries of what is possible.
              </Typography>
            </Box>
          </Grid>

          {/* Our Aim */}
          <Grid item xs={12} md={4}>
            <Box
              sx={{
                backgroundColor: '#ffffff',
                padding: '2rem',
                borderRadius: '8px',
                boxShadow: '0px 4px 12px rgba(0,0,0,0.1)',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <Typography variant="h5" sx={{ fontWeight: 'bold', marginBottom: '1rem' }}>
                Our Aim
              </Typography>
              <Typography variant="body1" sx={{ marginBottom: '1.5rem', color: '#555' }}>
                Our aim is to create a dynamic, collaborative space where tech enthusiasts from all over the world can come together. Whether you are just starting your coding journey or you are a seasoned pro, Mallu Programmers is here to fuel your passion for technology.
              </Typography>
              <Typography variant="body1" sx={{ marginBottom: '1.5rem', color: '#555' }}>
                We focus on empowering our members with the knowledge, tools, and networks needed to succeed—connecting them with opportunities and mentors to help them take their careers to new heights.
              </Typography>
            </Box>
          </Grid>

          {/* How Mallu Programmers Was Formed */}
          <Grid item xs={12} md={4}>
            <Box
              sx={{
                backgroundColor: '#ffffff',
                padding: '2rem',
                borderRadius: '8px',
                boxShadow: '0px 4px 12px rgba(0,0,0,0.1)',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <Typography variant="h5" sx={{ fontWeight: 'bold', marginBottom: '1rem' }}>
                How Mallu Programmers Was Formed
              </Typography>
              <Typography variant="body1" sx={{ marginBottom: '1.5rem', color: '#555' }}>
                Mallu Programmers began as a small, humble initiative to bring together tech enthusiasts from Kerala. With a shared love for coding, the founders sought to build a supportive space where learning could thrive. From its humble beginnings as a tight-knit group, it has blossomed into a global tech community, bringing together developers, designers, and innovators from every corner of the world.
              </Typography>
              <Typography variant="body1" sx={{ marginBottom: '1.5rem', color: '#555' }}>
                What started as passion and late-night coding sessions has now evolved into a powerhouse of collaboration and innovation. The community is a growing network of like-minded individuals, and their journey is far from over.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>

      {/* Join Us Section */}
      <Box sx={{ backgroundColor: '#646cff', color: 'white', padding: '3rem 2rem', marginTop: '2rem' }}>
        <Typography variant="h4" sx={{ fontWeight: 'bold', marginBottom: '1.5rem' }}>
          Ready to Join the Community?
        </Typography>
        <Typography variant="body1" sx={{ marginBottom: '1.5rem' }}>
          Become a part of a growing network of passionate individuals who are shaping the future of tech. At Mallu Programmers, learning, sharing, and growing together is our mantra. Let us collaborate, innovate, and make an impact in the tech world!
        </Typography>
        <Button
          variant="contained"
          sx={{ backgroundColor: '#535bf2', color: 'white', padding: '0.8rem 2rem' }}
          component="a"
          href="https://www.facebook.com/share/g/EyqRyaWWfU8AaPWf/" // Facebook group link
          target="_blank"
        >
          Join Mallu Programmers Now
        </Button>
      </Box>

      {/* Footer Section */}
      <Footer /> {/* Use Footer component here */}
    </Box>
  );
};

export default Home;
