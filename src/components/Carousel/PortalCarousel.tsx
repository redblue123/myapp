import React, { useState, useEffect } from 'react'; 
 
import style from './PortalCarousel.less';  
  
interface CarouselProps {  
  images: string[];  
  interval?: number;  
}  
  
const Carousel: React.FC<CarouselProps> = ({ images, interval = 3000 }) => {  
  const [currentIndex, setCurrentIndex] = useState(0);  
  
  useEffect(() => {  
    const timer = setInterval(() => {  
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);  
    }, interval);  
  
    return () => clearInterval(timer);  
  }, [images, interval]);  
  
  const buttons = images.map((image, index) => (  
    <button  
      key={index}  
      onClick={() => setCurrentIndex(index)}  
      className={`${style.carouselButton} ${currentIndex === index ? style.active : ''}`}  
    >  
      {/* {index + 1}   */}
    </button>  
  ));  
  
  return (  
    <div className={style.carousel}>  
      <img src={images[currentIndex]} alt="carousel" />  
      <div className={style.carouselButtons}>  
        {buttons}  
      </div>  
    </div>  
  );  
};  
  
export default Carousel;