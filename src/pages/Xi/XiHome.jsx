import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import XiFooter from '../../widgets/Xi/Footer/XiFooter';
import image1 from '../../shared/asset/Xi/1.jpg';
import image2 from '../../shared/asset/Xi/2.jpg';
import image3 from '../../shared/asset/Xi/3.jpg';
import image4 from '../../shared/asset/Xi/4.jpg';
import image5 from '../../shared/asset/Xi/5.jpg';
import './XiHome.scss';
const XiHome = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
 
  const images = [image1, image2, image3, image4, image5];
 
  useEffect(() => {
    if (isPaused) return;
 
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);
 
    return () => clearInterval(timer);
  }, [images.length, isPaused]);
 
  const handleImageChange = (index) => {
    setCurrentImageIndex(index);
  };
 
  return (
    <div 
      className="xi-home"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={currentImageIndex}
          className="main-image"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
        />
      </AnimatePresence>
 
      <div className="thumbnail-nav">
        {images.map((image, index) => (
          <motion.div
            key={index}
            className={`thumbnail ${currentImageIndex === index ? 'active' : ''}`}
            onClick={() => handleImageChange(index)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <img src={image} alt={`썸네일 ${index + 1}`} />
            {currentImageIndex === index && (
              <motion.div 
                className="progress-bar"
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{ duration: 3, ease: 'linear' }}
              />
            )}
          </motion.div>
        ))}
      </div>
      <XiFooter />
    </div>
  );
 };
 
 export default XiHome;
 