import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import XiMobileFooter from './XiMobileFooter';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronUp, ChevronDown } from 'lucide-react';
import './XiFooter.scss';

const XiFooter = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 768 });

  if (isMobile) {
    return <XiMobileFooter />;
  }

  return (
    <footer className="xi-footer">

      <div className="footer-content">
        <div className="basic-info">
          <span>시행 : 뉴타운현성신호파크자구 주택재건축정비사업조합</span>
          <span className="divider">|</span>
          <span>시공 : GS건설</span>
        </div>
        
        <button 
          className="expand-button"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? <ChevronDown /> : <ChevronUp />}
        </button>
      </div>


      <AnimatePresence>
        {isExpanded && (
          <motion.div 
            className="expanded-content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="detailed-info">
              <div className="info-row">
                <span>GS건설 : 서울특별시 종로구 종로33 그랑서울</span>
                <span className="divider">|</span>
                <span>대표이사 : @@@</span>
                <span className="divider">|</span>
                <span>등록번호 : 104-81-18121</span>
                <span className="divider">|</span>
                <span>고객센터 : 1577-4254</span>
              </div>
              <div className="info-row">
                <span>오리온대행 : ㈜아이앤에틀러스</span>
                <span className="divider">|</span>
                <span>사업자등록번호 : 275-81-00393</span>
                <span className="divider">|</span>
                <span>대표 : 정상규</span>
              </div>
              <div className="warning-text">
                ※ 본 사이트의 이미지는 소비자의 이해를 돕기 위해 제작된 것으로 실제 시공 시 다를 수 있습니다.
              </div>
              <div className="copyright">
                Copyright © 2024 APPO ALL RIGHTS RESERVED.
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </footer>
  );
};

export default XiFooter;