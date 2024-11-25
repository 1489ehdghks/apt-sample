import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import FirstSection from './sections/FirstSection';
import SecondSection from './sections/SecondSection';
import ThirdSection from './sections/ThirdSection';
import LecielFooter from '../../../widgets/Leciel/Footer/LecielFooter';
import './LecielHome.scss';

const LecielHome = () => {
  return (
    <ReactFullpage
      // navigationTooltips={['HOME', 'HIGH-END LIFE']} //
      scrollingSpeed={1000}
      navigation={true}
      navigationPosition="right"
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
            <LecielFooter />
          </div>
          </ReactFullpage.Wrapper>
        );
      }}
    />
  );
};

export default LecielHome;