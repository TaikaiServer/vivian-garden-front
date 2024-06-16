import React from "react";
import NavBar from "../component/NavBar";
import WelcomeSection from "../component/home/Welcome";
import GreetingSection from "../component/home/Greeting";
import ExploreSection from "../component/home/Explore";
import VideoSection from "../component/home/Video";
import LocationSection from "../component/home/Location";
import Footer from "../component/Footer";
// import EntertainmentSection from "../component/entertain/Entertainment";
// import EntertainmentSection from "../component/home/Entertainment";

const HomePage = (props) =>{
    return(

      <div>
        <NavBar />
        <WelcomeSection />
        <GreetingSection />
        <ExploreSection />
        {/* <EntertainmentSection/> */}
        <VideoSection />
        <LocationSection />
        <Footer />
      </div>
    )
}

export default HomePage