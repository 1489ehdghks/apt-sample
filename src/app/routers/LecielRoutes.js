import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LecielHome from '../../pages/Leciel/home/LecielHome';
import LecielHeader from '../../widgets/Leciel/Header/LecielHeader';
import ReservationPage from '../../pages/reservation/ReservationPage';

const LecielRoutes = () => {
  return (
    <div>
      <LecielHeader/>
      <Routes>
        <Route path="/" element={<LecielHome />} />
        <Route path="/reservation" element={<ReservationPage />} />
        {/*
        <Route path="about" element={<LecielAbout />} />
        <Route path="location" element={<LecielLocation />} />
        <Route path="data" element={<LecielData/>} />
        */}
      </Routes>
    </div>

  );
};

export default LecielRoutes;