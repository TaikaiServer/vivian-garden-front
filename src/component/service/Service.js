import React, {useEffect} from "react";

const Service = () => {

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
    <section>
      <div className="overlay">
        <img className="room-image" src={`${process.env.PUBLIC_URL}/vivian-source/service1.jpeg`} alt="Room" />
        <div className="text-overlay">Dịch Vụ</div>
      </div>
      
      <div className="service-container" style={{ display: 'flex', justifyContent: 'center' }}>
        <div className="service-content" style={{ padding: '1rem', maxWidth: '800px' }}>
            <h2>NHỮNG TIỆN ÍCH VÀ DỊCH VỤ MIỄN PHÍ :</h2>
            <ul>
            <li>✅ Sân BBQ và bếp nướng ngoài trời</li>
            <li>✅ Karaoke loa kéo</li>
            <li>✅ Bể bơi 100m2</li>
            <li>✅ Xông hơi khô, xông hơi ướt</li>
            <li>✅ Bí-a, Bi lắc</li>
            <li>✅ Khu vui chơi cho trẻ em</li>
            <li>✅ Bếp lẩu, bếp từ, bếp nướng BBQ</li>
            <li>✅ Đầy đủ khăn tắm, dầu gội. sữa tắm, nước rửa tay, cà phê, trà, bộ kem và bàn chải đánh răng.</li>
            <li>✅ Bếp đầy đủ bát đũa và xoong nồi.</li>
            <li>✅ Nồi cơm điện, nồi chiên không dầu , lò vi sóng</li>
            <li>✅ Tủ lạnh</li>
            </ul>

            <h2>DỊCH VỤ TÍNH PHÍ:</h2>
            <ul>
            <li>✅ Menu ăn sáng và ăn tối ( liên hệ trước lễ tân)</li>
            <li>✅ Than nướng BBQ giá 100k/túi</li>
            <li>✅ Củi đốt lửa trại giá 500k/bó (Ngô, khoai, mực nướng liên hệ trước lễ tân - giá theo thời vụ)</li>
            <li>✅ Phi dọn dẹp bữa ăn (tối, sáng) (không bắt buộc)</li>
            <ul>
                <li>- 300k cho đoàn dưới 22 người</li>
                <li>- 100k cho đoàn trên 22 người</li>
                <li>- 500k cho đoàn trên 30 người</li>
            </ul>
            </ul>

            <p>Lưu ý: Quý khách đến nghi dưỡng tại Homestay không được tự ý đi quá số người đăng ký, trường hợp khách mời bạn bè lên chơi. Homestay vẫn sẽ phụ thu theo quy định, kể cả khách không lưu trú qua đêm.</p>

            <p>Check Out: 12:00 AM • Check in: 14:00 AM</p>
        </div>
      </div>
    </section>
  );
};

export default Service;
