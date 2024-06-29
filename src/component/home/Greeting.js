import React from 'react';
// import './GreetingSection.css';

const GreetingSection = () => {
  return (
    <section className="intro">
      <h2 className="greeting">Vivian's Garden Xin Chào !</h2>
      <div className="intro-box">
        {/* <img className="intro-img" src={`${process.env.PUBLIC_URL}/vivian-source/gate.jpg`} alt="Greeting Image" /> */}
        <p className="intro-msg">
        View Thung lũng có tổng diện tích 2.500 m2 toạ lạc tại thôn Trán Voi, xã Phú Mãn, huyện Quốc Oai, Hà Nội. Cách trung tâm Hà Nội 40km. Đi từ BigC Thăng Long đến nơi đúng 33 phút.        </p>
        <img className="intro-img" src={`${process.env.PUBLIC_URL}/vivian-source/gate.jpeg`} alt="Greeting" />

      </div>
      {/* <img className="intro-img" src={`${process.env.PUBLIC_URL}/vivian-source/gate.jpg`} alt="Greeting Image" /> */}

    </section>
  );
};

export default GreetingSection;
