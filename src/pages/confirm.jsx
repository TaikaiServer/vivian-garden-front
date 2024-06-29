import React, {useEffect} from "react";
import Nav from "../component/NavBar";
import Footer from "../component/Footer";
import { Link } from 'react-router-dom';



const ConfirmView = (props) => {
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

    return (
        <div>
            <Nav />
            <div className="overlay">
                <img className="room-image" src={`${process.env.PUBLIC_URL}/vivian-source/confirm.jpeg`} alt="Room" />
                <div className="text-overlay" style={{ fontSize: '2.2rem' }}></div>
            </div>

            <div className="confirmation-container">
                <div className="confirmation-content">
                    <div className="tick-mark">✓</div>
                    <h2>Chúng tôi đã nhận được yêu cầu đặt phòng!</h2>
                    <p>Chúng tôi sẽ liên hệ với quý khách sớm nhất có thể trong vòng 1 ngày để trao đổi thêm trước khi chốt phòng cho quý khách.</p>
                    <p>Cảm ơn quý khách đã chọn Vivian's Garden.</p>
                    <Link to="/" className="return-btn">Quay Lại Trang Chủ</Link>
                </div>
            </div>

           

            <Footer />
        </div>
    );
}



export default ConfirmView