import React from "react";
import Nav from "../component/NavBar";
import Footer from "../component/Footer";
import EntertainmentSection from "../component/entertain/Entertainment";



const EntertainView = (props) =>{
    return(

      <div>
        <Nav/>
        <EntertainmentSection/>
        <Footer/>
      </div>
    )
}

export default EntertainView