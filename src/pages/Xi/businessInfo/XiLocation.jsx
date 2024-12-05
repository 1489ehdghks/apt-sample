import React from 'react';
import XilocationPic from '../../../shared/asset/Xi/입지환경1.jpg'
import './XiLocation.scss';

const XiLocation = () => {
  return (
    <div className="location-info">
      <h1 className="title">입지환경</h1>
      
      <div className="map-container">
        <img src={XilocationPic} alt="평촌자이 퍼스니티 위치도" className="main-map" />
      </div>

      <div className="description-box">
        <div className="transport-info">
          <h3>광역 교통망</h3>
          <ul>
            <li>GTX-C선(예정) : 국토교통부고시 제2024-483호</li>
            <li>월곶-판교 복선전철(예정) : 국토교통부고시 제2024-168호</li>
            <li>인덕원-동탄선(예정) : 국토교통부고시 제2024-404호</li>
            <li>안양매송 공공주택사업구역 : 국토교통부고시 제2023-780호</li>
            <li>효림운동장 특정 일반 재개발사업(예정) : 안양시고시 제2022-104호</li>
            <li>효림운동장 특정 일반 재개발사업(예정) : 안양시고시 제2022-201호</li>
          </ul>
        </div>

        <div className="notice">
          <p>※ 본 홈페이지에 위치도는 뒷 이미지는 소비자의 이해를 돕기 위한 것으로 실제와 상이할 수 있습니다.</p>
          <p>※ 본 홈페이지에 현황 및 개발 계획은 관계 기관의 홈페이지(국토교통부 http://www.molit.go.kr) 등을 참조하여 작성된 것으로 사업계획 및 일정은 변사하는 주변하여, 추후 변경될 수 있습니다.</p>
        </div>
      </div>
    </div>
  );
};

export default XiLocation;