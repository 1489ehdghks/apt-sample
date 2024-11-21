import React from 'react';
import { Header } from '../Header/Header';
import './Layout.scss';

export const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Header />
      <main className="main">
        {children}
      </main>
    </div>
  );
};
