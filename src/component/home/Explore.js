import React from 'react';
// import './ExploreSection.css';

const ExploreSection = () => {
  return (
    <section className="explore-container">
      <div className="explore-image"></div>
      <div className="explore-message-box">
        <h2 className="explore-message">Cùng hoà đồng với thiên nhiên tại Vivian's Garden</h2>
        <p className="explore-content">Là nơi tạo nên những khoảnh khắc lạ thường cùng gia đình và bạn bè, xây dựng những kỉ niệm đáng nhớ</p>
        <a href="book-room" className="explore-button">Đặt Phòng</a>
      </div>
    </section>
  );
};

export default ExploreSection;
