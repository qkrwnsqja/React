import React, { useState } from 'react';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [formMessage, setFormMessage] = useState({ type: '', text: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.name.trim()) {
      setFormMessage({ type: 'danger', text: '이름을 입력해주세요.' });
      return;
    }
    
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      setFormMessage({ type: 'danger', text: '이메일을 입력해주세요.' });
      return;
    } else if (!emailPattern.test(formData.email)) {
      setFormMessage({ type: 'danger', text: '유효한 이메일 주소를 입력해주세요.' });
      return;
    }
    
    setFormMessage({ type: 'success', text: '성공적으로 메시지를 보냈습니다! 감사합니다.' });
    
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
      setFormMessage({ type: '', text: '' });
    }, 3000);
  };

  return (
    <section className="contact-form" id="contact-form">
      <div className="container">
        <div className="content-head">
          <h3 className="section-title">
            <strong>문의하세요</strong>
          </h3>
        </div>
        <div className="contact-form-body">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="이름"
              className="form-control"
              value={formData.name}
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              placeholder="이메일"
              className="form-control"
              value={formData.email}
              onChange={handleChange}
            />
            <textarea
              name="message"
              placeholder="메시지"
              className="form-control"
              value={formData.message}
              onChange={handleChange}
            />
            {formMessage.text && (
              <div className={`alert alert-${formMessage.type}`}>
                {formMessage.text}
              </div>
            )}
            <button type="submit" className="btn btn-primary">
              보내기
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;