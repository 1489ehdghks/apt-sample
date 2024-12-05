import React from 'react';
import './ClubCloud.scss';
import ClubXianNotice from '../../../widgets/Xi/component/ClubXianNotice';
import 클럽클라우드1 from '../../../shared/asset/Xi/클럽클라우드1.jpg';

const ClubCloud = () => {
  const notices = [
    'CLUB XIAN의 이미지는 실제와 차이가 있습니다.',
    '상기 CLUB CLOUD 이미지에는 스케일이 미반영되었습니다.',
    '103동, 207동의 최상층에는 CLUB CLOUD(스카이라운지)가 계획되어 있어, 인접동 및 하부세대는 CLUB CLOUD 내부조명 및 외부경관조명으로 인한 빛의 산란이나, 설비의 가동으로 인한 소음 및 진동 등의 생활불편이 발생할 수 있습니다. 또한 CLUB CLOUD의 이용자들로 인하여 인접동 및 하부세대에서는 소음피해, 사생활 침해 등이 있을 수 있습니다.',
    '103동, 207동 입주민의 사생활 보호를 위하여 CLUB CLOUD 전용 엘리베이터 출입구는 분리되어 설치되나, 비상 시에는 엘리베이터 홀의 비상문(설치 위치는 층별로 상이함)을 통해 피난 및 구조활동이 이루어집니다. 103동, 207동 입주민을 위한 엘리베이터는 소방구조활동시에만 CLUB CLOUD층(103동 28층. 207동 24층)에 정지하며, 평상시에는 CLUB CLOUD로 운행하지 않으므로 CLUB CLOUD 이용 시에는 1층에 설치된 전용 출입구 및 엘리베이터를 이용하여야 합니다.',
    'CLUB CLOUD 내 가구의 수량 및 배치는 실제와 차이가 있을 수 있으며, 기타 집기류 및 도서는 별도 제공되지 않습니다.',
    'CLUB CLOUD의 이미지는 소비자의 이해를 돕기 위한 것으로 향후 인·허가 과정상 변경될 수 있습니다.',
    '커뮤니티 시설 등 부대시설의 성능개선 또는 인·허가 협의결과에 따라 실 시공 시 위치, 동선, 실내구획, 입면 디자인, 마감재, 골조 사이즈 및 위치 등이 일부 변경될 수 있습니다.'
  ];

  return (
    <div className="club-xian1">
      <div className="main-content">
        <div className="image-section">
          <img src={클럽클라우드1} alt="클럽클라우드1" />
        </div>
      </div>
      <ClubXianNotice notices={notices} />
    </div>
  );
};

export default ClubCloud;