import React from 'react';
import 인지세_납부안내문 from '../../../shared/asset/Xi/인지세_납부안내문.jpg'
import './납부안내문.scss';

const 납부안내문 = () => {
  return (
    <div className="location-info">
      <h1 className="title">납부안내문</h1>
      
      <div className="map-container">
        <img src={인지세_납부안내문} alt="납부안내문" className="main-map" />
      </div>
    </div>
  );
};

export default 납부안내문;
