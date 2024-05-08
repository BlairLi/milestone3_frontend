import React, { useState, useEffect } from 'react';

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className='carousel' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <img src={images[currentIndex]} alt="Display" style={{ width: '35rem', height: '25rem', maxWidth: '100%' }} />
    </div>
  );
};

export default Carousel