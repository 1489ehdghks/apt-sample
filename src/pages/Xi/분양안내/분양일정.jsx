import React from 'react';
import XilocationPic from '../../../shared/asset/Xi/분양일정.jpg'
import './분양일정.scss';

const 분양일정 = () => {
  return (
    <div className="location-info">
      <h1 className="title">분양일정</h1>
      
      <div className="map-container">
        <img src={XilocationPic} alt="분양일정" className="main-map" />
      </div>
    </div>
  );
};

export default 분양일정;
