import React from "react";
import Nav from "../component/NavBar";
import Footer from "../component/Footer";
import SingleRoom from "../component/room/SingleRoom";



const SingleRoomView = (props) =>{
    return(

      <div>
        <Nav/>
        <SingleRoom/>
        <Footer/>
      </div>
    )
}

export default SingleRoomView