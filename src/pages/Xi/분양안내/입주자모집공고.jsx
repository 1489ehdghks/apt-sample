import React from 'react';
import './입주자모집공고.scss';
import 모집공고 from '../../../shared/asset/Xi/모집공고.jpg';

const 입주자모집공고 = () => {
    const handleOpenPDF = () => {
      window.open('chrome-extension://efaidnbmnnnibpcajpcglclefindmkaj/https://www.xi.co.kr/Files/cmsPage/20241114_140032_073002.pdf', '_blank');
    };
  
    return (
      <div className="입주자모집공고">
        <h2>입주자 모집공고</h2>
        <div className="content-container">
          <div className="image-section">
            <img src={모집공고} alt="평촌자이 퍼스니티 조감도" />
          </div>
          <div className="info-section">
            <div className="info-content">
              <p className="project-name">평촌자이 퍼스니티</p>
              <h3>입주자 모집공고</h3>
              <button onClick={handleOpenPDF}>
                모집공고 보기
                <span className="arrow">›</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default 입주자모집공고;