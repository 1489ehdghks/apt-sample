import React from 'react';
import { Routes, Route } from 'react-router-dom';
import XiHome from '../../pages/Xi/home/XiHome';
import XiBusinessOverview from '../../pages/Xi/businessInfo/XibusinessOverview';
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
        <Route path="/사업개요" element={<XiBusinessOverview />} />
        {/* <Route path="location" element={<LecielLocation />} />
        <Route path="data" element={<LecielData/>} /> */}
        
      </Routes>
      </div>
      <XiFooter/>
    </div>

  );
};

export default XiRoutes;