import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import image1 from '../../shared/asset/Xi/1.jpg';
import image2 from '../../shared/asset/Xi/2.jpg';
import image3 from '../../shared/asset/Xi/3.jpg';
import image4 from '../../shared/asset/Xi/4.jpg';
import image5 from '../../shared/asset/Xi/5.jpg';
import './XiHome.scss';

const XiHome = () => {
 const [currentImageIndex, setCurrentImageIndex] = useState(0);

 const images = [
    image1,
    image2,
    image3,
    image4,
    image5

 ];

 return (
   <div className="xi-home">
     <AnimatePresence mode="wait">
       <motion.div
         key={currentImageIndex}
         className="main-image"
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         exit={{ opacity: 0 }}
         transition={{ duration: 0.5 }}
         style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
       >
       </motion.div>
     </AnimatePresence>

     <div className="thumbnail-nav">
       {images.map((image, index) => (
         <motion.div
           key={index}
           className={`thumbnail ${currentImageIndex === index ? 'active' : ''}`}
           onClick={() => setCurrentImageIndex(index)}
           whileHover={{ scale: 1.1 }}
           whileTap={{ scale: 0.95 }}
         >
           <img src={image} alt={`썸네일 ${index + 1}`} />
         </motion.div>
       ))}
     </div>
   </div>
 );
};

export default XiHome;
