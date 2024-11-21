import React from 'react';
import { motion } from 'framer-motion';
import './FirstSection.scss';

const ThirdSection = () => {
  return (
    <section className="first-section">
      <div className="bg-overlay"></div>
      <div className="content">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-content"
        >
          <h2 className="subtitle">천안의 자부심</h2>
          <h1 className="title">그 이상의<br />랜드마크가 되다!</h1>
          <div className="description">
            <p>천안역의 미래 비전과 인프라를 품은 전역 영상센터</p>
            <p>보다 편하고 보다 이롭고 보다 튼튼한 주거공간을 만들기 위해</p>
            <p>임주민의 마음으로 명품발을 지세했습니다.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ThirdSection;