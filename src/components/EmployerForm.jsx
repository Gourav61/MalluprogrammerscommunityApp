import { useState } from 'react';
import { Box, Typography, TextField, Button, MenuItem, Select, FormControl, InputLabel } from '@mui/material';

// Define the EmployerForm component
const EmployerForm = () => {
  // Form state
  const [companyName, setCompanyName] = useState('');
  const [jobTitle, setJobTitle] = useState('');
  const [skills, setSkills] = useState('');
  const [experienceLevel, setExperienceLevel] = useState('');
  const [jobDescription, setJobDescription] = useState('');
  const [salaryRange, setSalaryRange] = useState('');

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // For now, we will just log the data to the console
    const formData = {
      companyName,
      jobTitle,
      skills,
      experienceLevel,
      jobDescription,
      salaryRange,
    };
    console.log(formData);
    // Reset the form after submission
    setCompanyName('');
    setJobTitle('');
    setSkills('');
    setExperienceLevel('');
    setJobDescription('');
    setSalaryRange('');
  };

  return (
    <Box sx={{ padding: '2rem', backgroundColor: '#f4f4f4', maxWidth: 600, margin: '0 auto' }}>
      <Typography variant="h4" sx={{ marginBottom: '2rem', textAlign: 'center' }}>
        Post a Job Opportunity
      </Typography>

      <form onSubmit={handleSubmit}>
        {/* Company Name Field */}
        <TextField
          fullWidth
          label="Company Name"
          variant="outlined"
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
          sx={{ marginBottom: '1rem' }}
        />

        {/* Job Title Field */}
        <TextField
          fullWidth
          label="Job Title"
          variant="outlined"
          value={jobTitle}
          onChange={(e) => setJobTitle(e.target.value)}
          sx={{ marginBottom: '1rem' }}
        />

        {/* Skills Needed Field */}
        <TextField
          fullWidth
          label="Skills Needed (comma separated)"
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

        {/* Job Description Field */}
        <TextField
          fullWidth
          label="Job Description"
          variant="outlined"
          value={jobDescription}
          onChange={(e) => setJobDescription(e.target.value)}
          multiline
          rows={4}
          sx={{ marginBottom: '1rem' }}
        />

        {/* Salary Range Field (Optional) */}
        <TextField
          fullWidth
          label="Salary Range (optional)"
          variant="outlined"
          value={salaryRange}
          onChange={(e) => setSalaryRange(e.target.value)}
          sx={{ marginBottom: '1.5rem' }}
        />

        {/* Submit Button */}
        <Button type="submit" variant="contained" color="primary" sx={{ width: '100%' }}>
          Submit Opportunity
        </Button>
      </form>
    </Box>
  );
};

export default EmployerForm;
