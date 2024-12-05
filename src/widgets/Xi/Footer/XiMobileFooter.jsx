import React from 'react';
import { Link } from 'react-router-dom';
import './XiMobileFooter.scss';

const XiMobileFooter = () => {
  const footerLinks = [
    {
      title: '오시는길',
      path: '/xi/오시는길'
    },
    {
      title: '이용약관',
      path: '/xi/terms'
    },
    {
      title: '개인정보처리방침',
      path: '/xi/privacy'
    },
    {
      title: '영상정보처리기기운영관리방침',
      path: '/xi/video-privacy'
    }
  ];

  return (
    <footer className="xi-mobile-footer">
      <div className="footer-links">
        {footerLinks.map((link, index) => (
          <Link 
            key={index} 
            to={link.path} 
            className="footer-link"
          >
            {link.title}
          </Link>
        ))}
      </div>
      <div className="footer-info">
        <p className="address">서울특별시 중문구 중문33그랑시올 등록번호 : 104-81-18121</p>
        <p className="copyright">Copyright © 2017 Xi. ALL RIGHTS RESERVED.</p>
      </div>
    </footer>
  );
};

export default XiMobileFooter; 