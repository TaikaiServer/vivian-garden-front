import React from 'react';
// import './WelcomeSection.css';

const WelcomeSection = () => {
  return (
<section className="bg-container">
  <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src={`${process.env.PUBLIC_URL}/vivian-source/main.jpg`} class="d-block w-100" alt="Image1"/>
      </div>
      <div class="carousel-item">
        <img src={`${process.env.PUBLIC_URL}/vivian-source/main2.jpg`} class="d-block w-100" alt="Image2"/>
      </div>
      <div class="carousel-item">
        <img src={`${process.env.PUBLIC_URL}/vivian-source/main3.jpg`} class="d-block w-100" alt="Image3"/>
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</section> 

  

  



  );
};

export default WelcomeSection;
