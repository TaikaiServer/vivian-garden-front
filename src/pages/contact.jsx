import React from "react";
import Nav from "../component/NavBar";
import Footer from "../component/Footer";
import Contact from "../component/contact/Contact";



const ContactView = (props) =>{
    return(

      <div>
        <Nav/>
        <Contact/>
        <Footer/>
      </div>
    )
}

export default ContactView