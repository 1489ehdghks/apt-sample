import React from 'react';
import 오시는길1 from '../../../shared/asset/Xi/오시는길1.jpg'
import 오시는길2 from '../../../shared/asset/Xi/오시는길2.jpg'
import './XiRoute.scss';

const XiRoute = () => {
  const locations = [
    {
      title: '현장',
      subTitle: '주소',
      address: '경기도 안양시 동안구 비산3동 354-10번지 일원',
      naverMapUrl: `https://map.naver.com/v5/search/${encodeURIComponent('경기도 안양시 동안구 비산3동 354-10번지')}`,
      mapImage: 오시는길1  
    },
    {
      title: '견본주택',
      subTitle: '주소',
      address: '경기도 안양시 동안구 비산동 320-3',
      naverMapUrl: `https://map.naver.com/v5/search/${encodeURIComponent('경기도 안양시 동안구 비산동 320-3')}`,
      mapImage: 오시는길2
    }
  ];

  const handleMapClick = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="route-info">
      <h1 className="title">오시는길</h1>
      
      <div className="locations-container">
        {locations.map((location, index) => (
          <div key={index} className="location-card">
            <div className="card-content">
              <div className="text-section">
                <h2>{location.title}</h2>
                <h3>{location.subTitle}</h3>
                <p>{location.address}</p>
                <button 
                  className="naver-map-btn"
                  onClick={() => handleMapClick(location.naverMapUrl)}
                >
                  네이버지도 보기
                </button>
              </div>
              <div className="map-section">
                <img 
                  src={location.mapImage} 
                  alt={`${location.title} 위치`} 
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default XiRoute;