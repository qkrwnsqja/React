import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const location = useLocation();

  const scrollToSection = (sectionId) => {
    if (location.pathname !== '/') {
      window.location.href = `/#${sectionId}`;
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    alert('로그인 기능은 현재 개발 중입니다!');
  };

  return (
    <section className="main-navbar" id="main-navbar">
      <div className="container">
        <nav className="navbar">
          <div className="navbar-brand">
            <Link to="/" className="navbar-caption-text">
              Coding Test
            </Link>
          </div>
          <div className="navbar-collapse">
            <ul className="navbar-nav-list">
              <li className="nav-item">
                <button 
                  className="nav-link" 
                  onClick={() => scrollToSection('hero-section')}
                  style={{ background: 'none', border: 'none' }}
                >
                  소개
                </button>
              </li>
              <li className="nav-item">
                <button 
                  className="nav-link" 
                  onClick={() => scrollToSection('news-section')}
                  style={{ background: 'none', border: 'none' }}
                >
                  서비스
                </button>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <button 
                  className="nav-link" 
                  onClick={() => scrollToSection('contact-form')}
                  style={{ background: 'none', border: 'none' }}
                >
                  문의
                </button>
              </li>
            </ul>
            <div className="navbar-buttons">
              <button 
                className="btn btn-primary-outline" 
                onClick={handleLogin}
              >
                로그인
              </button>
            </div>
          </div>
        </nav>
      </div>
    </section>
  );
}

export default Navbar;