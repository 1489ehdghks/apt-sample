import React from 'react';
import './마감재리스트.scss';
import TabImage from '../../../widgets/Xi/component/TabImage';
import 설비 from '../../../shared/asset/Xi/마감재리스트-설비.jpg';
import 인테리어 from '../../../shared/asset/Xi/마감재리스트-인테리어.jpg';
import 전기 from '../../../shared/asset/Xi/마감재리스트-전기.jpg';

const 마감재리스트 = () => {
  const tabData = [
    {
      id: '설비',
      label: '설비',
      image: 설비,
      alt: '설비'
    },
    {
      id: '인테리어',
      label: '인테리어',
      image: 인테리어,
      alt: '인테리어'
    },
    {
      id: '전기',
      label: '전기',
      image: 전기,
      alt: '전기'
    }
  ];

  return (
    <div className="마감재리스트">
      <TabImage 
        title="마감재리스트" 
        tabData={tabData}
      />
    </div>
  );
};


export default 마감재리스트;