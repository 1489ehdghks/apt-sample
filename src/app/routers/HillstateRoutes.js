import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HillstateHeader from '../../widgets/Hillstate/HillstateHeader';
import HillstateHome from '../../pages/Hillstate/HillstateHome';
const HillstateRoutes = () => {
  return (
    <div>
      <HillstateHeader/>
      <Routes>
        <Route path="/" element={<HillstateHome />} />
      </Routes>
    </div>

  );
};

export default HillstateRoutes;