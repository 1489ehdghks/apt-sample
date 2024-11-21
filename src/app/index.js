import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from '@shared/lib/reportWebVitals';
import App from '@app/App';
import { withProviders } from './providers';
import '@shared/styles/index.css';
import 'antd/dist/reset.css';
import 'react-toastify/dist/ReactToastify.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    {withProviders(() => <App />)()}
  </React.StrictMode>
);

reportWebVitals();