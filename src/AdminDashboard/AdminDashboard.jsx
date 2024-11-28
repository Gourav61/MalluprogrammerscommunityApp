import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import AdminHome from './pages/AdminHome';
import ManageUsers from './pages/ManageUsers';
import ManageEvents from './pages/ManageEvents';
import CreateAndManageAnnouncements from './pages/CreateAndManageAnnouncements';
const AdminDashboard = () => {
  return (
    <div>
      <Navbar />
      <div style={{ padding: '1rem', marginTop: '1rem' }}>
        <Routes>
          <Route path="/" element={<AdminHome />} />
          <Route path="/users" element={<ManageUsers />} />
          <Route path="/events" element={<ManageEvents />} />
          <Route path="/createAndManageAnnouncements" element={<CreateAndManageAnnouncements />} />
        </Routes>
      </div>
    </div>
  );
};

export default AdminDashboard;
