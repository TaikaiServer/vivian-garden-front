// Nav.js
import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (

    <nav class="navbar bg-body-tertiary fixed-top">
      <div class="container-fluid">
      <img className='logo' src={`${process.env.PUBLIC_URL}/vivian-source/logo.jpeg`} alt="Logo" />
          <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
          <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasNavbarLabel">MENU</h5>
            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div class="offcanvas-body">
            <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li class="nav-item"><Link to="/">Trang Chủ</Link></li>
              <li class="nav-item"><Link to="/roomview">Xem Phòng</Link></li>
              <li class="nav-item"><Link to="/entertain">Giải Trí</Link></li>
              <li class="nav-item"><Link to="/activity">Sinh Hoạt</Link></li>
              <li class="nav-item"><Link to="/service">Dịch Vụ</Link></li>
              <li class="nav-item"><Link to="/contact">Liên Hệ</Link></li>
              <li class="nav-item"><Link to="/instruction">Hướng Dẫn Đặt Phòng</Link></li>
            </ul>

            <div className="mt-auto">
              <Link to="/book-room" className="book-link">Đặt Phòng</Link>
            </div>
      
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
