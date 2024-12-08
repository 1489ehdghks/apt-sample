import React from 'react';
import 일반공급1 from '../../../shared/asset/Xi/일반공급1.jpg'
import './일반공급.scss';

const 일반공급 = () => {
  return (
    <div className="일반공급">
      <h1 className="title">일반공급</h1>
      
      <div className="map-container">
        <img src={일반공급1} alt="일반공급1" className="main-map" />
      </div>
    </div>
  );
};

export default 일반공급;