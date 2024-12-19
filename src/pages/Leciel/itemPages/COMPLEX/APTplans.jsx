import React from "react";
import Banner from "../../../../widgets/Leciel/component/Banner";
import LecielFooter from "../../../../widgets/Leciel/Footer/LecielFooter";
import Notice from "../../../../widgets/Leciel/component/Notice";
import ButtonImage from "../../../../widgets/Leciel/component/ButtonImage"; // TabImage 컴포넌트 추가
import img84A from "../../../../shared/asset/Leciel/84A_fin.jpg";
import img84B from "../../../../shared/asset/Leciel/84B_fin.jpg";
import img84C from "../../../../shared/asset/Leciel/84C_fin.jpg";
import img84D from "../../../../shared/asset/Leciel/84D_fin.jpg";
import img84E from "../../../../shared/asset/Leciel/84E_fin.jpg";
import img84F from "../../../../shared/asset/Leciel/84F_fin.jpg";
import img84G from "../../../../shared/asset/Leciel/84G_fin.jpg";
import "./APTplans.scss";

const APTplans = () => {
  const notices = [
    "",
    "상기 이미지는 인허가 과정이나 실제 시공시 변경될 수 있으며, 반드시 견본주택에서 확인하시기 바랍니다.",
    "발코니 외벽은 단열재 추가 설치시 가구 및 구조체 등의 치수가 변경될 수 있습니다.",
    "타입별 동·호수는 반드시 확인하시기 바랍니다.",
    "본 홍보물의 제작과정상 오탈자가 있을 수 있으므로 계약시 반드시 확인하시기 바랍니다.",
    "단위세대 평면도 및 이미지 등은 입주자의 이해를 돕기 위하여 임의로 가구 들을 배치하여 시뮬레이션한 것으로 계약시 포함여부를 반드시 확인하시기 바라며, 인허가 과정이나 실제 시공시 변경될 수 있습니다.",
    "인접 세대 유무 및 세대 조합 형태에 따라 단열재 시공에 의해 비확장 발코니의 실사용 면적은 달라질 수 있습니다.",
    "기본형 선택시 가변형 벽체 설치 여부를 선택할 수 없습니다.",
    "기본형과 확장형 시공의 경우 마감재(각 실의 바닥재, 벽면 마감재 등)가 다르니 자세한 사항은 견본주택 및 입주자모집공고에서 확인하시기 바랍니다.",
  ];

  const tabData = [
    { id: "84A", label: "84A", image: img84A, alt: "84A㎡ 평면도" },
    { id: "84B", label: "84B", image: img84B, alt: "84B㎡ 평면도" },
    { id: "84C", label: "84C", image: img84C, alt: "84C㎡ 평면도" },
    { id: "84D", label: "84D", image: img84D, alt: "84D㎡ 평면도" },
    { id: "84E", label: "84E", image: img84E, alt: "84E㎡ 평면도" },
    { id: "84F", label: "84F", image: img84F, alt: "84F㎡ 평면도" },
    { id: "84G", label: "84G", image: img84G, alt: "84G㎡ 평면도" },
  ];

  return (
    <div className="plans-container">
      <div className="wrap">
        <Banner title="COMPLEX" subtitle="단지안내" />

        <div className="textBox2">
          <p>평면안내</p>
        </div>
        
        <ButtonImage title="84㎡ 평면도" tabData={tabData} />
        
        <div className="notice-box">
        <Notice notices={notices} />
        </div>
      </div>
      <LecielFooter />
    </div>
  );
};

export default APTplans;
