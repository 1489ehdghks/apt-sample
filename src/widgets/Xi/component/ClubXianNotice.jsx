import React from 'react';
import './ClubXianNotice.scss';

const ClubXianNotice = ({ notices }) => {
  return (
    <div className="notice-section">
      <div className="notice-content">
        {notices.map((notice, index) => (
          <div key={index} className="notice-item">
            <p>
              <span className="bullet">※</span>
              {notice}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClubXianNotice;