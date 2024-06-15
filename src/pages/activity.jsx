import React from "react";
import Nav from "../component/NavBar";
import Footer from "../component/Footer";
import Activity from "../component/activity/Activity";



const ActivityView = (props) =>{
    return(

      <div>
        <Nav/>
        <Activity/>
        <Footer/>
      </div>
    )
}

export default ActivityView