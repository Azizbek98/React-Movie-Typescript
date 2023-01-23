import React from 'react';
import image from '../../assets/not-found.png';
import './EmptyList.scss';

const EmptyList: React.FC = () => {
  return (
    <div className="empty-container">
      <img src={image} alt="not found" height="200" />
      <p className="empty-title">
        <span>Empty!</span> Film was not found.
      </p>
    </div>
  );
};

export default EmptyList;
