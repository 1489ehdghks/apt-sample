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
     subItems: ['프리미엄','클럽자이안 1단지','클럽자이안 2단지','클럽클라우드','단지설계','단지배치도','SYSTEM','이동통신설비 협의결과서']
   },
   {
     title: '세대안내',
     subItems: ['기본제공품목','평면정보','E-모델하우스','마감재리스트','항공VR']
   },
   {
     title: '청약안내',
     subItems: ['청약체크포인트','일반공급','특별공급','인터넷 청약안내']
   },
   {
     title: '분양안내',
     subItems: ['분양일정','입주자 모집공고','인지세 납부안내문']
   },
   {
     title: '홍보센터',
     subItems: ['자이TV','언론보도','청약이벤트']
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
