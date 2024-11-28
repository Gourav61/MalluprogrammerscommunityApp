import { useParams } from 'react-router-dom';
import { Box, Typography } from '@mui/material';

// Static data for opportunities
const opportunities = [
  {
    id: 1,
    title: 'Open Collaboration: Frontend Developer for Startup',
    skills: ['React', 'JavaScript', 'Design'],
    description: 'Looking for a talented frontend developer to join a growing startup.',
  },
  {
    id: 2,
    title: 'Hiring: Backend Engineer for Freelance Project',
    skills: ['Node.js', 'APIs', 'Databases'],
    description: 'Seeking a backend engineer for a freelance project to build an API.',
  }
];

const OpportunityDetail = () => {
  const { id } = useParams(); // Get the opportunity ID from the URL parameter

  // Find the opportunity based on the ID
  const opportunity = opportunities.find((opportunity) => opportunity.id === parseInt(id));

  if (!opportunity) {
    return <Typography>No opportunity found!</Typography>; // Handle case if opportunity is not found
  }

  return (
    <Box sx={{ padding: '2rem', backgroundColor: '#fff' }}>
      <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
        {opportunity.title}
      </Typography>
      <Typography variant="body1" sx={{ marginTop: '1rem' }}>
        Description: {opportunity.description}
      </Typography>
      <Typography variant="body1" sx={{ marginTop: '1rem' }}>
        Skills Required: {opportunity.skills.join(', ')}
      </Typography>
      {/* Add more details as necessary */}
    </Box>
  );
};

export default OpportunityDetail;
