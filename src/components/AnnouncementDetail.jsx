import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const AnnouncementDetail = () => {
  const { id } = useParams(); // Retrieve the announcement ID from the URL
  const [announcement, setAnnouncement] = useState(null);
  const [loading, setLoading] = useState(true);

  // Simulate fetching data based on the ID
  useEffect(() => {
    console.log("Fetched ID:", id); // Log the ID for debugging

    const fetchedAnnouncement = {
      1: { title: 'Upcoming Webinar on React', date: '2024-11-30', description: 'Join us for a live webinar to learn the latest trends in React development!' },
      2: { title: 'Hackathon Registration Open', date: '2024-12-10', description: 'Sign up now for our annual hackathon and showcase your skills!' },
      3: { title: 'New Mentorship Program', date: '2024-12-01', description: 'Apply for our new mentorship program to get guidance from industry professionals!' },
    };

    setAnnouncement(fetchedAnnouncement[id]); // Fetch the relevant announcement based on the ID
    setLoading(false); // Set loading to false after the data is fetched
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!announcement) {
    return <div>Announcement not found.</div>;
  }

  return (
    <div>
      <h2>{announcement.title}</h2>
      <p>{announcement.date}</p>
      <p>{announcement.description}</p>
    </div>
  );
};

export default AnnouncementDetail;
