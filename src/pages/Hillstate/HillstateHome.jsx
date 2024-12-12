import React from 'react';
import './HillstateHome.scss';

const HillstateHome = () => {
  return (
    <div className="HillstateHome">
      <div className="banner">
        <div className="imgBox">
          <img src="path/to/your/banner-image.jpg" alt="Banner" />
          <div className="textBox1">
            <h2>힐스테이트에 오신 것을 환영합니다</h2>
            <h4>당신의 새로운 시작을 함께합니다</h4>
          </div>
        </div>
      </div>

      <div className="textBox2">
        <p2>힐스테이트의 특별함</p2>
        <h4>최고의 품질과 서비스</h4>
        <p>힐스테이트는 고객의 만족을 최우선으로 생각합니다. 최고의 품질과 서비스를 제공하기 위해 항상 노력하고 있습니다.</p>
      </div>

      <div className="contentBox">
        <div className="cardBox">
          <div className="card">
            <h4>프리미엄 디자인</h4>
            <p>힐스테이트는 세련된 디자인과 고급스러운 인테리어를 제공합니다.</p>
          </div>
          <div className="card">
            <h4>안전한 환경</h4>
            <p>최첨단 보안 시스템으로 안전한 생활 환경을 보장합니다.</p>
          </div>
          <div className="card">
            <h4>편리한 위치</h4>
            <p>도심과 가까운 위치로 편리한 생활을 제공합니다.</p>
          </div>
        </div>
      </div>

      <div className="content_Ani">
        <div className="textBox_Ani">
          <h4>힐스테이트의 가치</h4>
          <h2>당신의 <span>삶</span>을 변화시킵니다</h2>
          <p>힐스테이트는 고객의 삶을 더욱 풍요롭게 만들기 위해 끊임없이 발전하고 있습니다.</p>
        </div>
      </div>
    </div>
  );
};

export default HillstateHome;