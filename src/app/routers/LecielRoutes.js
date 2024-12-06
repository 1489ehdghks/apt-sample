import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LecielHome from '../../pages/Leciel/home/LecielHome';
import LecielHeader from '../../widgets/Leciel/Header/LecielHeader';
import ReservationPage from '../../pages/Leciel/itemPages/reservation/ReservationPage';
import Overview from '../../pages/Leciel/itemPages/overview/overview';
import Location from '../../pages/Leciel/itemPages/location/location';
import Service from '../../pages/Leciel/itemPages/premium/Service';
import PremiumCommunity from '../../pages/Leciel/itemPages/premium/PremiumCommunity';
import APTlayout from '../../pages/Leciel/itemPages/COMPLEX/APTlayout';
import APTplans from '../../pages/Leciel/itemPages/COMPLEX/APTplans';
import PromoVideo from '../../pages/Leciel/itemPages/promovideo/promovideo';

const LecielRoutes = () => {
  return (
    <div>
      <LecielHeader/>
      <Routes>
        <Route path="/" element={<LecielHome />} />
        <Route path="/overview" element={<Overview />} />
        <Route path="/location" element={<Location />} />
        <Route path="/service" element={<Service />} />
        <Route path="/premiumcommunity" element={<PremiumCommunity />} />
        <Route path="/APTlayout" element={<APTlayout />} />
        <Route path="/APTplans" element={<APTplans />} />
        <Route path="/promovideo" element={<PromoVideo />} />
        <Route path="/reservation" element={<ReservationPage />} />
      </Routes>
    </div>

  );
};

export default LecielRoutes;