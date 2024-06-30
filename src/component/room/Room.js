import React, {useEffect} from "react";
import { Link } from 'react-router-dom';


const RoomTop = () => {

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
    <img className="room-image" src={`${process.env.PUBLIC_URL}/vivian-source/room2.jpeg`} alt="Room" loading="lazy" />
    <div className="text-overlay">Phòng</div>
  </div>

  <div className="card-grid">
    <div className="card">


      {/* <a href="/group-room-view">
        <img className="card-image" src={`${process.env.PUBLIC_URL}/vivian-source/group2.jpeg`} alt="group-room" />
        <div className="card-name">Phòng Tập Thể</div>
      </a> */}

      <Link to="/group-room-view"> 
        <img className="card-image" src={`${process.env.PUBLIC_URL}/vivian-source/group2.jpeg`} alt="group-room" loading="lazy" />
        <div className="card-name">Phòng Tập Thể</div>
      </Link>




    </div>
   

    <div className="card">
      {/* <a href="/single-room-view">
        <img className="card-image" src={`${process.env.PUBLIC_URL}/vivian-source/single1.jpeg`} alt="single-room" />
        <div className="card-name">Phòng VIP</div>
      </a> */}

      <Link to="/single-room-view"> 
        <img className="card-image" src={`${process.env.PUBLIC_URL}/vivian-source/single1.jpeg`} alt="single-room" loading="lazy"/>
        <div className="card-name">Phòng VIP</div>
      </Link>
    </div>
  </div>
</section>
    );
};

export default RoomTop;
