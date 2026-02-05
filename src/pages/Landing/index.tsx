import React from 'react';

// Components
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
// import AboutUs from "./AboutUs";
import Services from "./Services";
import Footer from "./Footer";
import AboutUs from './AboutUs';

const Landing = () => {
    return (
        <React.Fragment>
            <div className="landing-page">
                <Navbar />
                <HeroSection />
                <Services />
                <AboutUs />
                <Footer />
            </div>
        </React.Fragment>
    );
};

export default Landing;
