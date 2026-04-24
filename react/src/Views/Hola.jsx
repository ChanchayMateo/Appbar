import React from 'react';
import User from '../Componentes/User';
import Add from '../Componentes/Add';

const Hola = ({ users, delUser, addUser }) => {
  // Objeto con todos los estilos
  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '40px 20px',
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      backgroundColor: '#f4f6f8',
      minHeight: '100vh',
    },
    table: {
      width: '80%',
      maxWidth: '900px',
      borderCollapse: 'collapse',
      marginTop: '30px',
      backgroundColor: '#ffffff',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
      borderRadius: '10px',
      overflow: 'hidden', // Necesario para que el thead respete los bordes redondeados
    },
    thead: {
      backgroundColor: '#2c3e50',
      color: '#ffffff',
    },
    th: {
      padding: '16px 20px',
      textAlign: 'left',
      fontWeight: '600',
      textTransform: 'uppercase',
      fontSize: '0.85rem',
      letterSpacing: '0.05em',
    }
  };

  return (
    <div style={styles.container}>
      <Add addUser={addUser} />
      
      <table style={styles.table}>
        <thead style={styles.thead}>
          <tr>
            <th style={styles.th}>Id</th>
            <th style={styles.th}>Nombre</th>
            <th style={styles.th}>Delete?</th>
          </tr>
        </thead>

        <tbody>
          {users.map((u) => (
            <User key={u._id} user={u} delUser={delUser} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Hola;