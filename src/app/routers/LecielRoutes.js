import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LecielHome from '../../pages/Leciel/home/LecielHome';
import LecielHeader from '../../widgets/Leciel/Header/LecielHeader';

import ReservationPage from '../../pages/Leciel/itemPages/reservation/ReservationPage';
import Overview from '../../pages/Leciel/itemPages/overview/overview';
import Location from '../../pages/Leciel/itemPages/location/location';


const LecielRoutes = () => {
  return (
    <div>
      <LecielHeader/>
      <Routes>
        <Route path="/" element={<LecielHome />} />
        <Route path="/overview" element={<Overview />} />
        <Route path="/location" element={<Location />} />
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