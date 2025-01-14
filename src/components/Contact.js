import React, { useState } from 'react';

const RockstarInfoForm = () => {
  const [name, setName] = useState('');
  const [game, setGame] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Nombre: ${name}, Juego: ${game}, Mensaje: ${message}`);
  };

  return (
    <section style={{
      padding: '50px',
      margin: '20px auto',
      background: 'linear-gradient(135deg, #111, #222)',
      borderRadius: '15px',
      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.7)',
      fontFamily: '"Roboto", sans-serif',
      maxWidth: '800px',
      color: '#fff',
      border: '3px solid #ff6600',
    }}>
      <h2 style={{
        fontSize: '3.5em',
        color: '#ff6600',
        textTransform: 'uppercase',
        fontWeight: 'bold',
        textAlign: 'center',
        textShadow: '0 0 5px rgba(255, 102, 0, 0.8)',
        marginBottom: '40px',
      }}>TU OPINION</h2>
      <p style={{
        fontSize: '1.3em',
        color: '#bbb',
        marginBottom: '30px',
        textAlign: 'center',
        textShadow: '0 0 5px rgba(255, 102, 0, 0.6)',
      }}>
        Nos gustaria saber tu opinion y gustos, si tienes algun dato que pudieramos agregar tambien sera bienvenido.
      </p>
      <form onSubmit={handleSubmit} style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
      }}>
        <label style={{
          color: '#ff6600',
          fontSize: '1.4em',
          fontWeight: 'bold',
          marginBottom: '20px',
          textShadow: '0 0 5px rgba(255, 102, 0, 0.6)',
        }}>
          Nombre:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} style={{
            padding: '14px',
            margin: '10px 0',
            borderRadius: '8px',
            border: '2px solid #ff6600',
            background: '#333',
            color: '#fff',
            fontSize: '1.2em',
            boxShadow: '0 3px 10px rgba(255, 102, 0, 0.6)',
            outline: 'none',
            transition: 'border 0.3s ease, box-shadow 0.3s ease',
          }} />
        </label>
        <label style={{
          color: '#ff6600',
          fontSize: '1.4em',
          fontWeight: 'bold',
          marginBottom: '20px',
          textShadow: '0 0 5px rgba(255, 102, 0, 0.6)',
        }}>
          Juego de Rockstar favorito:
          <input type="text" value={game} onChange={(e) => setGame(e.target.value)} style={{
            padding: '14px',
            margin: '10px 0',
            borderRadius: '8px',
            border: '2px solid #ff6600',
            background: '#333',
            color: '#fff',
            fontSize: '1.2em',
            boxShadow: '0 3px 10px rgba(255, 102, 0, 0.6)',
            outline: 'none',
            transition: 'border 0.3s ease, box-shadow 0.3s ease',
          }} />
        </label>
        <label style={{
          color: '#ff6600',
          fontSize: '1.4em',
          fontWeight: 'bold',
          marginBottom: '20px',
          textShadow: '0 0 5px rgba(255, 102, 0, 0.6)',
        }}>
          Mensaje:
          <textarea value={message} onChange={(e) => setMessage(e.target.value)} style={{
            padding: '14px',
            margin: '10px 0',
            borderRadius: '8px',
            border: '2px solid #ff6600',
            background: '#333',
            color: '#fff',
            fontSize: '1.2em',
            boxShadow: '0 3px 10px rgba(255, 102, 0, 0.6)',
            outline: 'none',
            transition: 'border 0.3s ease, box-shadow 0.3s ease',
            minHeight: '150px',
            maxWidth: '500px',
          }} />
        </label>
        <button type="submit" style={{
          padding: '15px 30px',
          background: '#ff6600',
          color: '#fff',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer',
          fontSize: '1.5em',
          fontWeight: 'bold',
          boxShadow: '0 4px 10px rgba(255, 102, 0, 0.6)',
          transition: 'background 0.3s ease, box-shadow 0.3s ease',
        }} onMouseOver={(e) => e.target.style.background = '#e65c00'} onMouseOut={(e) => e.target.style.background = '#ff6600'}>
          Enviar
        </button>
      </form>
    </section>
  );
};

export default RockstarInfoForm;
