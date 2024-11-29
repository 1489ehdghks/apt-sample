import React from 'react';
import { Link } from 'react-router-dom';
import './XiHeader.scss';

const XiHeader = () => {
 const menuItems = [
   {
     title: '사업안내',
     subItems: ['사업개요', '브랜드소개', '입지환경', '오시는길']
   },
   {
     title: '단지안내',
     subItems: []
   },
   {
     title: '세대안내',
     subItems: []
   },
   {
     title: '청약안내',
     subItems: []
   },
   {
     title: '분양안내',
     subItems: []
   },
   {
     title: '홍보센터',
     subItems: []
   },
   {
     title: '관심고객등록',
     subItems: []
   }
 ];

 return (
   <header className="xi-header">
     <div className="header-content">
       {/* 로고 */}
       <Link to="/xi" className="logo">
         평촌자이 퍼스니티
       </Link>

       {/* 네비게이션 메뉴 */}
       <nav className="main-nav">
         {menuItems.map((item, index) => (
           <div key={index} className="menu-item">
             <span className="menu-title">{item.title}</span>
             {item.subItems.length > 0 && (
               <div className="sub-menu">
                 {item.subItems.map((subItem, subIndex) => (
                   <Link 
                     key={subIndex}
                     to={`/xi/${subItem.toLowerCase().replace(/ /g, '-')}`}
                     className="sub-item"
                   >
                     {subItem}
                   </Link>
                 ))}
               </div>
             )}
           </div>
         ))}
       </nav>

       {/* 분양문의 번호 */}
       <div className="contact-number">
         분양문의 <span className="phone">1833-4723</span>
       </div>
     </div>
   </header>
 );
};

export default XiHeader;
