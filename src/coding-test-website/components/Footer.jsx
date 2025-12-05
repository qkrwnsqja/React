import React, { useState, useEffect } from 'react';

function Footer() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <section className="main-footer" id="main-footer">
        <div className="container">
          <div className="copyright-text">
            <p>© 2025 Coding Test. All rights reserved.</p>
          </div>
        </div>
      </section>

      {showBackToTop && (
        <button 
          className="back-to-top" 
          onClick={scrollToTop}
          title="Go to top"
        >
          ▲
        </button>
      )}
    </>
  );
}

export default Footer;