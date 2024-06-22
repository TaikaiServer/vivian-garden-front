import React, {useEffect} from "react";
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

  useEffect(() => {
    const hasReloaded = localStorage.getItem('hasReloaded');

    if (!hasReloaded) {
      localStorage.setItem('hasReloaded', 'true');
      window.scrollTo(0, 0);
      window.location.reload();
    }

    // Clean up the local storage when the component unmounts
    return () => {
      localStorage.removeItem('hasReloaded');
    };
  }, []);

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