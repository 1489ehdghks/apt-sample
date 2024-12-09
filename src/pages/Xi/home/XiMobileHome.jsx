import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import image1 from '../../../shared/asset/Xi/1.jpg';
import image2 from '../../../shared/asset/Xi/2.jpg';
import image3 from '../../../shared/asset/Xi/3.jpg';
import image4 from '../../../shared/asset/Xi/4.jpg';
import image5 from '../../../shared/asset/Xi/5.jpg';
import './XiMobileHome.scss';

const XiMobileHome = () => {
  const [[page, direction], setPage] = useState([0, 0]);
  const [touchStart, setTouchStart] = useState(null);

  const images = [image1, image2, image3, image4, image5];

  const paginate = (newDirection) => {
    const newPage = page + newDirection;
    if (newPage < 0) {
      setPage([images.length - 1, newDirection]);
    } else if (newPage >= images.length) {
      setPage([0, newDirection]);
    } else {
      setPage([newPage, newDirection]);
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      paginate(1);
    }, 3000);
    return () => clearInterval(timer);
  }, [page]);

  const handleTouchStart = (e) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    if (!touchStart) return;
    const currentTouch = e.touches[0].clientX;
    const diff = touchStart - currentTouch;
    if (Math.abs(diff) > 50) {
      if (diff > 0) paginate(1);
      else paginate(-1);
      setTouchStart(null);
    }
  };
  const handleEModelhouse = (e) => {
    e.preventDefault();
    window.open('https://www.xi-event.com/templete/pcxi_firsnity/vr2/tour_unit.html', '_blank');
  };

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? '100%' : '-100%',
      opacity: 0
    })
  };

  return (
    <div className="xi-mobile-home">
      <div className="visual-section">
        <div 
          className="carousel-container"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={() => setTouchStart(null)}
        >
          <AnimatePresence custom={direction} initial={false}>
            <motion.div
              key={page}
              className="slide"
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
              }}
              style={{
                backgroundImage: `url(${images[page]})`
              }}
            />
          </AnimatePresence>
        </div>

        <div className="indicator">
          {images.map((_, index) => (
            <div 
              key={index} 
              className={`dot ${page === index ? 'active' : ''}`}
              onClick={() => setPage([index, index > page ? 1 : -1])}
            >
              {page === index && (
                <motion.div 
                  className="progress"
                  initial={{ width: '0%' }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 3, ease: 'linear' }}
                />
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="menu-section">
        <div className="menu-grid">
          <Link to="/xi/입지환경" className="menu-item">
            <div className="icon">🌆</div>
            <span>입지환경</span>
          </Link>
          <a href="#" onClick={handleEModelhouse} className="menu-item">
            <div className="icon">🏠</div>
            <span>E-모델하우스</span>
          </a>
          <Link to="/xi/평면정보" className="menu-item">
            <div className="icon">📋</div>
            <span>평면정보</span>
          </Link>
          <Link to="/xi/단지배치도" className="menu-item">
            <div className="icon">🏢</div>
            <span>단지배치도</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default XiMobileHome;