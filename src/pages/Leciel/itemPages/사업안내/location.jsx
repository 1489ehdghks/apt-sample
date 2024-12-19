import React from "react";
import Banner from '../../../../widgets/Leciel/component/Banner';
import LocationImage from "../../../../shared/asset/Leciel/sub01-3-1.png";
import LocationImage2 from "../../../../shared/asset/Leciel/sub01-3-2.png";
import LecielFooter from "../../../../widgets/Leciel/Footer/LecielFooter";
import { motion } from "framer-motion";
import { MapPin, Phone, Train, Bus } from "lucide-react";
import locationImage from "../../../../shared/asset/Leciel/location.jpg";
import "./location.scss";

const Location = () => {
  // 네이버 지도 이동 함수
  const handleNaverMapClick = () => {
    const isMobile = /Android|iPhone|iPad/i.test(navigator.userAgent);
    if (isMobile) {
      window.location.href = "nmap://search?query=천안역";
    } else {
      window.open("https://map.naver.com/v5/search/천안역", "_blank");
    }
  };

  return (
    <div className="location-page">
      
      <Banner title="ABOUT" subtitle="사업안내" />

      <div className="textBox2">
        <p2>입지안내</p2>
        <h4>천안역 태왕아너스 르씨엘</h4>
        <p>내 집 마련의 현명한 시작</p>
        <img src={LocationImage} alt="입지 안내 이미지" className="image-default" />
        <img src={LocationImage2} alt="입지 안내 이미지2" className="image-with-bg" />
      </div>

      {/* 위치 섹션 */}
      <div className="location-content">
        <motion.div
          className="location-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2>Location</h2>
          <p>천안역 태양아너스 로써웰의 프리미엄 입지</p>
        </motion.div>

        <div className="location-container">
          <motion.div
            className="info-section"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="info-item">
              <MapPin className="icon" />
              <div>
                <h3>Address</h3>
                <p>충청남도 천안시 동남구</p>
              </div>
            </div>

            <div className="info-item">
              <Phone className="icon" />
              <div>
                <h3>Contact</h3>
                <p>1555-1960</p>
              </div>
            </div>

            <div className="info-item">
              <Train className="icon" />
              <div>
                <h3>Metro</h3>
                <p>1호선 천안역 도보 3분</p>
              </div>
            </div>

            <div className="info-item">
              <Bus className="icon" />
              <div>
                <h3>Bus</h3>
                <p>11-1, 30, 50번</p>
              </div>
            </div>

            <button className="map-button" onClick={handleNaverMapClick}>
              네이버 지도에서 보기
            </button>
          </motion.div>

          {/* 지도 이미지 섹션 */}
          <motion.div
            className="map-section"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <img src={locationImage} alt="위치 안내" />
          </motion.div>
        </div>
      </div>
        <LecielFooter />
    </div>
  );
};

export default Location;
