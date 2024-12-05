import React from 'react';
import './System.scss';
import TabImage from '../../../widgets/Xi/component/TabImage';
import 시스템1 from '../../../shared/asset/Xi/시스템1.jpg';
import 시스템2 from '../../../shared/asset/Xi/시스템2.jpg';
import 시스템3 from '../../../shared/asset/Xi/시스템3.jpg';

const System = () => {
  const tabData = [
    {
      id: '스마트&안전시스템',
      label: '스마트&안전시스템',
      image: 시스템1,
      alt: '스마트&안전시스템'
    },
    {
      id: '에너지 시스템',
      label: '에너지 시스템',
      image: 시스템2,
      alt: '에너지 시스템'
    },
    {
      id: '편의 시스템',
      label: '편의 시스템',
      image: 시스템3,
      alt: '편의 시스템'
    }
  ];

  return (
    <div className="system">
      <TabImage 
         title="SYSTEM"
        tabData={tabData} 
      />
    </div>
  );
};

export default System;