import React from 'react';
import './ComplexLayout.scss';
import TabImage from '../../../widgets/Xi/component/TabImage';
import 단지배치도1 from '../../../shared/asset/Xi/1단지배치도.jpg';
import 단지배치도2 from '../../../shared/asset/Xi/2단지배치도.jpg';

const ComplexLayout = () => {
  const tabData = [
    {
      id: '1단지',
      label: '1단지',
      image: 단지배치도1,
      alt: '1단지 동호수배치도'
    },
    {
      id: '2단지',
      label: '2단지',
      image: 단지배치도2,
      alt: '2단지 동호수배치도'
    }
  ];

  return (
    <div className="site-plan">
      <TabImage 
        title="동·호수배치도" 
        tabData={tabData} 
      />
    </div>
  );
};

export default ComplexLayout;