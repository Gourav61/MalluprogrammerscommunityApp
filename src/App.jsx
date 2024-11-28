import { Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Announcements from './components/Announcements';
import Events from './components/Events';
import EventRegistration from './components/EventRegistration';
import RegistrationSuccess from './components/RegistrationSuccess';
import ResourceHub from './components/ResourceHub';
import CollabHub from './components/CollabHub';
import JobSeekerForm from './components/JobSeekerForm';
import EmployerForm from './components/EmployerForm';
import AnnouncementDetail from './components/AnnouncementDetail';
import OpportunityDetail from './components/OpportunityDetail';

function App() {
  return (
    <div style={{ width: '100%', margin: 0, padding: 0, overflowX: 'hidden' }}>
      {/* Navigation Bar */}
      <NavBar />

      {/* Main Content */}
      <Box sx={{ width: '100%', marginTop: 0, padding: 0 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/announcements" element={<Announcements />} />
          <Route path="/events" element={<Events />} />
          <Route path="/event/register/:id" element={<EventRegistration />} />
          <Route path="/event/:id/success" element={<RegistrationSuccess />} />
          <Route path="/resources" element={<ResourceHub />} />
          <Route path="/collab" element={<CollabHub />} />
          <Route path="/opportunity/:id" element={<OpportunityDetail />} />
          <Route path="/jobseeker" element={<JobSeekerForm />} />
          <Route path="/employer" element={<EmployerForm />} />
          <Route path="/announcements/:id" element={<AnnouncementDetail />} />
        </Routes>
      </Box>
    </div>
  );
}

export default App;
