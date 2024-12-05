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

        {/* 세대안내 */}
        <Route path="/기본제공품목" element={<System />}/>

      </Routes>
      </div>
      <XiFooter/>
    </div>

  );
};

export default XiRoutes;