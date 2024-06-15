import React, { useState } from 'react';
// import './EntertainmentSection.css';


const EntertainmentSection = () => {
  return (
    <section className="entertainment">

      <div className="overlay">
        <img className="room-image" src={`${process.env.PUBLIC_URL}/vivian-source/billy2.jpg`} alt="Room" />
        <div className="text-overlay">Giải Trí</div>
      </div>

      <div className="card entertainCard">
        <div id="carouselExampleFade1" className="carousel slide carousel-fade" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={`${process.env.PUBLIC_URL}/vivian-source/billy2.jpg`} className="d-block w-100" alt="Image 1"/>
            </div>
            <div className="carousel-item">
              <img src={`${process.env.PUBLIC_URL}/vivian-source/billy1.jpg`} className="d-block w-100" alt="Image 2"/>
            </div>
            <div className="carousel-item">
              <img src={`${process.env.PUBLIC_URL}/vivian-source/billy3.jpg`} className="d-block w-100" alt="Image 3"/>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade1" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade1" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        <div className="card-body">
          <h5 className="card-title" style={{ color: 'green' }}>Phòng Giải Trí</h5>
          <p className="card-text">Phòng có trang bị những hoạt động giải trí bao gồm Bi-a, Bi-lắc và Karaoke.</p>
        </div>
      </div>

      <div className="card entertainCard">
        <div id="carouselExampleFade2" className="carousel slide carousel-fade" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={`${process.env.PUBLIC_URL}/vivian-source/pool2.jpg`} className="d-block w-100" alt="Image 1"/>
            </div>
            <div className="carousel-item">
              <img src={`${process.env.PUBLIC_URL}/vivian-source/pool1.jpg`} className="d-block w-100" alt="Image 2"/>
            </div>
            <div className="carousel-item">
              <img src={`${process.env.PUBLIC_URL}/vivian-source/pool3.jpg`} className="d-block w-100" alt="Image 3"/>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade2" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade2" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        <div className="card-body">
          <h5 className="card-title" style={{ color: 'blue' }}>Bể Bơi</h5>
          <p className="card-text">Bể Bơi Vô Cực với khung cảnh thiên nhiên, có chiều dài 35m.</p>
        </div>
      </div>

      <div className="card entertainCard">
        <div id="carouselExampleFade3" className="carousel slide carousel-fade" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={`${process.env.PUBLIC_URL}/vivian-source/sauna1.jpeg`} className="d-block w-100" alt="Image 1"/>
            </div>
            <div className="carousel-item">
              <img src={`${process.env.PUBLIC_URL}/vivian-source/sauna2.jpeg`} className="d-block w-100" alt="Image 2"/>
            </div>
            <div className="carousel-item">
              <img src={`${process.env.PUBLIC_URL}/vivian-source/sauna3.jpg`} className="d-block w-100" alt="Image 3"/>
            </div>
            <div className="carousel-item">
              <img src={`${process.env.PUBLIC_URL}/vivian-source/sauna4.jpg`} className="d-block w-100" alt="Image 4"/>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade3" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade3" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        <div className="card-body">
          <h5 className="card-title" style={{ color: 'orange' }}>Xông Hơi</h5>
          <p className="card-text">Bao gồm 2 loại là Xông Hơi Khô và Xông Hơi Ướt</p>
        </div>
      </div>

    </section>
  );
};


export default EntertainmentSection;
