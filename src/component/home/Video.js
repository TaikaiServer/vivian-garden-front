import React from 'react';
// import './VideoSection.css';

const VideoSection = () => {
  return (
    <section className="video">
      <iframe
        src="https://www.youtube.com/embed/1Kgp7g3qzyQ?si=CBus3c5bfBcIO3Uk"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </section>
  );
};

export default VideoSection;
