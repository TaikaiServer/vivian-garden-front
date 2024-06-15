import React, { useState, useEffect } from 'react';
import axios from 'axios';

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

    const [selectedDate, setSelectedDate] = useState(null);
    const [singleRooms, setSingleRooms] = useState(null);
    const [groupRooms, setGroupRooms] = useState(null);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('https://vivian-garden-back.vercel.app/api/book', formData);
            alert('Booking request submitted!');
        } catch (error) {
            console.error('There was an error!', error);
        }
    };

    const handleDateChange = (e) => {
        const date = e.target.value;
        setSelectedDate(date);
        axios.get(`https://vivian-garden-back.vercel.app/api/availability/${date}`).then((response) => {
            setSingleRooms(response.data.singleRooms);
            setGroupRooms(response.data.groupRooms);
        }).catch(error => {
            console.error("There was an error fetching the availability for this date!", error);
            setSingleRooms(null);
            setGroupRooms(null);
        });
    };

    const renderDateOptions = () => {
        const today = new Date();
        const options = [];
        for (let i = 0; i < 30; i++) {
            const date = new Date(today);
            date.setDate(today.getDate() + i);
            options.push(date.toISOString().split('T')[0]);
        }
        return options.map(date => <option key={date} value={date}>{date}</option>);
    };

    return (
        <div>
            <div className="overlay">
                <img className="room-image" src={`${process.env.PUBLIC_URL}/vivian-source/book.jpg`} alt="Room" />
                <div className="text-overlay">Đặt Phòng</div>
            </div>

            <div className="container">
                <h1>Check Room Availability</h1>

                <div className="mb-3">
                    <label className="form-label">Select Date</label>
                    <select className="form-control" onChange={handleDateChange}>
                        <option value="">Select a date</option>
                        {renderDateOptions()}
                    </select>
                </div>

                {selectedDate && (
                    <div>
                        <h2>Availability for {new Date(selectedDate).toLocaleDateString()}</h2>
                        {singleRooms !== null && groupRooms !== null ? (
                            <div>
                                <p>Single Rooms Available: {singleRooms}</p>
                                <p>Group Rooms Available: {groupRooms}</p>
                            </div>
                        ) : (
                            <p>Loading availability...</p>
                        )}
                    </div>
                )}
            </div>

            <div className="container d-flex justify-content-center align-items-center vh-100">
                <div className="card" style={{ width: '30rem' }}>
                    <div className="card-body">
                        <h5 className="card-title">Gửi Yêu Cầu Đặt Phòng</h5>

                        <form onSubmit={handleSubmit}>
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
        </div>
    );
};

export default BookingSection;
