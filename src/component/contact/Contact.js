import React, {useEffect} from "react";
import 'bootstrap-icons/font/bootstrap-icons.css'; // Import Bootstrap Icons CSS




const Contact = () =>{

    useEffect(() => {
        const hasReloaded = localStorage.getItem('hasReloaded');
    
        if (!hasReloaded) {
          localStorage.setItem('hasReloaded', 'true');
          window.scrollTo(0, 0);
          window.location.reload();
        }
    
        // Clean up the local storage when the component unmounts
        return () => {
          localStorage.removeItem('hasReloaded');
        };
      }, []);

    return(
        <section className="contact-info-section">

            <div className="overlay">
                <img className="room-image" src={`${process.env.PUBLIC_URL}/vivian-source/contact.jpeg`} alt="Room" />
                <div className="text-overlay">Liên Hệ</div>
            </div>

            <div className="contact-info">
                <div className="contact-item">
                    <i className="bi bi-telephone"></i>
                    <div className="contact-category">Số Điện Thoại</div>
                    <div className="contact-detail">0886479955</div>
                </div>
                <div className="contact-item">
                    <i className="bi bi-geo-alt"></i>
                    <div className="contact-category">Địa Chỉ</div>
                    <div className="contact-detail">Thôn Trán Voi, Phú Mãn, Quốc Oai, Hà Nội</div>
                </div>
                <div className="contact-item">
                    <i className="bi bi-envelope"></i>
                    <div className="contact-category">Email</div>
                    <div className="contact-detail">viviangardenhomestay@gmail.com</div>
                </div>
            </div>

            <div className="zalo-map-wrapper">
                <div className="zalo-container">
                    <img className="zalo" src={`${process.env.PUBLIC_URL}/vivian-source/zalo.jpeg`} alt="Zalo" />
                </div>
                <iframe
                    title="Location"
                    className="map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d874.1631527112581!2d105.5197921017884!3d20.94164450305548!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3134458e1914ba4b%3A0x9ce3f9b83cca6d22!2sVivian&#39;s%20Garden%20Homestay!5e0!3m2!1sen!2s!4v1716029593698!5m2!1sen!2s"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>


        </section>
    );
};

export default Contact;