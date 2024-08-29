// src/GraduationInvitation.js
import React from 'react';
import './GraduationInvitation.css';

const GraduationInvitation = () => {
  return (
    <div className="invitation-card">
      <div className="invitation-content">
        <h1 className="title">Te invito !</h1>
        <p className="subtitle">Ceremonia de graduación de la clase de 2024</p>
        <p className="details">
          A celebrar mi culimnacioón de la carrera 
        </p>
        <p className="date-time">Septiembre 05, 2024 | 11:00 PM</p>
        <p className="location"> Ubicación Conocida (Mi casa) </p>
        <button className="rsvp-button">RSVP Now</button>
      </div>
    </div>
  );
};

export default GraduationInvitation;
