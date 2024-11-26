// src/components/Footer.jsx
import { Box, Typography, Link, IconButton, Grid } from "@mui/material";
import { Facebook, Twitter, LinkedIn, Email } from "@mui/icons-material";

const Footer = () => {
  return (
    <Box sx={{ background: "linear-gradient(135deg, #3b3b3b, #646cff)", color: "white", padding: "3rem 2rem" }}>
      {/* Social Links Section */}
      <Grid container spacing={4} justifyContent="center" alignItems="center">
        <Grid item>
          <Typography variant="h6" sx={{ fontWeight: "bold", color: "#fff", letterSpacing: "1px", textTransform: "uppercase" }}>
            Follow Us
          </Typography>
        </Grid>
        <Grid item>
          <IconButton
            component="a"
            href="https://www.facebook.com/share/g/EyqRyaWWfU8AaPWf/"
            target="_blank"
            sx={{
              color: "#fff",
              "&:hover": {
                color: "#646cff",
                transform: "scale(1.2)",
                transition: "all 0.3s ease",
              },
              fontSize: "2rem",
              marginRight: "1rem",
            }}
          >
            <Facebook />
          </IconButton>
          <IconButton
            component="a"
            href="https://x.com/M4llUPR0GR4M3R5?t=n4xcsZiHaHxaEmIP0QUzkA&s=09"
            target="_blank"
            sx={{
              color: "#fff",
              "&:hover": {
                color: "#646cff",
                transform: "scale(1.2)",
                transition: "all 0.3s ease",
              },
              fontSize: "2rem",
              marginRight: "1rem",
            }}
          >
            <Twitter />
          </IconButton>
          <IconButton
            component="a"
            href="https://www.linkedin.com/in/mallu-programmers-830614270/"
            target="_blank"
            sx={{
              color: "#fff",
              "&:hover": {
                color: "#646cff",
                transform: "scale(1.2)",
                transition: "all 0.3s ease",
              },
              fontSize: "2rem",
              marginRight: "1rem",
            }}
          >
            <LinkedIn />
          </IconButton>
          <IconButton
            component="a"
            href="mailto:malluprogrammersofficial@gmail.com"
            target="_blank"
            sx={{
              color: "#fff",
              "&:hover": {
                color: "#646cff",
                transform: "scale(1.2)",
                transition: "all 0.3s ease",
              },
              fontSize: "2rem",
            }}
          >
            <Email />
          </IconButton>
        </Grid>
      </Grid>

      {/* Divider Section */}
      <Box sx={{ borderTop: "1px solid #555", marginTop: "2rem", marginBottom: "2rem" }}></Box>

      {/* Additional Links Section */}
      <Grid container spacing={4} justifyContent="center" alignItems="center" sx={{ marginTop: "2rem" }}>
        <Grid item>
          <Link href="#about-us" sx={{ color: "#bbb", textDecoration: "none", fontWeight: "bold", "&:hover": { color: "#646cff" } }}>
            About Us
          </Link>
        </Grid>
        <Grid item>
          <Link href="#privacy-policy" sx={{ color: "#bbb", textDecoration: "none", fontWeight: "bold", "&:hover": { color: "#646cff" } }}>
            Privacy Policy
          </Link>
        </Grid>
        <Grid item>
          <Link href="#terms-conditions" sx={{ color: "#bbb", textDecoration: "none", fontWeight: "bold", "&:hover": { color: "#646cff" } }}>
            Terms & Conditions
          </Link>
        </Grid>
      </Grid>

      {/* Call to Action Section */}
      <Box sx={{ marginTop: "3rem", textAlign: "center" }}>
        <Typography variant="h6" sx={{ color: "#fff", marginBottom: "1rem" }}>
          Stay Updated with the Latest News
        </Typography>
        <Link
          href="#"
          sx={{
            display: "inline-block",
            backgroundColor: "#646cff",
            padding: "0.8rem 2rem",
            borderRadius: "8px",
            color: "white",
            textDecoration: "none",
            fontWeight: "bold",
            "&:hover": {
              backgroundColor: "#535bf2",
              transform: "scale(1.05)",
              transition: "all 0.3s ease",
            },
          }}
        >
          Subscribe Now
        </Link>
      </Box>

      {/* Copyright Section */}
      <Typography variant="body2" sx={{ textAlign: "center", marginTop: "3rem", color: "#bbb" }}>
        &copy; {new Date().getFullYear()} Mallu Programmers. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
