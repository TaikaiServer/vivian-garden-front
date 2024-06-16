import React, {useEffect} from "react";
import { Link } from "react-router-dom";


const SingleRoom = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    return(
        <div className="single-room">
        <div className="overlay">
           <img className="room-image" src={`${process.env.PUBLIC_URL}/vivian-source/single1.jpeg`} alt="Room" />
           <div className="text-overlay">Phòng VIP</div>
        </div>

        <h1 className="thongtin">Thông Tin Phòng</h1><hr/>

       <div className="room-container">
            <div className="room-explain">
                <ul className="room-info">
                    <li><p >Phòng Riêng với Kingsize Bed dành cho 2 người</p></li>
                    {/* <li><p >Thông tin phòng</p></li>
                    <li><p >Thông tin phòng</p></li>
                    <li><p >Thông tin phòng</p></li> */}
                </ul>
                <div className="room-spec">
                <h3 >Tiện Nghi</h3>
                <ul className="room-features">
                    <li>Free Wi-Fi</li>
                    <li>Điều Hoà</li>
                    <li>Ấm Siêu Tốc</li>
                    <li>Máy Sấy tóc</li>   
                    <li>Bàn Ghế Ngoài Trời</li>          
       
                </ul>
            </div>
        </div>

        <div className="room-price">
            {/* <h2>500.000 vnd | 2 Person | Night</h2> */}
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
            <img src={`${process.env.PUBLIC_URL}/vivian-source/single2.jpeg`} class="d-block w-100" alt="..."/>
            </div>
            <div class="carousel-item">
            <img src={`${process.env.PUBLIC_URL}/vivian-source/single3.jpeg`} class="d-block w-100" alt="..."/>
            </div>
            <div class="carousel-item">
            <img src={`${process.env.PUBLIC_URL}/vivian-source/single4.jpeg`} class="d-block w-100" alt="..."/>
            </div>
            <div class="carousel-item">
            <img src={`${process.env.PUBLIC_URL}/vivian-source/single5.jpeg`} class="d-block w-100" alt="..."/>
            </div>
            <div class="carousel-item">
            <img src={`${process.env.PUBLIC_URL}/vivian-source/single6.jpeg`} class="d-block w-100" alt="..."/>
            </div>
            <div class="carousel-item">
            <img src={`${process.env.PUBLIC_URL}/vivian-source/single7.jpeg`} class="d-block w-100" alt="..."/>
            </div>
            <div class="carousel-item">
            <img src={`${process.env.PUBLIC_URL}/vivian-source/single9.jpeg`} class="d-block w-100" alt="..."/>
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

export default SingleRoom