import React, { useState, useEffect } from 'react';
import axios from 'axios';

// import bookImage from '../../../public/vivian-source/book.jpg';

const BookingSection = () => {
    const [formData, setFormData] = useState({
        name: '',
        number: '',
        email: '',
        people: '',
        indate: '',
        outdate: '',
        option: '',
        note: '',
        singleRooms: 1 // Default to 1 for Phòng Lẻ
    });

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


    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:3000/api/book', formData);
            alert('Booking request submitted!');
        } catch (error) {
            console.error('There was an error!', error);
        }
    };



    return (
        <section className='booking-layout'>
            <div className="overlay">
                <img className="room-image" src={`${process.env.PUBLIC_URL}/vivian-source/book.jpeg`} alt="Room" />
                <div className="text-overlay">Đặt Phòng</div>
            </div>

            <div className="container d-flex justify-content-center align-items-center vh-100">
                <div className="card booking-card">
                    <div className="card-body">
                        <h5 className="card-title">Gửi Yêu Cầu Đặt Phòng</h5>
                        <p className="text-warning">Lưu ý: Đây là mục để quý khách gửi yêu cầu đặt phòng. Sau khi nhận được yêu cầu, chúng tôi sẽ liên hệ lại với quý khách trong vòng 1 ngày để xác nhận và chốt phòng. Xin cảm ơn!</p>

                        <form onSubmit={handleSubmit} className="booking-form">
                            <div className="mb-3">
                                <label className="form-label">Họ Và Tên</label>
                                <input type="text" name="name" className="form-control" onChange={handleChange} required />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Số Điện Thoại</label>
                                <input type="tel" name="number" className="form-control" onChange={handleChange} required />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Email</label>
                                <input type="email" name="email" className="form-control" onChange={handleChange} required />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Số Lượng Người</label>
                                <input type="number" name="people" className="form-control" onChange={handleChange} required />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Ngày Đặt Mong Muốn Check In</label>
                                <input type="date" name="indate" className="form-control" onChange={handleChange} required />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Ngày Mong Muốn Check Out</label>
                                <input type="date" name="outdate" className="form-control" onChange={handleChange} required />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Lựa Chọn Book Phòng</label>
                                <select name="option" className="form-control" onChange={handleChange} required>
                                    <option value="">Chọn một lựa chọn</option>
                                    <option value="Nguyen Căn">Nguyên Căn</option>
                                    <option value="6 Phòng">6 Phòng</option>
                                    <option value="Phòng Lẻ">Phòng Lẻ</option>
                                </select>
                            </div>
                            {formData.option === 'Phòng Lẻ' && (
                                <div className="mb-3">
                                    <label className="form-label">Số Lượng Phòng Lẻ</label>
                                    <input type="number" name="singleRooms" className="form-control" value={formData.singleRooms} onChange={handleChange} min="1" max="5" required />
                                </div>
                            )}
                            <div className="mb-3">
                                <label className="form-label">Ghi Chú</label>
                                <textarea name="note" className="form-control" onChange={handleChange}></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary">Gửi Yêu Cầu</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BookingSection;
