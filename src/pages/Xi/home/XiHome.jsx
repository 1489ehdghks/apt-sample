import React from 'react';
import { useMediaQuery } from 'react-responsive';
import XiDesktopHome from './XiDesktopHome';
import XiMobileHome from './XiMobileHome';

const XiHome = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  return isMobile ? <XiMobileHome /> : <XiDesktopHome />;
};

export default XiHome;