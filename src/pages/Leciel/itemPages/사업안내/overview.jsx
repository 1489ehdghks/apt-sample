import React from "react";
import OverviewImage from "../../../../shared/asset/Leciel/overview.jpg";
import OverviewImage2 from "../../../../shared/asset/Leciel/sub01-1.jpg";
import BrandImage from "../../../../shared/asset/Leciel/sub01-2-2.png";
import BrandImage2 from "../../../../shared/asset/Leciel/sub01-2-1.jpg";
import "./overview.scss";

const Overview = () => {

  return (
    <div className="container">
      <div className="wrap">

        <div className="banner">
          <div className="imgBox">
            <img src={OverviewImage} alt="사업 개요 배너 이미지" />
            <div className="textBox1">
              <h2>ABOUT</h2>
              <h4>사업안내</h4>
            </div>
          </div>
        </div>

        <div className="textBox2">
          <p2>사업개요</p2>
          <h4>천안의 자부심</h4>
          <p>그 이상의 트랜드마크가 된다!</p>
        </div>

        {/* 사업 세부 정보 섹션 */}
        <div className="contentBox">
          <img src={OverviewImage2} alt="사업 정보 이미지"/>
          <div className="cardBox">
            <div className="card">
              <h4>위치</h4>
              <p>천안시 동남구 영성동 54-3번지 일원</p>
            </div>
            <div className="card">
              <h4>규모</h4>
              <p>
                지하 6층 ~ 지상 48층 3개동,
                <br />
                공동주택(아파트), 오피스텔 및 부대 복리시설과 주차장
              </p>
            </div>
            <div className="card">
              <h4>용도</h4>
              <p>공동주택 및 부대·복리시설, 업무시설(오피스텔), 근린생활시설</p>
            </div>
            <div className="card">
              <h4>타입</h4>
              <p>
                84A(123세대), 84B(33세대), 84C(41세대), 84D(119세대), 84E(41세대),
                84F(38세대), 84G(37세대),
                <br />
                59A1-오피스텔(23세대), 59A2-오피스텔(23세대)
              </p>
            </div>
          </div>

          <div className="textBox3">
            <p2>브랜드</p2>
            <h4>최고의 라이프를 꿈꾸며, 앞서가는 주거문화 향상에 기여하는 태왕</h4>
            <p>태왕E&C!</p>
          </div>


          <div className="content_Ani">
            <img src={BrandImage2} alt="브랜드 배경이미지" className="backgroundImage" />
            <div className="textBox_Ani">
              <h4>보다 나은 미래를 만들어가는</h4>
              <h2><span>태왕</span>의 마음</h2>
              <p>
                사람을 위한 최고의 공간, 자연을 위해 올바른 기술, 미래를 위한 혁신적 가치
                <br />태왕은 한번 더 생각하고 한번 더 고민합니다.
                <br />아이들의 미래를 더 크고 밝게 키워나가는 일, 태왕의 마음이 합니다.
              </p>
            </div>
            <img src={BrandImage} alt="브랜드 이미지" className="foregroundImage" />
          </div>



          <div className="content">
            <p>※ 본 홈페이지의 내용은 소비자의 이해를 돕기 위한 것으로 실제와 다를 수 있습니다.</p>
            <p>
              ※ 본 홈페이지에 사용된 CG, 이미지 및 영상은 소비자의 이해를 돕기 위해 제작된
              것으로 실제와 차이가 있을 수 있습니다.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
