import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import AdminHome from './pages/AdminHome';
import ManageUsers from './pages/ManageUsers';
import CreateAndManageAnnouncements from './pages/CreateAndManageAnnouncements';
import AdminEventsDashboard from './pages/AdminEventsDashboard';
const AdminDashboard = () => {
  return (
    <div>
      <Navbar />
      <div style={{ padding: '1rem', marginTop: '1rem' }}>
        <Routes>
          <Route path="/" element={<AdminHome />} />
          <Route path="/users" element={<ManageUsers />} />
          <Route path="/createAndManageAnnouncements" element={<CreateAndManageAnnouncements />} />
          <Route path="/events" element={<AdminEventsDashboard />} />
        </Routes>
      </div>
    </div>
  );
};

export default AdminDashboard;
