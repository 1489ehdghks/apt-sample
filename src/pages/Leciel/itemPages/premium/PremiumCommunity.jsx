import React, { useState } from "react";
import OverviewImage from "../../../../shared/asset/Leciel/overview.jpg"; // 배너 이미지
import CommunityImege from "../../../../shared/asset/Leciel/sub02-1-1.jpg";
import CommunityImege_6_0 from "../../../../shared/asset/Leciel/sub04-6-0.jpg";
import CommunityImege_6_1 from "../../../../shared/asset/Leciel/sub04-6-1.jpg";
import CommunityImege_6_2 from "../../../../shared/asset/Leciel/sub04-6-2.jpg";
import CommunityImege_6_3 from "../../../../shared/asset/Leciel/sub04-6-3.jpg";
import CommunityImege_5_0 from "../../../../shared/asset/Leciel/sub04-5-0.jpg";
import CommunityImege_5_1 from "../../../../shared/asset/Leciel/sub04-5-1.png";
import CommunityImege_5_2 from "../../../../shared/asset/Leciel/sub04-5-2.png";
import CommunityImege_4_0 from "../../../../shared/asset/Leciel/sub04-4-0.jpg";
import CommunityImege_4_1 from "../../../../shared/asset/Leciel/sub04-4-1.png";
import CommunityImege_4_2 from "../../../../shared/asset/Leciel/sub04-4-2.png";
import CommunityImege_1_0 from "../../../../shared/asset/Leciel/sub04-1-0.jpg";
import CommunityImege_1_1 from "../../../../shared/asset/Leciel/sub04-1-1.png";
import CommunityImege_1_2 from "../../../../shared/asset/Leciel/sub04-1-2.png";
import "./PremiumCommunity.scss";

const PremiumCommunity = () => {
  const [activeIndex, setActiveIndex] = useState(1); // 현재 활성화된 인덱스

  // 각 층별 이미지 데이터
  const floors = {
    1: [CommunityImege_6_0, CommunityImege_6_1, CommunityImege_6_2, CommunityImege_6_3],
    2: [CommunityImege_5_0, CommunityImege_5_1, CommunityImege_5_2],
    3: [CommunityImege_4_0, CommunityImege_4_1, CommunityImege_4_2],
    4: [CommunityImege_1_0, CommunityImege_1_1, CommunityImege_1_2],
  };

  // 버튼 클릭 핸들러
  const handleButtonClick = (index) => {
    setActiveIndex(index); // 활성화된 층 변경
  };

  return (
    <div className="container">
      <div className="wrap">
        {/* 배너 */}
        <div className="banner">
          <div className="imgBox">
            <img src={OverviewImage} alt="사업 개요 배너 이미지" />
            <div className="textBox1">
              <h2>Premium</h2>
              <h4>프리미엄</h4>
            </div>
          </div>
        </div>

        {/* 텍스트 섹션 */}
        <div className="textBox2">
          <p>Premium Community</p>
          <h4>브랜드의 차이가 만드는 고품격 라이프스타일</h4>
          <p>프리미엄 커뮤니티</p>
          <h1>단지 내에서 모두 누리는 커뮤니티 공간은 평범한 일상 위에 특별한 경험을 더한 힐링 라이프를 선사합니다.</h1>
        </div>

        {/* 커뮤니티 콘텐츠 */}
        <div className="contentBox">
          <div className="imgBox">
            <img src={CommunityImege} alt="커뮤니티 이미지" />
          </div>

          <div className="content">
            <div className="btnBox">
              {[1, 2, 3, 4].map((index) => (
                <button
                  key={index}
                  className={`btn${index} ${activeIndex === index ? "on" : ""}`}
                  onClick={() => handleButtonClick(index)}
                >
                  <p>{index === 1 ? "6F" : index === 2 ? "5F" : index === 3 ? "4F, 3F, 2F" : "1F"}</p>
                </button>
              ))}
            </div>
            <div className="contentimgBox">
              {(floors[activeIndex] || []).map((img, idx) => (
                <div className="imgBox" key={idx}>
                  <img src={img} alt={`CommunityImege ${activeIndex}-${idx}`} />
                </div>
              ))}
              </div>
            </div>
        </div>

        {/* 안내 텍스트 */}
        <div className="textBox">
          <p>※ 본 홈페이지의 내용은 소비자의 이해를 돕기 위한 것으로 실제와 다를 수 있습니다.</p>
          <p>
            ※ 본 홈페이지에 사용된 CG, 이미지 및 영상은 소비자의 이해를 돕기 위해 제작된
            것으로 실제와 차이가 있을 수 있습니다.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PremiumCommunity;
