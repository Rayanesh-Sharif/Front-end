import React from 'react';
import Heading from "../../components/heading";
import NavbarSection from "../../components/NavbarSection";
import AboutUs from "../../components/aboutUs";
import LandingBlogs from "../../components/landingBlogs";
import Gallery from "../../components/Gallery";
import Footer from "../../components/Footer";
import ContactUs from "../../components/contactUs";
import JoinUs from "../../components/joinUs";
import Podcasts from "../../components/podcasts";

function LandingPage(props) {
    // let backgg = 'https://w0.peakpx.com/wallpaper/92/878/HD-wallpaper-watermark-white-blocks-white-and-gray-background-white-background-white-white-blocks-gray-background-mermaid-nareda.jpg';
    return (
        <div className="container-fluid"
             // style=
             //     {{
             //         backgroundImage:`url("${backgg}")`,backgroundSize:'cover'}}
        >

            {/*navbar section*/}
            <div className="row">
                <NavbarSection loggedIn={true} Name={"asghar"}/>
            </div>

            {/*heading section*/}
            <div className="row justify-content-center align-items-center text-center">
                <Heading/>
            </div>

            {/*about us section*/}
            <div className="row justify-content-center" >
                <AboutUs/>
            </div>

            {/*blogs section*/}
            <div className="row justify-content-center" >
                {/*done but needs the blogs to be shown!!!*/}
                <LandingBlogs/>
            </div>

            {/*galery section*/}
            <div className="row justify-content-center mt-5 text-center" >
                <Gallery/>
            </div>


            {/*podcasts section*/}
            <div className="row justify-content-center" >
                <Podcasts/>
            </div>

            {/*join us section*/}
            <div className="row justify-content-center" >
                <JoinUs/>
            </div>

            {/*contact us section*/}
            <div className="row justify-content-center" >
                <ContactUs/>
            </div>

            {/*footer section*/}
            <div className="row justify-content-center" >
                <Footer/>
            </div>

        </div>
    );
}

export default LandingPage;