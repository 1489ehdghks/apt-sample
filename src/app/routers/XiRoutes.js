import React from 'react';
import { Routes, Route } from 'react-router-dom';
import XiHome from '../../pages/Xi/home/XiHome';
import XiBusinessOverview from '../../pages/Xi/businessInfo/XibusinessOverview';
import XiLocation from '../../pages/Xi/businessInfo/XiLocation';
import XiRoute from '../../pages/Xi/businessInfo/XiRoute';
import XiPremium from '../../pages/Xi/aptInfo/XiPremium';
import ClubXian1 from '../../pages/Xi/aptInfo/ClubXian1';
import ClubXian2 from '../../pages/Xi/aptInfo/ClubXian2';
import ClubCloud from '../../pages/Xi/aptInfo/ClubCloud';
import Architecture from '../../pages/Xi/aptInfo/Architecture';
import SitePlan from '../../pages/Xi/aptInfo/SitePlan';
import ComplexLayout from '../../pages/Xi/aptInfo/ComplexLayout';
import System from '../../pages/Xi/aptInfo/System';
import XiHeader from '../../widgets/Xi/Header/XiHeader';
import XiFooter from '../../widgets/Xi/Footer/XiFooter';
import 기본제공품목 from '../../pages/Xi/세대안내/기본제공품목';
import 평면정보 from '../../pages/Xi/세대안내/평면정보';
import 마감재리스트 from '../../pages/Xi/세대안내/마감재리스트';
import 일반공급 from '../../pages/Xi/청약안내/일반공급';
import 특별공급 from '../../pages/Xi/청약안내/특별공급';
import 분양일정 from '../../pages/Xi/분양안내/분양일정';
import 입주자모집공고 from '../../pages/Xi/분양안내/입주자모집공고';
import 납부안내문 from '../../pages/Xi/분양안내/납부안내문';
import './XiRoutes.js.scss'


const XiRoutes = () => {
  return (
    <div className="xi-layout">
      <XiHeader/>
      <div className="xi-content">
      <Routes>
        <Route path="/" element={<XiHome />} />

        {/* 사업안내 */}
        <Route path="/사업개요" element={<XiBusinessOverview />} />
        <Route path="/입지환경" element={<XiLocation />}/>
        <Route path="/오시는길" element={<XiRoute />}/>

        {/* 단지안내 */}
        <Route path="/프리미엄" element={<XiPremium />}/>
        <Route path="/클럽자이안-1단지" element={<ClubXian1 />}/>
        <Route path="/클럽자이안-2단지" element={<ClubXian2 />}/>
        <Route path="/클럽클라우드" element={<ClubCloud />}/>
        <Route path="/단지설계" element={<Architecture />}/>
        <Route path="/단지배치도" element={<SitePlan />}/>
        <Route path="/동·호수배치도" element={<ComplexLayout />}/>
        <Route path="/system" element={<System />}/>
        <Route path="/system" element={<System />}/>

        {/* 세대안내 */}
        <Route path="/기본제공품목" element={<기본제공품목 />}/>
        <Route path="/평면정보" element={<평면정보 />}/>
        <Route path="/마감재리스트" element={<마감재리스트 />}/>

        {/* 청약안내 */}
        <Route path="/일반공급" element={<일반공급 />}/>
        <Route path="/특별공급" element={<특별공급 />}/>

        {/* 분양안내 */}
        <Route path="/분양일정" element={<분양일정 />}/>
        <Route path="/입주자-모집공고" element={<입주자모집공고 />}/>
        <Route path="/인지세-납부안내문" element={<납부안내문 />}/>
      </Routes>
      </div>
      <XiFooter/>
    </div>

  );
};

export default XiRoutes;