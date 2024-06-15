import React from "react";

const RoomTop = () => {
    return (
<section>
  <div className="overlay">
    <img className="room-image" src={`${process.env.PUBLIC_URL}/vivian-source/room2.jpg`} alt="Room" />
    <div className="text-overlay">Phòng</div>
  </div>

  <div className="card-grid">
    <div className="card">
      <a href="/group-room-view">
        <img className="card-image" src={`${process.env.PUBLIC_URL}/vivian-source/group2.jpg`} alt="group-room" />
        <div className="card-name">Phòng Tập Thể</div>
        {/* <div className="card-des">Tổng cộng có 2 Phòng Tập Thế và tối đa có thể chứa 24 Người</div> */}
      </a>
    </div>
    <div className="card">
      <a href="/single-room-view">
        <img className="card-image" src={`${process.env.PUBLIC_URL}/vivian-source/single1.jpg`} alt="single-room" />
        <div className="card-name">Phòng VIP</div>
        {/* <div className="card-des">Tổng cộng có 5 Phòng Riêng</div> */}
      </a>
    </div>
  </div>
</section>
    );
};

export default RoomTop;
