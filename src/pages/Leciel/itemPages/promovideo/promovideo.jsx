import React from "react";
import OverviewImage from "../../../../shared/asset/Leciel/overview.jpg";
import "./promovideo.scss";

const PromoVideo = () => {

  return (
    <div className="container">
      <div className="wrap">

        <div className="banner">
          <div className="imgBox">
            <img src={OverviewImage} alt="사업 개요 배너 이미지" />
            <div className="textBox1">
              <h2>PR</h2>
            </div>
          </div>
        </div>

        <div className="textBox2">
          <p>홍보영상</p>
        </div>

        <div class="videotBox">
            <div class="contentBox">
                <div class="content_Div content_Div1 on">
                    <iframe src="https://www.youtube.com/embed/PLYtGEys0X8?si=Y9cgyxJWflrvvCsa" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
                <div class="content">
                    <p>※ 상기 영상은 소비자의 이해를 돕기 위해 제작된 것으로 실제와 차이가 있습니다.</p>
                    <p>※ 소비자의 이해를 돕기 위해 연출된 장면이 포함되어 있으며, 어메니티(주민공동시설)의 내부 구조, 형태, 구성 등의 계획은 실 시공 시 현장여건에 따라 일부 변경될 수 있습니다.</p>
                    <p>※ 주민공동시설의 각 실별 명칭은 변경될 수 있습니다.</p>
                    <p>※ 주민공동시설은 집기류를 제외한 기본 마감만 제공되고 마감재 및 제공 품목, 동선 계획 등은 인허가나 실제 시공 시 현장 여건에 따라 일부 변경될 수 있습니다.</p>
                    <p>※ 주민공동시설의 사용과 운영방안에 대해서는 입주 후 관리사무소 및 입주자대표회의에서 결정하여 운영됩니다.</p>
                    <p>※ 사용검사 때와 달리 입주 후 교통량 증가 등 주변여건 변화로 소음이 심화될 경우에는 행정청, 사업주체 및 시공사에 이의제기 및 보상 요구를 할 수 없으므로 소음에 대한 내용을 반드시 숙지하시고 분양 계약을 하시기 바랍니다.</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default PromoVideo;
