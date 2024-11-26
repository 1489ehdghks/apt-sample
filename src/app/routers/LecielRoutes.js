import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LecielHome from '../../pages/Leciel/home/LecielHome';
import LecielHeader from '../../widgets/Leciel/Header/LecielHeader';

const LecielRoutes = () => {
  return (
    <div>
      <LecielHeader/>
      <Routes>
        <Route path="/" element={<LecielHome />} />
        {/* <Route path="about" element={<LecielAbout />} />
        <Route path="location" element={<LecielLocation />} /> */}
      </Routes>
    </div>

  );
};

export default LecielRoutes;