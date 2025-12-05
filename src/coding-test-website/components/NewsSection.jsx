import React, { useState } from 'react';

function NewsSection() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalData, setModalData] = useState({ title: '', content: '' });

  const newsItems = [
    {
      id: 1,
      title: '코딩 테스트 준비를 위한 교육 프로그램',
      date: '2025년 6월 11일',
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800',
      preview: '합격을 부르는 코딩 테스트 전략 교육 — 실무 중심 커리큘럼으로 단숨에 앞서가세요!',
      content: '본 교육 프로그램은 합격을 위한 코딩 테스트 전략에 중점을 둡니다. 실무 중심 커리큘럼으로 문제 해결 능력을 향상시키고, 최신 트렌드에 맞는 알고리즘과 자료 구조를 학습할 수 있습니다.'
    },
    {
      id: 2,
      title: 'AI 시대의 코딩 테스트 변화',
      date: '2025년 6월 04일',
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800',
      preview: 'AI 시대, 코딩 테스트는 진화 중 — 지금 바로 새로운 기준에 맞는 합격 전략을 준비하세요!',
      content: 'AI 기술의 발전은 코딩 테스트의 패러다임을 변화시키고 있습니다. 단순한 알고리즘 지식뿐만 아니라, AI 관련 문제 해결 능력과 효율적인 코드 작성 능력이 더욱 중요해지고 있습니다.'
    },
    {
      id: 3,
      title: '최신 코딩 트렌드',
      date: '2025년 5월 28일',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800',
      preview: '새로운 코딩 기술 트렌드를 따라잡으세요. 전문가 팁과 유용한 정보!',
      content: '개발 트렌드는 빠르게 변화하고 있습니다. 본 기사에서는 최신 프로그래밍 언어, 프레임워크, 개발 방법론 등 주목할 만한 코딩 트렌드를 분석합니다.'
    },
    {
      id: 4,
      title: '실전 코딩 프로젝트',
      date: '2025년 5월 21일',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800',
      preview: '실제 프로젝트를 통해 코딩 실력을 향상시키세요. 지금 참여하세요!',
      content: '이 프로젝트는 실제 기업에서 사용되는 코딩 문제를 기반으로 합니다. 이론만으로는 부족한 실전 감각을 익히고, 팀 프로젝트를 통해 협업 능력을 기를 수 있습니다.'
    },
    {
      id: 5,
      title: '코딩 인터뷰 준비',
      date: '2025년 5월 14일',
      image: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800',
      preview: '코딩 인터뷰를 완벽하게 준비하세요. 합격 전략 공개!',
      content: '성공적인 코딩 인터뷰를 위한 모든 것을 준비하세요. 흔히 나오는 질문 유형 분석, 효과적인 문제 해결 전략, 그리고 면접관에게 깊은 인상을 남기는 팁까지.'
    },
    {
      id: 6,
      title: '코딩 생산성 향상',
      date: '2025년 5월 7일',
      image: 'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=800',
      preview: '효율적인 코딩 습관을 기르세요. 생산성을 높이는 방법!',
      content: '효율적인 코딩 습관은 개발자의 생산성을 크게 좌우합니다. 본 콘텐츠에서는 코드 작성 속도를 높이고, 디버깅 시간을 줄이며, 더 깔끔하고 유지보수하기 쉬운 코드를 작성하는 방법을 제시합니다.'
    }
  ];

  const openModal = (title, content) => {
    setModalData({ title, content });
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <section className="news-section" id="news-section">
        <div className="container">
          <div className="content-head">
            <h4 className="section-title">
              <strong>최신 뉴스</strong>
            </h4>
          </div>
          <div className="row">
            {newsItems.map(item => (
              <div key={item.id} style={{ flex: '0 0 calc(33.333% - 20px)', minWidth: '300px' }}>
                <div className="item-wrapper">
                  <div className="item-img">
                    <img src={item.image} alt={item.title} />
                  </div>
                  <div className="item-content">
                    <h6 className="item-subtitle">
                      <strong>{item.title}</strong>
                    </h6>
                    <p className="paragraph-text">{item.date}</p>
                    <p className="paragraph-text">{item.preview}</p>
                    <div className="item-footer">
                      <button 
                        className="btn btn-primary"
                        onClick={() => openModal(item.title, item.content)}
                      >
                        더보기
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className={`modal ${modalOpen ? 'show' : ''}`} onClick={closeModal}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <span className="close-button" onClick={closeModal}>&times;</span>
          <h3>{modalData.title}</h3>
          <p>{modalData.content}</p>
        </div>
      </div>
    </>
  );
}

export default NewsSection;