import React from "react";
import Nav from "../component/NavBar";
import Footer from "../component/Footer";
import Service from "../component/service/Service";



const ServiceView = (props) =>{
    return(

      <div>
        <Nav/>
        <Service/>
        <Footer/>
      </div>
    )
}

export default ServiceView