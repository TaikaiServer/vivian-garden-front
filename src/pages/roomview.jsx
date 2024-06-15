import React from "react";
import Nav from "../component/NavBar";
import RoomTop from "../component/room/Room";
import Footer from "../component/Footer";


const RoomView = (props) =>{
    return(

      <div>
        <Nav/>
        <RoomTop/>
        <Footer/>
      </div>
    )
}

export default RoomView