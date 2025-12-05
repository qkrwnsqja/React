import React from 'react';

function CTASection() {
  const scrollToContact = () => {
    const element = document.getElementById('contact-form');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      className="cta-section" 
      id="cta-section"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=1920')"
      }}
    >
      <div className="overlay"></div>
      <div className="container">
        <div className="card-wrapper">
          <div className="card-box">
            <h1 className="cta-title">
              <strong>코딩 마스터</strong>
            </h1>
            <p className="paragraph-text">
              최고의 코딩 전문가가 되어 보세요!
            </p>
            <div className="section-btn-wrapper">
              <button 
                className="btn btn-secondary" 
                onClick={scrollToContact}
              >
                시작하기
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CTASection;