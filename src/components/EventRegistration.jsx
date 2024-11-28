import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Box, Typography, TextField, Button, CircularProgress, Select, MenuItem, InputLabel, FormControl, FormHelperText } from '@mui/material';

const EventRegistration = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    status: '', // 'student' or 'working'
    collegeDetails: '',
    companyName: '',
    yearsOfExperience: '',
    resume: null,
  });
  const [errors, setErrors] = useState({});
  
  // Handle changes to form fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    let newErrors = {};
    // Validate fields
    if (!formData.fullName) newErrors.fullName = 'Full Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.phone) newErrors.phone = 'Phone number is required';
    if (!formData.address) newErrors.address = 'Address is required';
    if (!formData.status) newErrors.status = 'Please select your status';

    if (formData.status === 'student' && !formData.collegeDetails) {
      newErrors.collegeDetails = 'College details are required for students';
    }

    if (formData.status === 'working' && (!formData.companyName || !formData.yearsOfExperience)) {
      newErrors.companyDetails = 'Company name and years of experience are required for working professionals';
    }

    if (!formData.resume) newErrors.resume = 'Resume is required';

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        // On success, navigate to the success page
        navigate(`/event/${id}/success`);
      }, 1500);
    }
  };

  return (
    <Box sx={{ padding: '2rem', maxWidth: '600px', margin: '0 auto', backgroundColor: '#fff', borderRadius: '8px' }}>
      <Typography variant="h4" sx={{ fontWeight: 'bold', marginBottom: '1rem', textAlign: 'center' }}>
        Register for Event
      </Typography>
      
      <form onSubmit={handleSubmit}>
        <TextField
          label="Full Name"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          fullWidth
          variant="outlined"
          sx={{ marginBottom: '1rem' }}
          error={Boolean(errors.fullName)}
          helperText={errors.fullName}
        />
        
        <TextField
          label="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          fullWidth
          variant="outlined"
          sx={{ marginBottom: '1rem' }}
          error={Boolean(errors.email)}
          helperText={errors.email}
        />

        <TextField
          label="Phone Number"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          fullWidth
          variant="outlined"
          sx={{ marginBottom: '1rem' }}
          error={Boolean(errors.phone)}
          helperText={errors.phone}
        />

        <TextField
          label="Address"
          name="address"
          value={formData.address}
          onChange={handleChange}
          fullWidth
          variant="outlined"
          sx={{ marginBottom: '1rem' }}
          error={Boolean(errors.address)}
          helperText={errors.address}
        />

        {/* Select Status (Student/Working) */}
        <FormControl fullWidth sx={{ marginBottom: '1rem' }} error={Boolean(errors.status)}>
          <InputLabel>Status</InputLabel>
          <Select
            label="Status"
            name="status"
            value={formData.status}
            onChange={handleChange}
          >
            <MenuItem value="student">Student</MenuItem>
            <MenuItem value="working">Working</MenuItem>
          </Select>
          <FormHelperText>{errors.status}</FormHelperText>
        </FormControl>

        {/* Show college details if student */}
        {formData.status === 'student' && (
          <TextField
            label="College Details"
            name="collegeDetails"
            value={formData.collegeDetails}
            onChange={handleChange}
            fullWidth
            variant="outlined"
            sx={{ marginBottom: '1rem' }}
            error={Boolean(errors.collegeDetails)}
            helperText={errors.collegeDetails}
          />
        )}

        {/* Show work-related fields if working */}
        {formData.status === 'working' && (
          <>
            <TextField
              label="Company Name"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              fullWidth
              variant="outlined"
              sx={{ marginBottom: '1rem' }}
              error={Boolean(errors.companyDetails)}
              helperText={errors.companyDetails}
            />
            <TextField
              label="Years of Experience"
              name="yearsOfExperience"
              value={formData.yearsOfExperience}
              onChange={handleChange}
              fullWidth
              variant="outlined"
              sx={{ marginBottom: '1rem' }}
              error={Boolean(errors.companyDetails)}
              helperText={errors.companyDetails}
            />
          </>
        )}

        {/* Resume Upload */}
        <Button
          variant="contained"
          component="label"
          sx={{ marginBottom: '1rem', width: '100%', padding: '1rem', backgroundColor: '#646cff', fontWeight: 'bold' }}
        >
          Upload Resume
          <input
            type="file"
            hidden
            name="resume"
            onChange={(e) => setFormData({ ...formData, resume: e.target.files[0] })}
          />
        </Button>
        {errors.resume && <Typography color="error" sx={{ marginBottom: '1rem' }}>{errors.resume}</Typography>}

        {/* Submit Button */}
        <Button
          type="submit"
          variant="contained"
          sx={{ width: '100%', padding: '1rem', backgroundColor: '#646cff', fontWeight: 'bold' }}
        >
          {loading ? <CircularProgress size={24} color="inherit" /> : 'Submit'}
        </Button>
      </form>
    </Box>
  );
};

export default EventRegistration;
