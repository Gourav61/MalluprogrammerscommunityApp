import { useState } from 'react';
import {
  Box,
  Typography,
  TextField,
  Button,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Snackbar,
  Alert,
  TablePagination,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const CreateAndManageAnnouncements = () => {
  const [announcements, setAnnouncements] = useState([
    { id: 1, title: 'Webinar on React', date: '2024-11-30', description: 'Learn about React trends.' },
    { id: 2, title: 'Hackathon Registration', date: '2024-12-10', description: 'Join the annual hackathon.' },
  ]);
  const [formData, setFormData] = useState({ title: '', date: '', description: '' });
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [selectedAnnouncement, setSelectedAnnouncement] = useState(null);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState('success');
  const [searchTerm, setSearchTerm] = useState('');
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  // Handlers
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEditing) {
      setAnnouncements((prev) =>
        prev.map((announcement) =>
          announcement.id === editId ? { ...announcement, ...formData } : announcement
        )
      );
      setSnackbarMessage('Announcement updated successfully!');
    } else {
      const newAnnouncement = { id: announcements.length + 1, ...formData };
      setAnnouncements((prev) => [...prev, newAnnouncement]);
      setSnackbarMessage('Announcement created successfully!');
    }
    setSnackbarSeverity('success');
    setSnackbarOpen(true);
    setFormData({ title: '', date: '', description: '' });
    setIsEditing(false);
    setEditId(null);
  };

  const handleOpenDeleteDialog = (announcement) => {
    setSelectedAnnouncement(announcement);
    setDeleteDialogOpen(true);
  };

  const handleCloseDeleteDialog = () => setDeleteDialogOpen(false);

  const handleDelete = () => {
    setAnnouncements((prev) => prev.filter((a) => a.id !== selectedAnnouncement.id));
    setSnackbarMessage('Announcement deleted successfully!');
    setSnackbarSeverity('success');
    setSnackbarOpen(true);
    handleCloseDeleteDialog();
  };

  const handleEdit = (id) => {
    const announcementToEdit = announcements.find((announcement) => announcement.id === id);
    setFormData({
      title: announcementToEdit.title,
      date: announcementToEdit.date,
      description: announcementToEdit.description,
    });
    setIsEditing(true);
    setEditId(id);
  };

  const handleSearchChange = (e) => setSearchTerm(e.target.value);

  const handleSnackbarClose = () => setSnackbarOpen(false);

  const handleChangePage = (event, newPage) => setPage(newPage);
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  // Filter and paginate announcements
  const filteredAnnouncements = announcements.filter((announcement) =>
    announcement.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const paginatedAnnouncements = filteredAnnouncements.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  return (
    <Box sx={{ padding: '2rem' }}>
      {/* Form Section */}
      <Typography variant="h5" sx={{ marginBottom: '1rem', fontWeight: 'bold' }}>
        {isEditing ? 'Edit Announcement' : 'Create Announcement'}
      </Typography>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{ marginBottom: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '600px' }}
      >
        <TextField label="Title" name="title" value={formData.title} onChange={handleChange} required fullWidth />
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
          label="Description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
          multiline
          rows={4}
          fullWidth
        />
        <Button type="submit" variant="contained" sx={{ backgroundColor: '#646cff', color: 'white' }}>
          {isEditing ? 'Update Announcement' : 'Create Announcement'}
        </Button>
      </Box>

      {/* Search and Manage Section */}
      <Typography variant="h5" sx={{ marginBottom: '1rem', fontWeight: 'bold' }}>
        Manage Announcements
      </Typography>
      <TextField
        label="Search"
        value={searchTerm}
        onChange={handleSearchChange}
        fullWidth
        sx={{ marginBottom: '1rem' }}
      />
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Title</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {paginatedAnnouncements.map((announcement) => (
              <TableRow key={announcement.id}>
                <TableCell>{announcement.id}</TableCell>
                <TableCell>{announcement.title}</TableCell>
                <TableCell>{announcement.date}</TableCell>
                <TableCell>
                  <IconButton color="primary" onClick={() => handleEdit(announcement.id)}>
                    <EditIcon />
                  </IconButton>
                  <IconButton color="error" onClick={() => handleOpenDeleteDialog(announcement)}>
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={filteredAnnouncements.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </TableContainer>

      {/* Delete Confirmation Dialog */}
      <Dialog open={deleteDialogOpen} onClose={handleCloseDeleteDialog}>
        <DialogTitle>Confirm Deletion</DialogTitle>
        <DialogContent>
        <DialogContentText>
              Are you sure you want to delete the announcement titled &quot;{selectedAnnouncement?.title}&quot;?
        </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDeleteDialog} color="primary">
            Cancel
          </Button>
          <Button onClick={handleDelete} color="error">
            Delete
          </Button>
        </DialogActions>
      </Dialog>

      {/* Snackbar */}
      <Snackbar open={snackbarOpen} autoHideDuration={3000} onClose={handleSnackbarClose}>
        <Alert onClose={handleSnackbarClose} severity={snackbarSeverity} sx={{ width: '100%' }}>
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default CreateAndManageAnnouncements;
