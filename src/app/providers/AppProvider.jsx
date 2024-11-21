import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import { ToastContainer } from 'react-toastify';
import App from '../App';
import 'react-toastify/dist/ReactToastify.css';
import 'antd/dist/reset.css';
import '../../shared/styles/global.scss';

// antd 테마 설정
const antdConfig = {
  theme: {
    token: {
      colorPrimary: '#1890ff',
      borderRadius: 4,
    },
  },
};

export const AppProvider = () => {
  return (
    <BrowserRouter>
      <ConfigProvider {...antdConfig}>
        <App />
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </ConfigProvider>
    </BrowserRouter>
  );
};
