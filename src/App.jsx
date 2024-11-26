import { Routes, Route } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NavBar from './components/NavBar';
import Home from './components/Home';
import Announcements from './components/Announcements';
import Events from './components/Events';
import ResourceHub from './components/ResourceHub';
import CollabHub from './components/CollabHub';
import JobSeekerForm from './components/JobSeekerForm';
import EmployerForm from './components/EmployerForm';
import { Box } from '@mui/material';

function App() {
  return (
    <div style={{ width: '100%', margin: 0, padding: 0, overflowX: 'hidden' }}>
      {/* Navigation Bar */}
      <NavBar />

      {/* Main Content */}
      <Box sx={{ width: '100%', marginTop:0, padding: 0 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/announcements" element={<Announcements />} />
          <Route path="/events" element={<Events />} />
          <Route path="/resources" element={<ResourceHub />} />
          <Route path="/collab" element={<CollabHub/>} />
          <Route path="/jobseeker" element={<JobSeekerForm />} />
          <Route path="/employer" element={<EmployerForm />} />
        </Routes>
      </Box>
    </div>
  );
}

export default App;
