import React, { useState } from "react";
import OverviewImage from "../../../../shared/asset/Leciel/overview.jpg"; // 배너 이미지
import img84A from "../../../../shared/asset/Leciel/84A_fin.jpg";
import img84B from "../../../../shared/asset/Leciel/84B_fin.jpg";
import img84C from "../../../../shared/asset/Leciel/84C_fin.jpg";
import img84D from "../../../../shared/asset/Leciel/84D_fin.jpg";
import img84E from "../../../../shared/asset/Leciel/84E_fin.jpg";
import img84F from "../../../../shared/asset/Leciel/84F_fin.jpg";
import img84G from "../../../../shared/asset/Leciel/84G_fin.jpg";
import "./APTplans.scss";

const APTplans = () => {
  const [activeIndex, setActiveIndex] = useState(1);

  const images = [img84A, img84B, img84C, img84D, img84E, img84F, img84G];

  const handleButtonClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="container">
      <div className="wrap">
        <div className="banner">
          <div className="imgBox">
            <img src={OverviewImage} alt="사업 개요 배너 이미지" />
            <div className="textBox1">
              <h2>COMPLEX</h2>
              <h4>단지안내</h4>
            </div>
          </div>
        </div>

        <div className="textBox2">
          <p>평면안내</p>
        </div>

        <div className="contentBox">
          <div className="content">
            <div className="btnBox">
              {[1, 2, 3, 4, 5, 6, 7].map((index) => (
                <div
                  key={index}
                  className={`btn${index} ${activeIndex === index ? "on" : ""}`}
                  onClick={() => handleButtonClick(index)}
                >
                  <p>{`84㎡${String.fromCharCode(64 + index)}`}</p>
                </div>
              ))}
            </div>
            {[1, 2, 3, 4, 5, 6, 7].map((index) => (
              <div
                key={index}
                className={`content_Div content_Div${index} ${
                  activeIndex === index ? "on" : ""
                }`}
              >
                <div className="imgBox">
                  <img
                    src={images[index - 1]} // 로컬에서 가져온 이미지 배열을 사용
                    alt={`84㎡${String.fromCharCode(64 + index)}`}
                  />
                </div>
              </div>
            ))}
            <div className="textBox">
              <p>※ 상기 이미지는 인허가 과정이나 실제 시공시 변경될 수 있으며, 반드시 견본주택에서 확인하시기 바랍니다.</p>
              <p>※ 발코니 외벽은 단열재 추가 설치시 가구 및 구조체 등의 치수가 변경될 수 있습니다.</p>
              <p>※ 타입별 동·호수는 반드시 확인하시기 바랍니다.</p>
              <p>※ 본 홍보물의 제작과정상 오탈자가 있을 수 있으므로 계약시 반드시 확인하시기 바랍니다.</p>
              <p>
                ※ 단위세대 평면도 및 이미지 등은 입주자의 이해를 돕기 위하여 임의로 가구 들을 배치하여
                시뮬레이션한 것으로 계약시 포함여부를 반드시 확인하시기 바라며, 인허가 과정이나 실제 시공시
                변경될 수 있습니다.
              </p>
              <p>※ 인접 세대 유무 및 세대 조합 형태에 따라 단열재 시공에 의해 비확장 발코니의 실사용 면적은 달라질 수 있습니다.</p>
              <p>※ 기본형 선택시 가변형 벽체 설치 여부를 선택할 수 없습니다.</p>
              <p>
                ※ 기본형과 확장형 시공의 경우 마감재(각 실의 바닥재, 벽면 마감재 등)가 다르니 자세한 사항은
                견본주택 및 입주자모집공고에서 확인하시기 바랍니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default APTplans;
