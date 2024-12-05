import React from 'react';
import './ClubXian1.scss';
import ClubXianNotice from '../../../widgets/Xi/component/ClubXianNotice';
import 클럽자이안1 from '../../../shared/asset/Xi/클럽자이안1.jpg';

const ClubXian1 = () => {
  const notices = [
    'CLUB XIAN의 이미지는 실제와 차이가 있습니다.',
    'CLUB XIAN 내 가구 및 운동기구의 수량 및 배치는 실제와 차이가 있을 수 있으며, 기타 집기류는 별도 제공되지 않습니다.',
    'CLUB XIAN(피트니스클럽, GX룸, 골프연습장, 작은도서관, 라운지 등), 부속동(아너스클럽 등) 및 일부 공용부(지하주차장 및 아파트 PIT)에는 입주지정기간을 전후하여 입주지원센터가 설치되어 입주관리업무를 진행하며, 입주 후 약 27개월까지 AS업무를 위한 사무실 및 창고가 설치되어 운영됩니다.',
    'CLUB XIAN 내 운동기구는 준공 후 입주지정기간이 종료된 이후 설치될 수도 있습니다.',
    '커뮤니티 시설 등의 부대시설의 성능개선 또는 인·허가 협의결과에 따라 실 시공 시 위치, 동선, 실내구획, 입면 디자인, 마감재, 골조 사이즈 및 위치 등이 일부 변경될 수 있으며, 설계변경이 진행될 예정입니다.',
    '상기 CG는 소비자의 이해를 돕기 위해 제작된 것으로 실제와 차이가 있을 수 있으며, CLUB XIAN 이미지에는 스케일이 미반영되었습니다.'
  ];

  return (
    <div className="club-xian1">
      <div className="main-content">
        <div className="image-section">
          <img src={클럽자이안1} alt="클럽자이안 1단지" />
        </div>
      </div>
      <ClubXianNotice notices={notices} />
    </div>
  );
};

export default ClubXian1;