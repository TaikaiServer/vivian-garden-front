import React from 'react';
// import './GreetingSection.css';

const GreetingSection = () => {
  return (
    <section className="intro">
      <h2 className="greeting">Vivian's Garden Xin Chào !</h2>
      <div className="intro-box">
        {/* <img className="intro-img" src={`${process.env.PUBLIC_URL}/vivian-source/gate.jpg`} alt="Greeting Image" /> */}
        <p className="intro-msg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vestibulum id erat fermentum blandit. Donec sed felis et lorem tempus semper vestibulum et eros. Fusce blandit elementum purus ac pharetra. Donec ac enim metus. Aenean eu augue maximus, euismod justo in, pellentesque velit. Duis at mauris vel magna ultricies tincidunt. Aliquam viverra est dui, nec pulvinar magna dignissim quis. Vestibulum condimentum, enim vel dictum efficitur, nisi tellus
        </p>
        <img className="intro-img" src={`${process.env.PUBLIC_URL}/vivian-source/gate.jpg`} alt="Greeting Image" />

      </div>
      {/* <img className="intro-img" src={`${process.env.PUBLIC_URL}/vivian-source/gate.jpg`} alt="Greeting Image" /> */}

    </section>
  );
};

export default GreetingSection;
