import React from 'react';
// import './Footer.css';

const Footer = () => {
  return (
    <section className="footer">
      <div className="footer-content">

  {/* <img className="footer-logo" src={`${process.env.PUBLIC_URL}/vivian-source/logo.jpg`} alt="Logo" /> */}

    <div className="policy-section">
      <h3 className='section'>Điều Khoản</h3>
      <ul>
        {/* <li><a href="#policy1">&bull; Chính sách đặt phòng</a></li> */}
        <li><a href="/instruction">Hướng dẫn đặt phòng</a></li>
      </ul>
    </div>

    <div className="contact-section">
      <h3 className='section'>Liên Hệ</h3>
      <ul>
        <li><i className="fas fa-phone"></i> <a href="tel:0886479955">0886479955</a></li>
        <li><i className="fas fa-map-marker-alt"></i> Thôn Trán Voi, Phú Mãn, Quốc Oai, Hà Nội</li>
        <li><i className="fas fa-envelope"></i> <a href="mailto:viviangardenhomestay@gmail.com">viviangardenhomestay@gmail.com</a></li>
      </ul>
    </div>

  </div>
  <a href="https://www.facebook.com/viviangardenhomestay" target="_blank" rel="noopener noreferrer">
    <i className="fab fa-facebook fa-3x"></i>
  </a>
</section>

  );
};

export default Footer;
