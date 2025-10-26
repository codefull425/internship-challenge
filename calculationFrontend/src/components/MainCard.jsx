import React from 'react';
import '../styles/MainCard.css';

const MainCard = ({ children }) => {
  return (
    <div className="main-card">
      {children}
    </div>
  );
};

export default MainCard;

