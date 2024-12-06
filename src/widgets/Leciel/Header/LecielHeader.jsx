import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './LecielHeader.scss';

const LecielHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = {
    사업안내: {
      items: [
        { name: '사업개요', path: '/overview' },
        { name: '입지안내/오시는길', path: '/location' },
      ]
    },
    프리미엄: {
      items: [
        { name: 'Service & Smart System', path: '/service' },
        { name: 'Premium Community', path: '/premiumcommunity' }
      ]
    },
    단지안내: {
      items: [
        { name: '동호수배치도', path: '/APTlayout' },
        { name: '평면안내', path: '/APTplans' }
      ]
    },
    홍보센터: {
      items: [
        { name: '홍보영상', path: '/promovideo' },
      ]
    },
    예약센터: {
      items: [
        { name: '예약센터', path: '/reservation' }
      ]
    }
  };
  

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <Link to="/" className="logo">
          태양아너스 르씨엘
        </Link>

        <nav className="main-nav">
          {Object.entries(menuItems).map(([category, { items }]) => (
            <div key={category} className="nav-item">
              <span className="category">{category}</span>
              <div className="submenu">
                {items.map(({ name, path }) => (
                  <Link key={name} to={`/leciel${path}`} className="submenu-item">
                  {name}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </nav>

        <div className="contact">
          <span>1555-1960</span>
        </div>
      </div>
    </header>
  );
};


export default LecielHeader;