import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import { useGlobalStore } from '../../shared/store/index';
import FirstSection from './sections/FirstSection';
import SecondSection from './sections/SecondSection';
import ThirdSection from './sections/ThirdSection';
import './HomePage.scss';

const HomePage = () => {
  return (
    <ReactFullpage

      scrollingSpeed={1000}
      navigation={true}
      navigationPosition="right"
      navigationTooltips={['HOME', 'HIGH-END LIFE']} // 툴팁 텍스트
      showActiveTooltip={true}
      css3={true}
      scrollOverflow={true}
      normalScrollElements=".popup, .modal" // 모달 내부 스크롤 허용
      render={({ state, fullpageApi }) => {
        return (
          <ReactFullpage.Wrapper>
            <div className="section">
              <FirstSection />
            </div>
            <div className="section">
              <SecondSection />
            </div>
          </ReactFullpage.Wrapper>
        );
      }}
    />
  );
};

export default HomePage;