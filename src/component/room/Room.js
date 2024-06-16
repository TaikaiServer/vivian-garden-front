import React, {useEffect} from "react";
import { Link } from 'react-router-dom';


const RoomTop = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

    return (
<section>
  <div className="overlay">
    <img className="room-image" src={`${process.env.PUBLIC_URL}/vivian-source/room2.jpeg`} alt="Room" />
    <div className="text-overlay">Phòng</div>
  </div>

  <div className="card-grid">
    <div className="card">


      <a href="/group-room-view">
        <img className="card-image" src={`${process.env.PUBLIC_URL}/vivian-source/group2.jpeg`} alt="group-room" />
        <div className="card-name">Phòng Tập Thể</div>
      </a>





    </div>
    <Link to="/group-room-view">Sinh Hoạt</Link>

    <div className="card">
      <a href="/single-room-view">
        <img className="card-image" src={`${process.env.PUBLIC_URL}/vivian-source/single1.jpeg`} alt="single-room" />
        <div className="card-name">Phòng VIP</div>
      </a>
    </div>
  </div>
</section>
    );
};

export default RoomTop;
