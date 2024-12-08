import React from 'react';
import './기본제공품목.scss';
import 기본품목안내 from '../../../shared/asset/Xi/기본품목안내.jpg';

const 기본제공품목 = () => {
  return (
    <div className="기본제공품목">
      <h2>기본제공품목</h2>
      <div className="image-container">
        <img src={기본품목안내} alt="기본제공품목 안내" />
      </div>
    </div>
  );
};

export default 기본제공품목;