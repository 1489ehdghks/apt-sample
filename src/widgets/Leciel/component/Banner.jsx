import React from "react";
import "./Banner.scss";
import OverviewImage from "../../../shared/asset/Leciel/overview.jpg";


const Banner = ({ title, subtitle }) => {
  return (
    <div className="banner">
      <div className="imgBox">
        <img src={OverviewImage} alt="배너 이미지" />
        <div className="textBox1">
          <h2>{title}</h2>
          <h4>{subtitle}</h4>
        </div>
      </div>
    </div>
  );
};

export default Banner;

