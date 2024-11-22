import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Header } from '../widgets/Header/Header';
import { Spin } from 'antd';
import { useScrollToTop } from '../shared/hooks/useScrollToTop'

const HomePage = React.lazy(() => import('pages/homePage/HomePage'));
const AboutPage = React.lazy(() => import('pages/about/AboutPage'));
const ContactPage = React.lazy(() => import('pages/contact/ContactPage'));

const App = () => {
  useScrollToTop();
  return (
    <>
<Header/>
      <Suspense
        fallback={
          <div className="flex items-center justify-center h-screen">
            <Spin size="large" />
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route
            path="*"
            element={
              <div className="flex items-center justify-center h-screen">
                <h1>404 - 페이지를 찾을 수 없습니다</h1>
              </div>
            }
          />
        </Routes>
      </Suspense>

    </>
  );
};

export default App;