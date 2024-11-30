import React from 'react';
import { motion } from 'framer-motion';
import './FirstSection.scss';

const FirstSection = () => {
  return (
    <section className="first-content">
      <div className="bg-overlay"></div>
      <div className="content">
      <div className="text-content">
      <motion.h2 
            className="subtitle"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.8,
              delay: 0.6
            }}
          >
            당신이 꿈꾸는 곳
          </motion.h2>       

          <motion.h1 
            className="title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.8,
              delay: 1.2
            }}
          >
            프리미엄
          </motion.h1>
          <motion.h1 
            className="title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.8,
              delay: 1.8
            }}
          >
            라이프스타일을 완성하다.
          </motion.h1>


          <motion.div 
            className="description"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.8,
              delay: 2.4
            }}
          >
            <p>천안역의 미래 비전과 인프라를 품은 전역 영상센터</p>
            <p>보다 편하고 보다 이롭고 보다 튼튼한 주거공간을 만들기 위해</p>
            <p>임주민의 마음으로 임했습니다.</p>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default FirstSection;


