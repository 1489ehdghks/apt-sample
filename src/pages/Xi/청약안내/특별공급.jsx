import React from 'react';
import './특별공급.scss';
import TabImage from '../../../widgets/Xi/component/TabImage';
import 기관추천 from '../../../shared/asset/Xi/기관추천특별공급.jpg';
import 다자녀 from '../../../shared/asset/Xi/다자녀가구특별공급.jpg';
import 신혼부부 from '../../../shared/asset/Xi/신혼부부특별공급.jpg';
import 생애최초 from '../../../shared/asset/Xi/생애최초특별공급.jpg';
import 노부모부양 from '../../../shared/asset/Xi/노부모부양특별공급.jpg';

const 특별공급 = () => {
  const tabData = [
    {
      id: '기관추천',
      label: '기관추천 특별공급',
      image: 기관추천,
      alt: '기관추천'
    },
    {
      id: '다자녀',
      label: '다자녀가구 특별공급',
      image: 다자녀,
      alt: '다자녀'
    },
    {
      id: '신혼부부',
      label: '신혼부부 특별공급',
      image: 신혼부부,
      alt: '신혼부부'
    },
    {
      id: '생애최초',
      label: '생애최초 특별공급',
      image: 생애최초,
      alt: '생애최초'
    },
    {
      id: '노부모부양',
      label: '노부모부양 특별공급',
      image: 노부모부양,
      alt: '노부모부양'
    }
  ];

  return (
    <div className="특별공급">
      <TabImage 
        title="특별공급" 
        tabData={tabData}
      />
    </div>
  );
};


export default 특별공급;
