import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function AboutPage() {
  return (
    <div className="about-page">
      <Navbar />
      
      <section 
        className="header16" 
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920')",
          minHeight: '50vh'
        }}
      >
        <div className="overlay"></div>
        <div className="container">
          <div className="content-wrap">
            <h1 className="hero-title">
              <strong>About Us</strong>
            </h1>
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: 'white', padding: '6rem 0' }}>
        <div className="container">
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <h2 className="section-title" style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>
              <strong>코딩 테스트 준비의 새로운 기준</strong>
            </h2>
            
            <div style={{ marginBottom: '3rem' }}>
              <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: 'var(--primary-color)' }}>
                우리의 미션
              </h3>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#666' }}>
                우리는 모든 개발자가 코딩 테스트를 통해 자신의 잠재력을 최대한 발휘할 수 있도록 돕습니다. 
                최신 트렌드와 실전 경험을 바탕으로 한 교육 프로그램을 통해, 여러분의 꿈을 현실로 만들어드립니다.
              </p>
            </div>

            <div style={{ marginBottom: '3rem' }}>
              <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: 'var(--primary-color)' }}>
                우리가 제공하는 것
              </h3>
              <ul style={{ fontSize: '1.1rem', lineHeight: '2', color: '#666', paddingLeft: '2rem' }}>
                <li>실무 중심의 코딩 테스트 교육 프로그램</li>
                <li>AI 시대에 맞춘 최신 알고리즘 학습</li>
                <li>전문가 멘토링 및 1:1 코칭</li>
                <li>실제 기업 코딩 테스트 분석 및 대비</li>
                <li>포트폴리오 강화를 위한 실전 프로젝트</li>
              </ul>
            </div>

            <div style={{ marginBottom: '3rem' }}>
              <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: 'var(--primary-color)' }}>
                왜 우리를 선택해야 하나요?
              </h3>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#666' }}>
                500명 이상의 수강생이 우리의 프로그램을 통해 원하는 기업에 합격했습니다. 
                100개 이상의 성공적인 프로젝트와 20개 이상의 수상 경력이 우리의 전문성을 증명합니다. 
                여러분도 우리와 함께 성공의 길을 걸어가세요.
              </p>
            </div>

            <div style={{ 
              background: 'var(--background-color)', 
              padding: '2rem', 
              borderRadius: '8px',
              textAlign: 'center'
            }}>
              <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: 'var(--heading-color)' }}>
                지금 바로 시작하세요!
              </h3>
              <p style={{ fontSize: '1.1rem', marginBottom: '2rem', color: '#666' }}>
                코딩 테스트 준비에 대한 더 많은 정보가 필요하신가요?
              </p>
              <a href="/#contact-form" className="btn btn-primary">
                문의하기
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default AboutPage;