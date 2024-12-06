import React from "react";
import OverviewImage from "../../../../shared/asset/Leciel/overview.jpg";
import ServiceImege from "../../../../shared/asset/Leciel/sub02-2-1.jpg";
import ServiceImege2 from "../../../../shared/asset/Leciel/sub02-2-2.jpg";
import SystemImege from "../../../../shared/asset/Leciel/sub02-3-1.jpg";
import SystemImege2 from "../../../../shared/asset/Leciel/sub02-3-2.jpg";
import LecielFooter from "../../../../widgets/Leciel/Footer/LecielFooter";
import "./Service.scss";

const Service = () => {
  const topPage = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="container">
      <div className="wrap">

        <div className="banner">
          <div className="imgBox">
            <img src={OverviewImage} alt="사업 개요 배너 이미지" />
            <div className="textBox1">
              <h2>Premium</h2>
              <h4>프리미엄</h4>
            </div>
          </div>
        </div>

        <div className="textBox2">
          <p2>Concierge Service</p2>
          <h4>바쁜 일상을 살아가는 입주민을 위한 맞춤서비스</h4>
          <p>컨시어지 서비스</p>
          <h1>세탁, 청소대행 등 입주민의 편리한 생활을 위해 운영되는 전문 컨시어지서비스로 주거생활의 새로운 패러다임을 선사합니다.</h1>
        </div>

        <div className="contentBox">
          <div className="content_Ani">
            <img src={ServiceImege} alt="서비스 이미지"/>
            <img src={ServiceImege2} alt="서비스 이미지2"/>
          </div>
        </div>

        <div className="textBox3">
          <p2>Smart System20</p2>
          <h4>앞선 기술력으로 완성한</h4>
          <p>트렌디한 스마트 시스템</p>
          <h1>스마트 시스템은 안전하고 편리하게 최첨단 생활을 누리는 미래형 단지를 완성합니다.</h1>
        </div>

        <div className="contentBox">
          <div className="content_Ani">
            <img src={SystemImege} alt="시스템 이미지"/>
            <img src={SystemImege2} alt="시스템 이미지2"/>
          </div>
        </div>
      </div>

      <div className="section fp-auto-height">
        <LecielFooter />
      </div>
    </div>
  );
};

export default Service;
