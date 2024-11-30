import React from 'react';
import { motion } from 'framer-motion';
import './SecondSection.scss';

const SecondSection = () => {
  return (
    <div className="second-content">
      <div className="dark-overlay"></div>
      <div className="content">
        <motion.div className="text-content">
          <motion.h1 
            className="main-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            HIGH-END LIFE
          </motion.h1>

          <div className="service-items">
            <motion.div 
              className="service-item"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 1.0 }}
            >
              <div className="number">10</div>
              <div className="text">
                <h3>PREMIUM CONCIERGE SERVICE</h3>
                <p>세련된 컨시어지 서비스와 품격 있는 일상</p>
                <p>24시간 보안 시스템과 함께 편리하고 안전한 생활을 제공합니다.</p>
              </div>
            </motion.div>

            <motion.div 
              className="service-item"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 1.5 }}
            >
              <div className="number">20</div>
              <div className="text">
                <h3>PREMIUM SMART SYSTEM</h3>
                <p>최첨단 스마트홈 시스템으로 인한 편리한 생활</p>
                <p>IOT 기반의 맞춤형 서비스로 스마트한 라이프스타일을 완성합니다.</p>
              </div>
            </motion.div>


          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SecondSection;
