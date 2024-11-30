import React from 'react';
import { motion } from 'framer-motion';
import './LecielFooter.scss';

const LecielFooter = () => {
  return (
    <motion.footer 
      className="footer"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="footer-content">
        <div className="footer-main">
          <div className="company-info">
            <h2>천안역 태양아너스 로써웰</h2>
            <p>시행 : 태양개발(주)</p>
            <p>시공 : 태영건설</p>
          </div>
          
          <div className="contact-info">
            <div className="info-item">
              <h3>모델하우스</h3>
              <p>충청남도 천안시 동남구</p>
            </div>
            <div className="info-item">
              <h3>문의전화</h3>
              <p>1555-1960</p>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="copyright">
            © 2024 APPO. All Rights Reserved.
          </p>
          <div className="legal-links">
            <a href="/privacy">개인정보처리방침</a>
            <span className="divider">|</span>
            <a href="/terms">이용약관</a>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default LecielFooter;