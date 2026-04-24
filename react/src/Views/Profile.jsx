import React from 'react';
import foto from '../assets/dinosaurio.png';

const Profile = ({ user }) => {
  
  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      padding: '20px',
      backgroundColor: '#f9f9f9',
      minHeight: '100vh',
    },
    header: {
      color: '#333',
      marginBottom: '20px',
      fontSize: '2rem',
    },
    card: {
      backgroundColor: '#ffffff',
      borderRadius: '15px',
      boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)',
      padding: '40px',
      textAlign: 'center',
      width: '100%',
      maxWidth: '350px',
    },
    image: {
      width: '150px',
      height: '150px',
      borderRadius: '50%',
      objectFit: 'cover',
      border: '4px solid #eaeaea',
      marginBottom: '20px',
    },
    name: {
      fontSize: '1.5rem',
      color: '#2c3e50',
      margin: '10px 0',
    },
    id: {
      fontSize: '1rem',
      color: '#7f8c8d',
      fontWeight: '400',
      margin: '0',
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>Profile</h2>
      
      <div style={styles.card}>
        <img 
          src={foto} 
          alt="Avatar del usuario" 
          style={styles.image} 
        />
        <h1 style={styles.name}>Nombre: {user.name}</h1>
        <h2 style={styles.id}>ID: {user._id}</h2>
      </div>
    </div>
  );
}

export default Profile;