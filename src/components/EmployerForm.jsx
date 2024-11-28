import { useState } from "react";
import PropTypes from "prop-types";
import { Box, Typography, TextField, Button, MenuItem, Select, FormControl, InputLabel, Alert } from "@mui/material";
import { useNavigate } from "react-router-dom"; // Importing useNavigate for redirect

const EmployerForm = () => {
  const [companyName, setCompanyName] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [skills, setSkills] = useState("");
  const [experienceLevel, setExperienceLevel] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [salaryRange, setSalaryRange] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const navigate = useNavigate(); // For redirection

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form fields
    if (!companyName || !jobTitle || !skills || !experienceLevel || !jobDescription) {
      setErrorMessage("Please fill up all required fields.");
      setSuccessMessage("");
      return;
    }

    const formData = {
      companyName,
      jobTitle,
      skills,
      experienceLevel,
      jobDescription,
      salaryRange,
    };
    console.log(formData);

    // Simulate form submission (e.g., send to backend)
    setSuccessMessage("Job opportunity submitted successfully!");
    setErrorMessage("");
    setTimeout(() => {
      navigate("/collab-hub"); // Redirect to Collab Hub after success
    }, 2000); // Wait for 2 seconds before redirecting

    // Reset form after submission
    setCompanyName("");
    setJobTitle("");
    setSkills("");
    setExperienceLevel("");
    setJobDescription("");
    setSalaryRange("");
  };

  return (
    <Box sx={{ minHeight: "100vh", background: "linear-gradient(to right, #6a11cb, #2575fc)", display: "flex", justifyContent: "center", alignItems: "center", padding: "2rem" }}>
      <Box sx={{ padding: "2rem", backgroundColor: "#fff", borderRadius: "12px", boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.1)", maxWidth: 600, width: "100%" }}>
        <Button variant="outlined" color="secondary" onClick={() => navigate("/collab")} sx={{ marginBottom: "1rem" }}>
          Back to Collab Hub
        </Button>
        <Typography variant="h4" sx={{ marginBottom: "1.5rem", textAlign: "center" }}>
          Post a Job Opportunity
        </Typography>

        {/* Display success or error message */}
        {errorMessage && <Alert severity="error">{errorMessage}</Alert>}
        {successMessage && <Alert severity="success">{successMessage}</Alert>}

        <form onSubmit={handleSubmit}>
          <TextField fullWidth label="Company Name" variant="outlined" value={companyName} onChange={(e) => setCompanyName(e.target.value)} sx={{ marginBottom: "1rem" }} />
          <TextField fullWidth label="Job Title" variant="outlined" value={jobTitle} onChange={(e) => setJobTitle(e.target.value)} sx={{ marginBottom: "1rem" }} />
          <TextField fullWidth label="Skills Needed (comma separated)" variant="outlined" value={skills} onChange={(e) => setSkills(e.target.value)} sx={{ marginBottom: "1rem" }} />

          <FormControl fullWidth sx={{ marginBottom: "1rem" }}>
            <InputLabel>Experience Level</InputLabel>
            <Select value={experienceLevel} onChange={(e) => setExperienceLevel(e.target.value)} label="Experience Level">
              <MenuItem value="Beginner">Beginner</MenuItem>
              <MenuItem value="Intermediate">Intermediate</MenuItem>
              <MenuItem value="Expert">Expert</MenuItem>
            </Select>
          </FormControl>

          <TextField fullWidth label="Job Description" variant="outlined" value={jobDescription} onChange={(e) => setJobDescription(e.target.value)} multiline rows={4} sx={{ marginBottom: "1rem" }} />

          <TextField fullWidth label="Salary Range (optional)" variant="outlined" value={salaryRange} onChange={(e) => setSalaryRange(e.target.value)} sx={{ marginBottom: "1.5rem" }} />

          <Button type="submit" variant="contained" color="primary" sx={{ width: "100%" }}>
            Submit Opportunity
          </Button>
        </form>
      </Box>
    </Box>
  );
};

export default EmployerForm;
