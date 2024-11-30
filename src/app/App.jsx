import React, { Suspense } from 'react';
import { Spin } from 'antd';
import { useScrollToTop } from '../shared/hooks/useScrollToTop'
import AppRoutes from './routers/AppRoutes';

const App = () => {
  useScrollToTop();
  return (
    <>
        <Suspense
        fallback={
          <div className="flex items-center justify-center h-screen">
            <Spin size="large" />
          </div>
        }
      >
        <AppRoutes/>
      </Suspense>

    </>
  );
};

export default App;