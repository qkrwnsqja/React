import React, { useState, useEffect } from 'react';

function GallerySection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200',
    'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200',
    'https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=1200',
    'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200',
    'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200',
    'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200'
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="gallery-section" id="gallery-section">
      <div className="container">
        <div className="content-head">
          <h4 className="section-title">
            <strong>코딩 챌린지 갤러리</strong>
          </h4>
        </div>
        <div className="carousel-container">
          <div 
            className="carousel-inner"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {images.map((image, index) => (
              <div key={index} className="carousel-item">
                <img src={image} alt={`코딩 갤러리 이미지 ${index + 1}`} />
              </div>
            ))}
          </div>
          <button className="carousel-control prev" onClick={prevSlide}>
            ❮
          </button>
          <button className="carousel-control next" onClick={nextSlide}>
            ❯
          </button>
          <div className="carousel-indicators">
            {images.map((_, index) => (
              <div
                key={index}
                className={`carousel-indicator ${index === currentIndex ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default GallerySection;