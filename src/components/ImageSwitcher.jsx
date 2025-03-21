import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const ImageSwitcher = () => {
  const [currentImage, setCurrentImage] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev === 1 ? 2 : 1)); // Switch between 1 and 2
    }, 10000); // Change every 10 seconds

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 1 }}
    >
      <motion.div
        className='h-[33vh] md:h-[74vh] bg-gray-50'
        style={{
          backgroundImage: `url(/imgs/home/${currentImage === 1 ? '1' : '2'}.jpeg)`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
        key={currentImage} // Use key to trigger re-render
      />
    </motion.div>
  );
}

export default ImageSwitcher;