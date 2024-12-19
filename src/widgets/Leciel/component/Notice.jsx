import React from 'react';
import './Notice.scss';

const Notice = ({ notices }) => {
  return (
    <div className="Le-notice-section">
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

export default Notice;