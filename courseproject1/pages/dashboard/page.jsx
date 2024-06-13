import React, { useState, useRef } from 'react';

const Dashboard = () => {
  const [userImage, setUserImage] = useState(null);
  const fileInputRef = useRef(null);

  const styles = {
    dashboard: {
      display: 'flex',
      height: '100vh',
      fontFamily: 'Inter, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji',
    },
    sidebar: {
      backgroundColor: '#FFDAB9',
      padding: '20px',
      width: '250px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      boxShadow: '2px 0 5px rgba(0,0,0,0.1)',
    },
    button: {
      width: '100%',
      padding: '10px 20px',
      margin: '10px 0',
      backgroundColor: '#f0a773',
      color: '#fff',
      borderRadius: '5px',
      cursor: 'pointer',
      textAlign: 'left',
    },
    userProfile: {
      width: '150px',
      height: '150px',
      backgroundColor: userImage ? 'transparent' : '#ccc',
      borderRadius: '50%',
      marginBottom: '20px',
      cursor: 'pointer',
      backgroundImage: userImage ? `url(${userImage})` : 'none',
      backgroundSize: 'cover',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
    },
    userInfo: {
      marginTop: 'auto',
      width: '100%',
      textAlign: 'center',
    },
    content: {
      flexGrow: 1,
      padding: '20px',
      backgroundColor: '#f9f9f9',
      overflowY: 'scroll',
    },
    section: {
      backgroundColor: '#fff',
      padding: '20px',
      borderRadius: '10px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      marginBottom: '20px',
    },
    sectionTitle: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
      color: '#4a5568',
      marginBottom: '10px',
    },
    listItem: {
      fontSize: '1rem',
      color: '#2d3748',
      marginBottom: '5px',
    },
  };

  const handleImageUpload = (event) => {
    const file = event.target.files?.[0];
    const reader = new FileReader();

    reader.onload = () => {
      setUserImage(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleImageClick = () => {
    fileInputRef.current?.click();
  };

  const handleCoursesClick = () => {
    console.log('Courses clicked');
  };

  const handleAssignmentsClick = () => {
    console.log('Assignments clicked');
  };

  const handleSignOutClick = () => {
    console.log('Sign out clicked');
  };

  return (
    <div style={styles.dashboard}>
      <div style={styles.sidebar}>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          ref={fileInputRef}
          style={{ display: 'none' }}
        />
        <div style={styles.userProfile} onClick={handleImageClick}>
          {!userImage && <span>Click to upload</span>}
        </div>
        <button style={styles.button} onClick={handleCoursesClick}>Courses</button>
        <button style={styles.button} onClick={handleAssignmentsClick}>Assignments</button>
        <button style={styles.button} onClick={handleSignOutClick}>Sign Out</button>
        <div style={styles.userInfo}>
        <div><b>Bernardine Adusei-Okrah</b></div>

        </div>
      </div>

      <div style={styles.content}>
        <div style={styles.section}>
          <h1 style={styles.sectionTitle}>Dashboard</h1>
          <p>Welcome to our school community, where your curiosity and passions are celebrated. Here, you will find a wealth of resources and support to help you succeed academically and personally. Engage in discussions, connect with fellow students and teachers, and explore the diverse opportunities we offer. Our dedicated team is here to assist you with any questions or concerns. Thank you for joining us, and we look forward to supporting your growth and success!</p>
        </div>
        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>Current Courses</h2>
          <ul>
            <li style={styles.listItem}>Data Structures and Algorithms</li>
            <li style={styles.listItem}>Computer Systems Design</li>
            <li style={styles.listItem}>Linear Circuits</li>
            <li style={styles.listItem}>Academic Writing II</li>
          </ul>
        </div>
        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>Recent Assignments</h2>
          <ul>
            <li style={styles.listItem}>Assignment 1 - Differential Equations (Due: June 25)</li>
            <li style={styles.listItem}>Assignment 2 - Data Structures and Algorithms (Due: July 7)</li>
            <li style={styles.listItem}>Assignment 3 - Academic Writing II (Due: July 16)</li>
          </ul>
        </div>
        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>Upcoming Exams</h2>
          <ul>
            <li style={styles.listItem}>Linear Circuits - July 28</li>
            <li style={styles.listItem}>Differential Equations - July 29</li>
            <li style={styles.listItem}>Data Structures and Algorithms - July 30</li>
          </ul>
        </div>
        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>Recent Announcements</h2>
          <ul>
            <li style={styles.listItem}>New project guidelines for Linear released.</li>
            <li style={styles.listItem}>Guest lecture on Data Structures and Algorithms on June 21st.</li>
            <li style={styles.listItem}>Mid-term results for Differential Equations are out.</li>
          </ul>
        </div>
        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>Course Materials</h2>
          <div style={{ display: 'flex', gap: '20px' }}>
            <div style={{ ...styles.section, flex: 1 }}>
              <h3 style={{ ...styles.sectionTitle, fontSize: '1.25rem' }}>Lecture Notes</h3>
              <p>Download the latest lecture notes for your courses.</p>
            </div>
            <div style={{ ...styles.section, flex: 1 }}>
              <h3 style={{ ...styles.sectionTitle, fontSize: '1.25rem' }}>Assignments</h3>
              <p>Submit your assignments here.</p>
            </div>
            <div style={{ ...styles.section, flex: 1 }}>
              <h3 style={{ ...styles.sectionTitle, fontSize: '1.25rem' }}>Exam Resources</h3>
              <p>Find past papers and exam guidelines.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
