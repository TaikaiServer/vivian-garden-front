import React from "react";
import Nav from "../component/NavBar";
import Footer from "../component/Footer";
import BookingSection from "../component/booking/Booking";



const BookingView = (props) =>{
    return(

      <div>
        <Nav/>
        <BookingSection/>
        <Footer/>
      </div>
    )
}

export default BookingView