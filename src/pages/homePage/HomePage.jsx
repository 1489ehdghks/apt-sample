import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import { useGlobalStore } from '../../shared/store/index';
import FirstSection from './sections/FirstSection';
import SecondSection from './sections/SecondSection';
import ThirdSection from './sections/ThirdSection';
import Footer from '../../widgets/Footer/Footer';
import './HomePage.scss';

const HomePage = () => {
  return (
    <ReactFullpage

      scrollingSpeed={1000}
      navigation={true}
      navigationPosition="right"
      // navigationTooltips={['HOME', 'HIGH-END LIFE']} //
      showActiveTooltip={true}
      css3={true}
      scrollOverflow={true}
      normalScrollElements=".popup, .modal"
      render={({ state, fullpageApi }) => {
        return (
          <ReactFullpage.Wrapper>
            <div className="section">
              <FirstSection />
            </div>
            <div className="section">
              <SecondSection />
            </div>
            <div className="section">
              <ThirdSection />
            </div>
            <div className="section fp-auto-height">
            <Footer />
          </div>
          </ReactFullpage.Wrapper>
        );
      }}
    />
  );
};

export default HomePage;