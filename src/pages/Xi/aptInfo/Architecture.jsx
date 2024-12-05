import React from 'react';
import './Architecture.scss';
import ClubXianNotice from '../../../widgets/Xi/component/ClubXianNotice';
import 단지설계1 from '../../../shared/asset/Xi/단지설계1.jpg';

const Architecture = () => {
  const notices = [
    '',
    '본 홈페이지의 이미지는 소비자의 이해를 돕기 위한 것으로 실제와 차이가 있을 수 있으며, 건축물의 옥탑부, 주동 형태, 저층 마감, 문주, 창호 형태 및 크기, 줄눈, 측벽 디자인, 태양광 집광판, 외부 색채, 난간 색상, 벽체 마감, 주민공동시설 외관, 외부 로고, 세부 식재, 포장 계획, 옹벽의 위치 및 선형, 디자인 등은 변경될 수 있습니다. 또한 단지를 제외한 기타시설(개발계획, 주변 건물 현황, 산, 조명, 외부 식재 등)은 소비자의 이해를 돕기 위한 것으로 실제와 차이가 있을 수 있으니 견본주택 및 현장을 직접 방문하여 확인하시기 바랍니다.',
    '단지 출입구 문주 주변 옹벽은 상기 이미지 및 견본주택 모형과 달리 인·허가 조건, 설계변경, 미관, 구조물 안전성 등을 고려하여 위치 및 선형, 디자인 등은 변경될 수 있습니다.',
    '아파트 저층부는 외장타일, 석재 등 자재로 마감되고, 주동 형태에 따라 적용 비율은 각 동별로 상이할 수 있으며, 인·허가 및 현장 여건에 의해 조정될 수 있습니다.',
    '상기 이미지는 확장형 단위세대 및 외부창호 설치 기준으로 제작된 것입니다.',
    '단지 인근 산지 일대에 일부 분묘가 위치하고 있어 조망을 저해할 수 있으므로 현장을 확인하신 후 계약을 체결하시기 바랍니다.',
    '단지 주변 아파트, 건물 등은 실제 높이 및 배치와 차이가 있을 수 있으니 견본주택 및 현장을 직접 방문하여 확인하시기 바랍니다.'
  ];

  return (
    <div className="architecture">
      <div className="main-content">
        <div className="image-section">
          <img src={단지설계1} alt="클럽클라우드1" />
        </div>
      </div>
      <ClubXianNotice notices={notices} />
    </div>
  );
};

export default Architecture;