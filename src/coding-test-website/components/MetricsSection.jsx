import React from 'react';

function MetricsSection() {
  const metrics = [
    { value: '500+', label: '만족한 고객' },
    { value: '100+', label: '성공적인 프로젝트' },
    { value: '20+', label: '수상 경력' }
  ];

  return (
    <section className="metrics-section" id="metrics-section">
      <div className="container">
        <div className="row">
          {metrics.map((metric, index) => (
            <div key={index} className="feature-item">
              <div className="item-wrapper">
                <div className="card-box">
                  <p className="card-title">
                    <strong>{metric.value}</strong>
                  </p>
                  <p className="card-text">{metric.label}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default MetricsSection;