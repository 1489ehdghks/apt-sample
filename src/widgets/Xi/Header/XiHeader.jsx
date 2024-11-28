import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './XiHeader.scss';

const XiHeader = () => {
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
      items: ['사업개요', '브랜드', '입지안내', '오시는길']
    },
    프리미엄: {
      items: ['Concierge Service10', 'Smart System20', 'Premium Community30']
    },
    단지안내: {
      items: ['동호수배치도', '평면안내']
    },
    홍보센터: {
      items: ['홍보영상', '언론보도']
    },
    예약센터: {
      items: ['예약센터']
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
                {items.map((item) => (
                  <Link key={item} to="/" className="submenu-item">
                    {item}
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


export default XiHeader;