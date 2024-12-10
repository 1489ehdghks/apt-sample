import React, { useState } from 'react';
import './HillstateMobileHeader.css';

const HillstateMobileHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="mobile-header">
      <div className="mobile-logo">HILLSTATE</div>
      <button className="menu-toggle" onClick={toggleMenu}>
        ☰
      </button>
      {isMenuOpen && (
        <nav className="mobile-nav">
          {['분양정보', '청약정보', '단지정보', '계약·입주', '브랜드', '고객센터'].map((menu, index) => (
            <div key={index} className="mobile-nav-item">
              {menu}
            </div>
          ))}
        </nav>
      )}
    </header>
  );
};

export default HillstateMobileHeader;