import  { useState } from 'react';
import { Box, Typography, TextField, Button, MenuItem, Select, FormControl, InputLabel } from '@mui/material';

// Define the JobSeekerForm component
const JobSeekerForm = () => {
  // Form state
  const [name, setName] = useState('');
  const [skills, setSkills] = useState('');
  const [experienceLevel, setExperienceLevel] = useState('');
  const [portfolio, setPortfolio] = useState('');

  // Handle form submission
  const handleSubmit = (e) => { // Ignore TypeScript error by not explicitly typing 'e'
    e.preventDefault();
    // For now, we will just log the data to the console
    const formData = {
      name,
      skills,
      experienceLevel,
      portfolio,
    };
    console.log(formData);
    // Reset the form after submission
    setName('');
    setSkills('');
    setExperienceLevel('');
    setPortfolio('');
  };

  return (
    <Box sx={{ padding: '2rem', backgroundColor: '#f4f4f4', maxWidth: 600, margin: '0 auto' }}>
      <Typography variant="h4" sx={{ marginBottom: '2rem', textAlign: 'center' }}>
        Job Seeker Profile
      </Typography>

      <form onSubmit={handleSubmit}>
        {/* Name Field */}
        <TextField
          fullWidth
          label="Full Name"
          variant="outlined"
          value={name}
          onChange={(e) => setName(e.target.value)}
          sx={{ marginBottom: '1rem' }}
        />

        {/* Skills Field */}
        <TextField
          fullWidth
          label="Skills (comma separated)"
          variant="outlined"
          value={skills}
          onChange={(e) => setSkills(e.target.value)}
          sx={{ marginBottom: '1rem' }}
        />

        {/* Experience Level Field */}
        <FormControl fullWidth sx={{ marginBottom: '1rem' }}>
          <InputLabel>Experience Level</InputLabel>
          <Select
            value={experienceLevel}
            onChange={(e) => setExperienceLevel(e.target.value)}
            label="Experience Level"
          >
            <MenuItem value="Beginner">Beginner</MenuItem>
            <MenuItem value="Intermediate">Intermediate</MenuItem>
            <MenuItem value="Expert">Expert</MenuItem>
          </Select>
        </FormControl>

        {/* Portfolio/LinkedIn Field */}
        <TextField
          fullWidth
          label="Portfolio/LinkedIn URL"
          variant="outlined"
          value={portfolio}
          onChange={(e) => setPortfolio(e.target.value)}
          sx={{ marginBottom: '1.5rem' }}
        />

        {/* Submit Button */}
        <Button type="submit" variant="contained" color="primary" sx={{ width: '100%' }}>
          Submit
        </Button>
      </form>
    </Box>
  );
};

export default JobSeekerForm;
