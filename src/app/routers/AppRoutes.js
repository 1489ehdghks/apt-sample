import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LecielRoutes from './LecielRoutes';
import XiRoutes from './XiRoutes';
import AdminPage from '../../pages/admin/AdminPage';
const AppRoutes = () => {
  return (

      <Routes>
        {/* 어드민 페이지 */}
      <Route path="/" element={<AdminPage />} />

        {/* 르씨엘 라우트 */}
        <Route path="/leciel/*" element={<LecielRoutes />} />

        {/* 자이 라우트 */}
        <Route path="/xi/*" element={<XiRoutes />} />        
      </Routes>

  );
};

export default AppRoutes;