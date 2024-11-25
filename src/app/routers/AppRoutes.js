import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LecielRoutes from './LecielRoutes';

const AppRoutes = () => {
  return (

      <Routes>
        {/* 메인 랜딩 페이지 */}
        {/* 로그인으로 다른 어드민 페이지 이동 */}
        {/* <Route path="/" element={<Admin />} /> */}


        {/* 르씨엘 라우트 */}
        <Route path="/leciel/*" element={<LecielRoutes />} />
      </Routes>

  );
};

export default AppRoutes;