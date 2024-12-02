import { useState } from 'react';
import {
  Box,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  CardMedia,
  TextField,
  IconButton,
  Chip,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Tabs,
  Tab,
} from '@mui/material';
import { keyframes } from '@mui/system';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

// Hover animation
const hoverAnimation = keyframes`
  0% {
    transform: scale(1);
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  }
  100% {
    transform: scale(1.05);
    box-shadow: 0px 15px 20px rgba(0, 0, 0, 0.3);
  }
`;

const AdminEventsDashboard = () => {
  const [events, setEvents] = useState([
    {
      id: 1,
      title: 'React Meetup 2024',
      date: '2024-12-15',
      location: 'Online',
      description: 'Join us for an engaging session on advanced React concepts.',
      image: null,
      usersRegistered: [
        { name: 'John Doe', email: 'johndoe@gmail.com', phone: '123-456-7890' },
        { name: 'Jane Smith', email: 'janesmith@gmail.com', phone: '987-654-3210' },
      ], // Example users registered
    },
  ]);
  const [formData, setFormData] = useState({
    title: '',
    date: '',
    location: '',
    description: '',
    image: null,
    preview: '',
  });
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const [openRegistrationDialog, setOpenRegistrationDialog] = useState(false);
  const [deleteId, setDeleteId] = useState(null);
  const [selectedEvent, setSelectedEvent] = useState(null); // For viewing registrations
  const [tabIndex, setTabIndex] = useState(0); // To manage tabs

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle image file selection
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData((prev) => ({
        ...prev,
        image: file,
        preview: URL.createObjectURL(file),
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEditing) {
      setEvents((prev) =>
        prev.map((event) =>
          event.id === editId
            ? { ...event, ...formData, preview: null } // Update event
            : event
        )
      );
      setIsEditing(false);
      setEditId(null);
    } else {
      setEvents((prev) => [
        ...prev,
        { id: events.length + 1, ...formData, preview: null, usersRegistered: [] },
      ]);
    }
    setFormData({ title: '', date: '', location: '', description: '', image: null, preview: '' });
  };

  const handleEdit = (id) => {
    const eventToEdit = events.find((event) => event.id === id);
    setFormData({
      title: eventToEdit.title,
      date: eventToEdit.date,
      location: eventToEdit.location,
      description: eventToEdit.description,
      image: null,
      preview: eventToEdit.image,
    });
    setIsEditing(true);
    setEditId(id);
  };

  const handleDeleteConfirm = () => {
    setEvents((prev) => prev.filter((event) => event.id !== deleteId));
    setOpenDeleteDialog(false);
    setDeleteId(null);
  };

  const handleDelete = (id) => {
    setDeleteId(id);
    setOpenDeleteDialog(true);
  };

  const handleViewRegistrations = (event) => {
    setSelectedEvent(event);
    setOpenRegistrationDialog(true);
  };

  const handleTabChange = (event, newValue) => {
    setTabIndex(newValue);
  };

  return (
    <Box sx={{ padding: '2rem' }}>
      <Typography variant="h4" sx={{ fontWeight: 'bold', marginBottom: '2rem' }}>
        Admin Events Dashboard
      </Typography>

      {/* Tab Navigation */}
      <Tabs value={tabIndex} onChange={handleTabChange} aria-label="admin tabs">
        <Tab label="Manage Events" />
        <Tab label="View Registrations" />
      </Tabs>

      {/* Manage Events Tab */}
      {tabIndex === 0 && (
        <>
          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{ marginBottom: '2rem', maxWidth: '600px', display: 'flex', flexDirection: 'column', gap: '1rem' }}
          >
            <TextField
              label="Title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
              fullWidth
            />
            <TextField
              label="Date"
              name="date"
              type="date"
              value={formData.date}
              onChange={handleChange}
              required
              InputLabelProps={{ shrink: true }}
              fullWidth
            />
            <TextField
              label="Location"
              name="location"
              value={formData.location}
              onChange={handleChange}
              required
              fullWidth
            />
            <TextField
              label="Description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
              multiline
              rows={4}
              fullWidth
            />
            <Button variant="outlined" component="label">
              Upload Image
              <input type="file" hidden accept="image/*" onChange={handleImageUpload} />
            </Button>
            {formData.preview && (
              <Box sx={{ marginTop: '1rem', textAlign: 'center' }}>
                <Typography variant="subtitle1">Image Preview:</Typography>
                <img
                  src={formData.preview}
                  alt="Preview"
                  style={{ width: '100%', maxWidth: '300px', borderRadius: '8px' }}
                />
              </Box>
            )}
            <Button type="submit" variant="contained" sx={{ backgroundColor: '#646cff', color: 'white' }}>
              {isEditing ? 'Update Event' : 'Create Event'}
            </Button>
          </Box>

          {/* Event Cards */}
          <Grid container spacing={4}>
            {events.map((event) => (
              <Grid item xs={12} sm={6} md={4} key={event.id}>
                <Card
                  sx={{
                    position: 'relative',
                    transition: 'all 0.3s ease-in-out',
                    '&:hover': {
                      animation: `${hoverAnimation} 0.3s forwards`,
                    },
                    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
                    borderRadius: '12px',
                    overflow: 'hidden',
                  }}
                >
                  {event.image && (
                    <CardMedia component="img" height="200" image={URL.createObjectURL(event.image)} alt={event.title} />
                  )}
                  <Chip
                    label={event.date}
                    sx={{
                      position: 'absolute',
                      top: '15px',
                      right: '15px',
                      backgroundColor: '#646cff',
                      color: 'white',
                      fontWeight: 'bold',
                    }}
                  />
                  <CardContent sx={{ padding: '1.5rem' }}>
                    <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#333' }}>
                      {event.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'gray', marginBottom: '1rem' }}>
                      {event.location}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'gray', marginBottom: '1rem' }}>
                      {event.description}
                    </Typography>
                    <Button variant="outlined" onClick={() => handleViewRegistrations(event)}>
                      View Registrations
                    </Button>
                    <Box sx={{ marginTop: '1rem' }}>
                      <IconButton onClick={() => handleEdit(event.id)} sx={{ marginRight: '1rem' }}>
                        <EditIcon />
                      </IconButton>
                      <IconButton onClick={() => handleDelete(event.id)}>
                        <DeleteIcon />
                      </IconButton>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </>
      )}

      {/* View Registrations Tab */}
      {tabIndex === 1 && selectedEvent && (
        <Dialog open={openRegistrationDialog} onClose={() => setOpenRegistrationDialog(false)}>
          <DialogTitle>Registrations for {selectedEvent.title}</DialogTitle>
          <DialogContent>
            <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Phone</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {selectedEvent.usersRegistered.map((user, index) => (
                    <TableRow key={index}>
                      <TableCell>{user.name}</TableCell>
                      <TableCell>{user.email}</TableCell>
                      <TableCell>{user.phone}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setOpenRegistrationDialog(false)} color="primary">
              Close
            </Button>
          </DialogActions>
        </Dialog>
      )}

      {/* Delete Event Confirmation Dialog */}
      <Dialog open={openDeleteDialog} onClose={() => setOpenDeleteDialog(false)}>
        <DialogTitle>Delete Event</DialogTitle>
        <DialogContent>
          <DialogContentText>Are you sure you want to delete this event?</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDeleteDialog(false)} color="primary">
            Cancel
          </Button>
          <Button onClick={handleDeleteConfirm} color="secondary">
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default AdminEventsDashboard;
