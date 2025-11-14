import React from 'react';
import '../styles/HighlightItem.css';

const HighlightItem = ({ number, title, description }) => {
  return (
    <div className="highlight-item">
      <div className="highlight-number">{number}</div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default HighlightItem;
