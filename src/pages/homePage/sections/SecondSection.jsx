// src/pages/homePage/sections/SecondSection.jsx
import React from 'react';
import { motion } from 'framer-motion';
import './SecondSection.scss';

const SecondSection = () => {
  return (
    <section className="second-content">
      <div className="bg-overlay"></div>
      <div className="content">
        <motion.div 
          className="text-content"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <motion.h1 
            className="main-title"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            HIGH-END LIFE
          </motion.h1>

          <div className="service-items">
            <motion.div 
              className="service-item"
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="number">10</div>
              <div className="text">
                <h3>PREMIUM CONCIERGE SERVICE</h3>
                <p>세련된 컨시어지 서비스로 품격 있는 일상을 누리세요.</p>
                <p>24시간 보안 시스템과 함께 편리하고 안전한 생활을 제공합니다.</p>
              </div>
            </motion.div>

            <motion.div 
              className="service-item"
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="number">20</div>
              <div className="text">
                <h3>PREMIUM SMART SYSTEM</h3>
                <p>최첨단 스마트홈 시스템으로 편리한 생활을 경험하세요.</p>
                <p>IOT 기반의 맞춤형 서비스로 스마트한 라이프스타일을 완성합니다.</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SecondSection;

// src/pages/homePage/sections/SecondSection.scss
