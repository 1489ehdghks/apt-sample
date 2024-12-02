import React from 'react';
import XiBusinessPicture from '../../../shared/asset/Xi/businessInfo1.jpg'
import './XiBusinessOverview.scss';

const XiBusinessOverview = () => {
  return (
    <div className="business-overview">
      <h1 className="title">사업개요</h1>
      
      <div className="main-image-container">
        <img src={XiBusinessPicture} alt="평촌자이 퍼스니티 조감도" className="main-image" />
        <div className="thumbnail-container">
          <img src={XiBusinessPicture} alt="썸네일" className="thumbnail active" />
        </div>
      </div>

      <table className="info-table">
        <tbody>
          <tr>
            <th>사업명</th>
            <td>평촌자이 퍼스니티</td>
          </tr>
          <tr>
            <th>대지위치</th>
            <td>경기도 안양시 동안구 비산3동 354-10번지 일원</td>
          </tr>
          <tr>
            <th>연면적</th>
            <td>480,892.6114㎡</td>
          </tr>
          <tr>
            <th>주택형</th>
            <td>전용 53㎡ / 59㎡ / 77㎡ / 84㎡ / 99㎡/ 109㎡</td>
          </tr>
          <tr>
            <th>공급규모</th>
            <td>총 2,737세대 중 일반분양 570세대</td>
          </tr>
          <tr>
            <th>분양물 용도</th>
            <td>공동주택(아파트) 및 부대복리시설</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default XiBusinessOverview;