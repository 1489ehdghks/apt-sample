import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './XiMobileHeader.scss';

const XiMobileHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openMenus, setOpenMenus] = useState({});
  const handleEModelhouse = (e) => {
    e.preventDefault();
    window.open('https://www.xi-event.com/templete/pcxi_firsnity/vr2/tour_unit.html', '_blank');
    closeMenu();
  };
  

  const menuItems = [
    {
      title: '사업안내',
      subItems: ['사업개요', '입지환경', '오시는길']
    },
    {
      title: '단지안내',
      subItems: ['프리미엄', '클럽자이안 1단지', '클럽자이안 2단지', '클럽클라우드', '단지설계', '단지배치도', '동·호수배치도', 'SYSTEM']
    },
    {
      title: '세대안내',
      subItems: ['기본제공품목', '평면정보','E-모델하우스','마감재리스트']
    },
    {
      title: '청약안내',
      subItems: ['일반공급', '특별공급']
    },
    {
      title: '분양안내',
      subItems: ['분양일정', '입주자 모집공고', '인지세 납부안내문']
    }
  ];

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
    <header className="xi-mobile-header">
      <div className="header-top">
        <button className="menu-button" onClick={toggleMenu}>
          {isMenuOpen ? 'X' : '≡'}
        </button>
        <Link to="/xi" className="logo" onClick={closeMenu}>
          자이 퍼스니티
        </Link>
        <a href="tel:1833-4723" className="phone-number">
          분양문의<br />1833-4723
        </a>
      </div>

      {isMenuOpen && (
        <nav className="mobile-nav">
          <ul className="menu-list">
            {menuItems.map((item, index) => (
              <li key={index} className="menu-item">
                <div 
                  className="menu-title" 
                  onClick={() => item.subItems.length > 0 && toggleMenuItem(index)}
                >
                  {item.title}
                  {item.subItems.length > 0 && (
                    <span className="toggle-icon">
                      {openMenus[index] ? '-' : '+'}
                    </span>
                  )}
                </div>
                {item.subItems.length > 0 && openMenus[index] && (
                  <ul className="sub-menu">
                 {item.subItems.map((subItem, subIndex) => (
  <li key={subIndex}>
    {subItem === 'E-모델하우스' ? (
      <a 
        href="#"
        onClick={handleEModelhouse}
      >
        {subItem}
      </a>
    ) : (
      <Link 
        to={`/xi/${subItem.toLowerCase().replace(/ /g, '-')}`}
        onClick={closeMenu}
      >
        {subItem}
      </Link>
    )}
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

export default XiMobileHeader;
