import React from 'react';

function ContactInfo() {
  const contactData = [
    { title: '전화', info: '010-4150-7302' },
    { title: '이메일', info: 'wnsgks0205@gmail.com' },
    { title: '주소', info: '서울특별시 용산구 보광로 73' }
  ];

  return (
    <section className="contact-info" id="contact-info">
      <div className="container">
        <div className="row">
          {contactData.map((contact, index) => (
            <div key={index} className="feature-item">
              <div className="item-wrapper">
                <div className="item-content">
                  <h6 className="item-subtitle">
                    <strong>{contact.title}</strong>
                  </h6>
                  <p className="paragraph-text">{contact.info}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ContactInfo;