import React from 'react';
import './평면정보.scss';
import TabImage from '../../../widgets/Xi/component/TabImage';
import 평면도53 from '../../../shared/asset/Xi/평면도53.jpg';
import 평면도59 from '../../../shared/asset/Xi/평면도59.jpg';
import 평면도77A from '../../../shared/asset/Xi/평면도77A.jpg';
import 평면도84A from '../../../shared/asset/Xi/평면도84A.jpg';
import 평면도84B from '../../../shared/asset/Xi/평면도84B.jpg';
import 평면도84C from '../../../shared/asset/Xi/평면도84C.jpg';
import 평면도84D from '../../../shared/asset/Xi/평면도84D.jpg';
import 평면도99 from '../../../shared/asset/Xi/평면도99.jpg';
import 평면도109 from '../../../shared/asset/Xi/평면도109.jpg';

const 평면정보 = () => {


  const tabData = [
    {
      id: '53',
      label: '53',
      image: 평면도53,
      alt: '53㎡ 평면도'
    },
    {
      id: '59',
      label: '59',
      image: 평면도59,
      alt: '59㎡ 평면도'
    },
    {
      id: '77A',
      label: '77A',
      image: 평면도77A,
      alt: '77A㎡ 평면도'
    },
    {
      id: '84A',
      label: '84A',
      image: 평면도84A,
      alt: '84A㎡ 평면도'
    },
    {
      id: '84B',
      label: '84B',
      image: 평면도84B,
      alt: '84B㎡ 평면도'
    },
    {
      id: '84C',
      label: '84C',
      image: 평면도84C,
      alt: '84C㎡ 평면도'
    },
    {
      id: '84D',
      label: '84D',
      image: 평면도84D,
      alt: '84D㎡ 평면도'
    },
    {
      id: '99',
      label: '99',
      image: 평면도99,
      alt: '99㎡ 평면도'
    },
    {
      id: '109',
      label: '109',
      image: 평면도109,
      alt: '109㎡ 평면도'
    }
  ];

  return (
    <div className="평면정보">
      <TabImage 
        title="평면정보" 
        tabData={tabData}
      />
    </div>
  );
};

export default 평면정보;