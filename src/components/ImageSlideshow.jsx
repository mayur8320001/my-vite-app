import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import './ImageSlideshow.css';


const ImageSlideshow = ({ imageDir = 'customers',reverseDirection = false }) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const loadImages = async () => {
      try {
        let context;

        // Manually map possible directories for Vite to process
        switch (imageDir) {
          case 'customers':
            context = import.meta.glob('/public/images/customers/*.png', { eager: true });
            break;
          case 'partners':
            context = import.meta.glob('/public/images/partners/*.png', { eager: true });
            break;
          default:
            console.error('Invalid image directory:', imageDir);
            return;
        }

        const imagePaths = Object.keys(context).map((path) => path.replace('/public', ''));
        setImages(imagePaths);
      } catch (error) {
        console.error('Failed to load images:', error);
      }
    };

    loadImages();
  }, [imageDir]);
  return (
    <div className="slideshow-container">
      <Swiper
        slidesPerView={8}
        spaceBetween={20}
        autoplay={{
          delay:  1500,
          disableOnInteraction: false,
          reverseDirection: reverseDirection, // Reverse direction for Partners slider
        }}
        navigation={true}
        modules={[Autoplay, Navigation]}
        loop={true}
        speed={1200}
        breakpoints={{
          320: { slidesPerView: 4 },
          768: { slidesPerView: 6 },
          1024: { slidesPerView: 10 },
        }}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="image-wrapper">
              <img src={image} alt={`Slide ${index}`} className="carousel-image" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ImageSlideshow;
