import React from 'react';

function SocialFollow() {
  const socialLinks = [
    { name: 'Twitter', url: 'https://x.com/', icon: '𝕏' },
    { name: 'Facebook', url: 'https://www.facebook.com/?locale=ko_KR', icon: 'f' },
    { name: 'YouTube', url: 'https://www.youtube.com/?hl=ko&gl=KR', icon: '▶' },
    { name: 'Instagram', url: 'https://www.instagram.com/', icon: '📷' },
    { name: 'LinkedIn', url: 'https://kr.linkedin.com/', icon: 'in' }
  ];

  return (
    <section className="social-follow" id="social-follow">
      <div className="container">
        <h3 className="section-title">
          <strong>팔로우하세요</strong>
        </h3>
        <div className="social-row">
          {socialLinks.map((social, index) => (
            <div key={index} className="soc-item">
              <a href={social.url} target="_blank" rel="noopener noreferrer">
                <span className="social-icon">{social.icon}</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SocialFollow;