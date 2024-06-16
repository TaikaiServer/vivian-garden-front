import React , {useEffect} from "react";
import { Link } from "react-router-dom";

const GroupRoom = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    return(
        <div className="single-room">
        <div className="overlay">
           <img className="room-image" src={`${process.env.PUBLIC_URL}/vivian-source/group2.jpeg`} alt="Room" />
           <div className="text-overlay">Phòng Tập Thể</div>
        </div>

        <h1 className="thongtin">Thông Tin Phòng</h1><hr/>

       <div className="room-container">
            <div className="room-explain">
                <ul className="room-info">
                    <li><p >Mỗi phòng tập thể gồm 2 giường tầng đôi 1.8m x 2m và 2 giường tầng đơn 1.2m x 2m.</p></li>
                    <li><p >Mỗi phòng ở được 12 người. Tối đa ở được 20 người/ phòng</p></li>
                    {/* <li><p >Thông tin phòng</p></li>
                    <li><p >Thông tin phòng</p></li> */}
                </ul>
                <div className="room-spec">
                <h3 >Tiện Nghi</h3>
                <ul className="room-features">
                    <li>Free Wi-Fi</li>
                    <li>Điều Hoà</li>
                    <li>Ấm Siêu Tốc</li>
                    <li>Máy Sấy tóc</li>          
                </ul>
            </div>
        </div>

        <div className="room-price">
            {/* <h2>2 Người / Đêm</h2> */}
            <Link to="/book-room">Đặt Phòng</Link>
        </div>
       </div>

        <div id="carouselExampleIndicators" class="carousel slide">

        <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5" aria-label="Slide 6"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="6" aria-label="Slide 7"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="7" aria-label="Slide 8"></button>
        </div>

        <div class="carousel-inner room-view">

            <div class="carousel-item active">
            <img src={`${process.env.PUBLIC_URL}/vivian-source/group3.jpeg`} class="d-block w-100" alt="..."/>
            </div>
            <div class="carousel-item">
            <img src={`${process.env.PUBLIC_URL}/vivian-source/group4.jpeg`} class="d-block w-100" alt="..."/>
            </div>
            <div class="carousel-item">
            <img src={`${process.env.PUBLIC_URL}/vivian-source/group5.jpeg`} class="d-block w-100" alt="..."/>
            </div>
            <div class="carousel-item">
            <img src={`${process.env.PUBLIC_URL}/vivian-source/group6.jpeg`} class="d-block w-100" alt="..."/>
            </div>
            <div class="carousel-item">
            <img src={`${process.env.PUBLIC_URL}/vivian-source/group7.jpeg`} class="d-block w-100" alt="..."/>
            </div>
            <div class="carousel-item">
            <img src={`${process.env.PUBLIC_URL}/vivian-source/group8.jpeg`} class="d-block w-100" alt="..."/>
            </div>
            <div class="carousel-item">
            <img src={`${process.env.PUBLIC_URL}/vivian-source/group9.jpeg`} class="d-block w-100" alt="..."/>
            </div>
            <div class="carousel-item">
            <img src={`${process.env.PUBLIC_URL}/vivian-source/room2.jpeg`} class="d-block w-100" alt="..."/>
            </div>


        </div>

        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>

        </div>


   </div>
  
    );
};

export default GroupRoom;