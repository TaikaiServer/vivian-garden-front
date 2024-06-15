import React from "react";
import Nav from "../component/NavBar";
import Footer from "../component/Footer";
import GroupRoom from "../component/room/GroupRoom";



const GroupRoomView = (props) =>{
    return(

      <div>
        <Nav/>
        <GroupRoom/>
        <Footer/>
      </div>
    )
}

export default GroupRoomView