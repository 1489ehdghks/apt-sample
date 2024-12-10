import React, { useState } from 'react';
import './HillstateHeader.css';

const HillstateHeader = () => {
  const [activeMenu, setActiveMenu] = useState(null);

  const handleMouseEnter = (menu) => {
    setActiveMenu(menu);
  };

  const handleMouseLeave = () => {
    setActiveMenu(null);
  };

  return (
    <header className="header">
      <div className="logo">HILLSTATE</div>
      <nav className="nav">
        {['분양정보', '청약정보', '단지정보', '계약·입주', '브랜드', '고객센터'].map((menu, index) => (
          <div
            key={index}
            className="nav-item"
            onMouseEnter={() => handleMouseEnter(menu)}
            onMouseLeave={handleMouseLeave}
          >
            {menu}
            {activeMenu === menu && (
              <div className="dropdown">
                {/* 각 메뉴에 맞는 드롭다운 내용 추가 */}
                <div>{menu} 내용</div>
              </div>
            )}
          </div>
        ))}
      </nav>
      <div className="user-actions">
        <span>로그인</span>
        <span>회원가입</span>
        <span>검색</span>
      </div>
    </header>
  );
};

export default HillstateHeader;