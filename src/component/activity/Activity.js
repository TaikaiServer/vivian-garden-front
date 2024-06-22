import React, {useEffect} from "react";

const Activity = () => {

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
    <section className="custom">
      <div className="overlay">
        <img className="room-image" src={`${process.env.PUBLIC_URL}/vivian-source/activity.jpeg`} alt="Room" />
        <div className="text-overlay">Sinh Hoạt</div>
      </div>

      <div className="activities">
      <div className="card entertainCard">
        <div id="carouselExampleFade1" className="carousel slide carousel-fade" data-bs-ride="carousel">

        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleFade1" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleFade1" data-bs-slide-to="1" aria-label="Slide 2"></button>           
          <button type="button" data-bs-target="#carouselExampleFade1" data-bs-slide-to="2" aria-label="Slide 3"></button>
          <button type="button" data-bs-target="#carouselExampleFade1" data-bs-slide-to="3" aria-label="Slide 4"></button>
          <button type="button" data-bs-target="#carouselExampleFade1" data-bs-slide-to="4" aria-label="Slide 5"></button>
        </div>

       
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={`${process.env.PUBLIC_URL}/vivian-source/dining1.jpeg`} className="d-block w-100" alt="Image1"/>
            </div>
            <div className="carousel-item">
            <img src={`${process.env.PUBLIC_URL}/vivian-source/dining2.jpeg`} className="d-block w-100" alt="Image2"/>
            </div>
            <div className="carousel-item">
            <img src={`${process.env.PUBLIC_URL}/vivian-source/dining4.jpeg`} className="d-block w-100" alt="Image3"/>
            </div>
            <div className="carousel-item">
            <img src={`${process.env.PUBLIC_URL}/vivian-source/service1.jpeg`} className="d-block w-100" alt="Image4"/>
            </div>
            <div className="carousel-item">
            <img src={`${process.env.PUBLIC_URL}/vivian-source/dining3.jpeg`} className="d-block w-100" alt="Image5"/>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade1" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade1" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        <div className="card-body">
          <h5 className="card-title">Phòng Ăn Tập Thể</h5>
          <p className="card-text">Phòng ăn được trang bị đầy đủ bát đũa, các dụng cụ nấu ăn, và tủ lạnh để quý khách có thể bảo quản thực phẩm mang theo.</p>
        </div>
      </div>

      <div className="card entertainCard">
        <div id="carouselExampleFade2" className="carousel slide carousel-fade" data-bs-ride="carousel">

        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleFade2" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleFade2" data-bs-slide-to="1" aria-label="Slide 2"></button>           
          <button type="button" data-bs-target="#carouselExampleFade2" data-bs-slide-to="2" aria-label="Slide 3"></button>
          <button type="button" data-bs-target="#carouselExampleFade2" data-bs-slide-to="3" aria-label="Slide 4"></button>
        </div>

        <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={`${process.env.PUBLIC_URL}/vivian-source/bbq1.jpeg`} className="d-block w-100" alt="Image1"/>
            </div>
            <div className="carousel-item">
              <img src={`${process.env.PUBLIC_URL}/vivian-source/bbq2.jpeg`} className="d-block w-100" alt="Image2"/>
            </div>
            <div className="carousel-item">
              <img src={`${process.env.PUBLIC_URL}/vivian-source/bbq3.jpeg`} className="d-block w-100" alt="Image3"/>
            </div>
            <div className="carousel-item">
              <img src={`${process.env.PUBLIC_URL}/vivian-source/bbq4.jpeg`} className="d-block w-100" alt="Image4"/>
            </div>
          </div>

          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade2" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade2" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        <div className="card-body">
          <h5 className="card-title" >Khu Vực BBQ</h5>
          <p className="card-text">Khu vực BBQ là địa điểm lý tưởng để phục vụ các đoàn khách có nhu cầu thưởng thức các món nướng và lẩu. Với không gian thoáng mát, rộng rãi, khu vực này được thiết kế để mang đến trải nghiệm ẩm thực ngoài trời tuyệt vời.</p>
        </div>
      </div>

      <div className="card entertainCard">
        <div id="carouselExampleFade3" className="carousel slide carousel-fade" data-bs-ride="carousel">

        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleFade3" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleFade3" data-bs-slide-to="1" aria-label="Slide 2"></button>           
      
        </div>

          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={`${process.env.PUBLIC_URL}/vivian-source/fire1.jpeg`} className="d-block w-100" alt="Image1"/>
            </div>
            <div className="carousel-item">
              <img src={`${process.env.PUBLIC_URL}/vivian-source/fire2.jpeg`} className="d-block w-100" alt="Image2"/>
            </div>
         
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade3" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade3" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        <div className="card-body">
          <h5 className="card-title" >Lửa Trại</h5>
          <p className="card-text">Khu vực lửa trại là một nơi tuyệt vời để tận hưởng những buổi tối ấm cúng và đáng nhớ cùng gia đình và bạn bè. Được thiết kế trong không gian thoáng đãng và gần gũi với thiên nhiên.</p>
        </div>
      </div>



      <div className="card entertainCard">
        <div id="carouselExampleFade3" className="carousel slide carousel-fade" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={`${process.env.PUBLIC_URL}/vivian-source/team.jpeg`} className="d-block w-100" alt="Image1"/>
            </div>
      
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade3" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade3" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        <div className="card-body">
          <h5 className="card-title">Sân Chơi</h5>
          <p className="card-text">Sân chơi có diện tích rộng 300m², đủ sức chứa từ 4 đến 50 người, mang đến không gian lý tưởng cho nhiều hoạt động đa dạng. Được thiết kế linh hoạt, sân chơi có thể phục vụ cho các mục đích khác nhau như teambuilding, thể thao, hoặc các sự kiện nhóm khác.</p>
        </div>
      </div>
      </div>
    </section>
  );
};

export default Activity;
