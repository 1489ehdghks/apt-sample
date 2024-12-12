import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FaUser, FaUserPlus, FaSearch } from 'react-icons/fa';
import hillstateLogo from '../../shared/asset/Hillstate/HillstateLogo.png';
import './HillstateHeader.scss';

const HillstateHeader = () => {
  const [isSubmenuVisible, setIsSubmenuVisible] = useState(false);
  const [hoveredCategory, setHoveredCategory] = useState(null);
  const headerRef = useRef(null);

  const handleMouseEnter = () => {
    setIsSubmenuVisible(true);
  };

  const handleMouseLeave = () => {
    const timeoutId = setTimeout(() => {
      setIsSubmenuVisible(false);
      setHoveredCategory(null);
    }, 100);
    return () => clearTimeout(timeoutId);
  };



  const menuItems = {
    '분양정보': [
      { name: '분양단지', path: '/sales-complex' },
      { name: '분양캘린더', path: '/sales-calendar' }
    ],
    '청약정보': [
      { name: '청약가이드', path: '/subscription-guide' },
      { name: '당첨자 조회', path: '/winners-search' }
    ],
    '단지정보': [
      { name: '공사단지', path: '/construction' },
      { name: '입주단지', path: '/move-in' }
    ],
    '계약·입주': [
      { name: '계약자 서비스', path: '/contract-service' },
      { name: '입주(이사) 예약', path: '/move-in-reservation' },
      { name: '입주가이드', path: '/move-in-guide' },
      { name: '방문예약', path: '/visit-reservation' }
    ],
    '브랜드': [
      { name: '브랜드소개', path: '/brand-intro' },
      { name: 'Next Premium', path: '/next-premium' },
      { name: 'B.I', path: '/brand-identity' },
      { name: '브랜드 PR', path: '/brand-pr' },
      { name: '현대엔지니어링', path: '/hyundai-engineering' },
      { name: '현대 테라타워', path: '/terra-tower' },
      { name: '힐스테이트 소식', path: '/hillstate-news' }
    ],
    '고객센터': [
      { name: 'A/S 안내', path: '/as-guide' },
      { name: 'A/S 신청', path: '/as-request' },
      { name: '1:1 상담', path: '/consultation' },
      { name: 'FAQ', path: '/faq' }
    ]
  };

  return (
    <header 
      ref={headerRef}
      className="hillstate-header"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="header-container">
        <h1 className="logo">
          <Link to="/">
            <img src={hillstateLogo} alt="HILLSTATE" />
          </Link>
        </h1>

        <nav className="main-menu">
          {Object.keys(menuItems).map((category) => (
            <div
              key={category}
              className={`menu-item ${hoveredCategory === category ? 'active' : ''}`}
              onMouseEnter={() => setHoveredCategory(category)}
            >
              <span className="category-name">{category}</span>
            </div>
          ))}
        </nav>


        <div className="user-menu">
          <Link to="/login" className="user-menu-item">
            <div className="icon-wrapper">
              <FaUser />
            </div>
            <span>로그인</span>
          </Link>
          <Link to="/signup" className="user-menu-item">
            <div className="icon-wrapper">
              <FaUserPlus />
            </div>
            <span>회원가입</span>
          </Link>
          <button type="button" className="user-menu-item">
            <div className="icon-wrapper">
              <FaSearch />
            </div>
            <span>검색</span>
          </button>
        </div>
      </div>

      {isSubmenuVisible && (
        <div className="submenu-wrapper">
          <div className="submenu-container">
            {Object.entries(menuItems).map(([category, items]) => (
              <div 
                key={category}
                className={`submenu-column ${hoveredCategory === category ? 'active' : ''}`}
                onMouseEnter={() => setHoveredCategory(category)}
              >
                <div className="submenu-items">
                  {items.map((item) => (
                    <Link
                      key={item.name}
                      to={item.path}
                      className="submenu-item"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default HillstateHeader;