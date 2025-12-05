import React from 'react';

function Header() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      className="header16" 
      id="hero-section"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1920')"
      }}
    >
      <div className="overlay"></div>
      <div className="container">
        <div className="content-wrap">
          <h1 className="hero-title">
            <strong>코딩 테스트</strong>
          </h1>
          <div className="section-btn-wrapper">
            <button 
              className="btn btn-white" 
              onClick={() => scrollToSection('news-section')}
            >
              시작하기
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Header;