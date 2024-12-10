import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LecielHome from '../../pages/Leciel/home/LecielHome';
import LecielHeader from '../../widgets/Leciel/Header/LecielHeader';

const HillstateRoutes = () => {
  return (
    <div>
      <LecielHeader/>
      <Routes>
        <Route path="/" element={<LecielHome />} />
      </Routes>
    </div>

  );
};

export default HillstateRoutes;