import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.scss';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();  // navigate 훅 사용

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = {
    사업안내: {
      items: ['사업개요', '브랜드', '입지안내', '오시는길'],
      paths: ['/business-overview', '/brand', '/location-guide', '/directions']
    },
    프리미엄: {
      items: ['Concierge Service10', 'Smart System20', 'Premium Community30'],
      paths: ['/concierge-service', '/smart-system', '/premium-community']
    },
    단지안내: {
      items: ['동호수배치도', '평면안내'],
      paths: ['/unit-layout', '/floor-plans']
    },
    홍보센터: {
      items: ['홍보영상', '언론보도'],
      paths: ['/promo-video', '/media-coverage']
    },
    예약센터: {
      items: ['예약센터'],
      paths: ['/reservation']
    }
  };

  // 메뉴 항목 클릭 시 navigate를 이용해 이동
  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <div 
          className="logo"
          onClick={() => navigate('/')}  // 로고 클릭 시 홈으로 이동
        >
          태양아너스 르씨엘
        </div>

        <nav className="main-nav">
          {Object.entries(menuItems).map(([category, { items, paths }]) => (
            <div key={category} className="nav-item">
              <span className="category">{category}</span>
              <div className="submenu">
                {items.map((item, index) => (
                  <button 
                    key={item} 
                    className="submenu-item"
                    onClick={() => handleNavigation(paths[index])}  // 각 항목 클릭 시 해당 경로로 이동
                  >
                    {item}
                  </button>
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
