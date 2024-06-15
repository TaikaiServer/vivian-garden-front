import React from 'react';
// import './LocationSection.css';

const LocationSection = () => {
  return (
    <section className="location">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d874.1631527112581!2d105.5197921017884!3d20.94164450305548!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3134458e1914ba4b%3A0x9ce3f9b83cca6d22!2sVivian&#39;s%20Garden%20Homestay!5e0!3m2!1sen!2s!4v1716029593698!5m2!1sen!2s"
        width="600"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </section>
  );
};

export default LocationSection;
