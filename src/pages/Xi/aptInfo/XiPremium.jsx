import React from 'react';
import './XiPremium.scss';
import 프리미엄1 from '../../../shared/asset/Xi/프리미엄1.jpg'

const XiPremium = () => {
  return (
    <div className="premium-info">
      <div className="premium-items">
        <div className="premium-item">
          <div className="item-content">
            <div className="item-image">
              <img src={프리미엄1} alt="다양한 멀티 교통망" />
            </div>
          </div>
        </div>

        <div className="premium-item">
          <div className="item-content reverse">
          </div>
        </div>
      </div>
    </div>
  );
};

export default XiPremium;