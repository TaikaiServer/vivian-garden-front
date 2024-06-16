import React from "react";
import Nav from "../component/NavBar";
import Footer from "../component/Footer";


const InsView = (props) => {
    return (
        <div>
            <Nav />
            <div className="overlay">
                <img className="room-image" src={`${process.env.PUBLIC_URL}/vivian-source/explore.jpeg`} alt="Room" />
                <div className="text-overlay" style={{ fontSize: '2.2rem' }}>Hướng Dẫn Đặt Phòng</div>
            </div>

            <div className="content-container" style={{ display: 'flex', justifyContent: 'center' }}>
                <div className="content" style={{ padding: '1rem', maxWidth: '800px' }}>
                    <h1 className="hello">🏡VIVIANS GARDEN HOMESTAY 🏡</h1>
                    <p>view Thung lũng có tổng diện tích 2.500 m2 toạ lạc tại thôn Trán Voi, xã Phú Mãn, huyện Quốc Oai, Hà Nội. Cách trung tâm Hà Nội 40km. Đi từ BigC Thăng Long đến nơi đúng 33 phút.</p>

                    <h2>Nguyên căn: 7 phòng ngủ vệ sinh khép kín trang bị đầy đủ.</h2>
                    <p>👉 2 phòng tập thể và 5 phòng Vip 1 giường 1.8m x 2m.</p>
                    <p>👉 Mỗi phòng tập thể gồm 2 giường tầng đôi 1.8m x 2m và 2 giường tầng đơn 1.2m x 2m. Mỗi phòng ở được 12 người. Tối đa ở được 20 người/ phòng.</p>

                    <h2>Lựa chọn 1</h2>
                    <p>Mở 6P dành cho 22 khách trở xuống</p>
                    <ul>
                        <li>Từ thứ hai đến thứ năm: 4.990.000 vnđ</li>
                        <li>Thứ sáu và CN: 6.990.000 vnd</li>
                        <li>Thứ bảy: 8.990.000 vnđ</li>
                    </ul>
                    <p>✅ Phụ thu 300k/ng từ người thứ 23.</p>
                    <p>✅ Chỉ Free tối đa 5 trẻ em dưới 5 tuổi, ngủ chung với bố mẹ ở 5 phòng VIP</p>
                    <p>✅ Trẻ Vượt quá số lượng free phụ thu 100k/ bé.</p>
                    <p>✅ Trẻ trên 6 tuổi tính phí như người lớn.</p>

                    <h2>Lựa chọn 2</h2>
                    <p>Mở 7PN</p>
                    <ul>
                        <li>Từ thứ hai đến thứ năm: 6.990.000 vnđ</li>
                        <li>Thứ sáu và CN: 8.990.000 vnd</li>
                        <li>Thứ bảy: 10.990.000 vnđ</li>
                    </ul>
                    <p>Tiêu chuẩn 34 người. Tối đa 50 người (mỗi phòng tập thể kê thêm đệm và chăn gối).</p>
                    <p>✅ Phụ thu 300k/ng từ người thứ 35.</p>
                    <p>✅ Chỉ Free tối đa 5 trẻ em dưới 5 tuổi, ngủ chung với bố mẹ ở 5 phòng VIP</p>
                    <p>✅ Trẻ Vượt quá số lượng free phụ thu 100k/ bé.</p>
                    <p>✅ Trẻ trên 6 tuổi tính phí như người lớn.</p>

                    <h2>BÁN LẺ PHÒNG VỚI CÁC NGÀY KHÔNG CÓ KHÁCH ĐOÀN:</h2>
                    <h3>Thứ 2 đến Thứ 5:</h3>
                    <ul>
                        <li>Phòng VIP Kingsize bed: 790.000 vnđ/p</li>
                        <li>Phòng tập thể: 2.990.000 vnđ/p</li>
                    </ul>

                    <h3>Thứ 6 và Chủ nhật</h3>
                    <ul>
                        <li>Phòng VIP Kingsize bed: 990.000 vnđ/p</li>
                        <li>Phòng tập thể : 3.590.000 vnđ/p</li>
                    </ul>
                    <p>✅ Phi thêm giờ 200k/ tiếng/phòng nếu ngày trước và ngày sau không có khách</p>
                    <p>✅ Không nhận nếu khách đi quá 50 người - Với đoàn đông thì khách xác định ở 3 người/ giường rộng 1.8m x 2m</p>
                </div>
            </div>

            <Footer />
        </div>
    );
}



export default InsView