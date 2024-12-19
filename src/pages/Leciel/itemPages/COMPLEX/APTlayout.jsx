import React from "react";
import Banner from '../../../../widgets/Leciel/component/Banner';
import APTlayoutImage from "../../../../shared/asset/Leciel/sub02-4-1.jpg";
import LecielFooter from "../../../../widgets/Leciel/Footer/LecielFooter";
import Notice from '../../../../widgets/Leciel/component/Notice';
import "./APTlayout.scss";

const APTlayout = () => {
  const notices = [
    '',
    '본 홈페이지의 내용은 소비자의 이해를 돕기 위한 것으로 실제와 다를 수 있습니다.',
    '본 홈페이지에 사용된 CG, 이미지 및 영상은 소비자의 이해를 돕기 위해 제작된 것으로 실제와 차이가 있을 수 있습니다.'
  ];

  return (
    <div className="layout-container">
      <div className="wrap">

      <Banner title="COMPLEX" subtitle="단지안내"/>

        <div className="textBox2">
          <p2>동호수배치도</p2>
          <h4>감각적인 디자인을 더한</h4>
          <p>혁신 설계</p>
          <h1>입주민의 자부심을 위해 감각적으로 설계된 천안역 태왕이너스 르씨엘에서는 매일이 행복이고 매일이 힐링입니다.</h1>
        </div>

        <div className="contentBox">
            <img src={APTlayoutImage} alt="동호수 배치도 이미지"/>
            <Notice notices={notices} />
        </div>
        
      </div>
        <LecielFooter />
    </div>
  );
};

export default APTlayout;
