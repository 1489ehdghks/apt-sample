import React from 'react';
import { Routes, Route } from 'react-router-dom';
import XiHome from '../../pages/Xi/XiHome';
import XiHeader from '../../widgets/Xi/Header/XiHeader';


const XiRoutes = () => {
  return (
    <div>
      <XiHeader/>
      <Routes>
        <Route path="/" element={<XiHome />} />
        {/*
        <Route path="about" element={<LecielAbout />} />
        <Route path="location" element={<LecielLocation />} />
        <Route path="data" element={<LecielData/>} />
        */}
      </Routes>
    </div>

  );
};

export default XiRoutes;