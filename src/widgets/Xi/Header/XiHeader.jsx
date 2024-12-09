import React from 'react';
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import XiMobileHeader from './XiMobileHeader';
import './XiHeader.scss';

const XiHeader = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  const handleEModelhouse = (e) => {
    e.preventDefault();
    window.open('https://www.xi-event.com/templete/pcxi_firsnity/vr2/tour_unit.html', '_blank');
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
    },
  ];

  if (isMobile) {
    return <XiMobileHeader menuItems={menuItems}/>;
  }

  return (
    <header className="xi-header">
      <div className="header-content">
        <Link to="/xi" className="logo">
          평촌자이 퍼스니티
        </Link>

        <nav className="main-nav">
          {menuItems.map((item, index) => (
            <div key={index} className="menu-item">
              <span className="menu-title">
                {item.title}
              </span>
              {item.subItems.length > 0 && (
                <div className="sub-menu">
                  {item.subItems.map((subItem, subIndex) => (
                    subItem === 'E-모델하우스' ? (
                      <a 
                        key={subIndex}
                        href="#"
                        className="sub-item"
                        onClick={handleEModelhouse}
                      >
                        {subItem}
                      </a>
                    ) : (
                      <Link 
                        key={subIndex}
                        to={`/xi/${subItem.toLowerCase().replace(/ /g, '-')}`}
                        className="sub-item"
                      >
                        {subItem}
                      </Link>
                    )
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="contact-number">
          분양문의 
          <a href="tel:1833-4723">
            <span className="phone">1833-4723</span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default XiHeader;
