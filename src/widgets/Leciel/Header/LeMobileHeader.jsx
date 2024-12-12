import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './LeMobileHeader.scss';

const LeMobileHeader = ({ menuItems }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openMenus, setOpenMenus] = useState({});

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleMenuItem = (index) => {
    setOpenMenus(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setOpenMenus({});
  };

  return (
    <header className="Le-mobile-header">
      <div className="header-top">
        <button className="menu-button" onClick={toggleMenu}>
          {isMenuOpen ? 'X' : '≡'}
        </button>
        <Link to="/leciel" className="logo" onClick={closeMenu}>
          태왕아너스 르씨엘
        </Link>
        <a href="tel:1555-1960" className="phone-number">
          분양문의<br />1555-1960
        </a>
      </div>

      {isMenuOpen && (
        <nav className="mobile-nav">
          <ul className="menu-list">
            {Object.entries(menuItems).map(([title, { items }], index) => (
              <li key={index} className="menu-item">
                <div 
                  className="menu-title" 
                  onClick={() => toggleMenuItem(index)}
                >
                  {title}
                  <span className="toggle-icon">{openMenus[index] ? '-' : '+'}</span>
                </div>
                {openMenus[index] && (
                  <ul className="sub-menu">
                    {items.map(({ name, path }) => (
                      <li key={name}>
                        <Link 
                          to={`/leciel${path}`} 
                          onClick={closeMenu}
                        >
                          {name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
};

export default LeMobileHeader;
