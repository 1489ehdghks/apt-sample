import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import image1 from '../../../shared/asset/Xi/1.jpg';
import image2 from '../../../shared/asset/Xi/2.jpg';
import image3 from '../../../shared/asset/Xi/3.jpg';
import image4 from '../../../shared/asset/Xi/4.jpg';
import image5 from '../../../shared/asset/Xi/5.jpg';
import './XiDesktopHome.scss';

const XiDesktopHome = () => {
  const [[page, direction], setPage] = useState([0, 0]);
  const [isPaused, setIsPaused] = useState(false);
  const [key, setKey] = useState(0);

  const images = [image1, image2, image3, image4, image5];

  const paginate = (newDirection) => {
    setKey(prev => prev + 1);
    const newPage = page + newDirection;
    if (newPage < 0) {
      setPage([images.length - 1, newDirection]);
    } else if (newPage >= images.length) {
      setPage([0, newDirection]);
    } else {
      setPage([newPage, newDirection]);
    }
  };

  const handleImageChange = (index) => {
    setKey(prev => prev + 1);
    const direction = index > page ? 1 : -1;
    setPage([index, direction]);
  };

  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      paginate(1);
    }, 3000);

    return () => clearInterval(timer);
  }, [isPaused, page]);

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  return (
    <div 
      className="xi-desktop-home"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="carousel-container">
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

      <div className="thumbnail-nav">
        {images.map((image, index) => (
          <motion.div
            key={index}
            className={`thumbnail ${page === index ? 'active' : ''}`}
            onClick={() => handleImageChange(index)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <img src={image} alt={`썸네일 ${index + 1}`} />
            {page === index && (
              <motion.div 
                key={`progress-${key}`}
                className="progress-bar"
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{ duration: 3, ease: 'linear' }}
              />
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default XiDesktopHome;