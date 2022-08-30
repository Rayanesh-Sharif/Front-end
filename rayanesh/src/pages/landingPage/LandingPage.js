import React from 'react';
import Heading from "../../components/heading";
import NavbarSection from "../../components/NavbarSection";
import AboutUs from "../../components/aboutUs";
import LandingBlogs from "../../components/landingBlogs";

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
                <LandingBlogs/>
            </div>

            {/*/!*galery section*!/*/}
            {/*<div className="row justify-content-center" >*/}
            {/*    <Heading/>*/}
            {/*</div>*/}

            {/*/!*podcasts section*!/*/}
            {/*<div className="row justify-content-center" >*/}
            {/*    <Heading/>*/}
            {/*</div>*/}

            {/*/!*join us section*!/*/}
            {/*<div className="row justify-content-center" >*/}
            {/*    <Heading/>*/}
            {/*</div>*/}

            {/*/!*contact us section*!/*/}
            {/*<div className="row justify-content-center" >*/}
            {/*    <Heading/>*/}
            {/*</div>*/}

            {/*/!*footer section*!/*/}
            {/*<div className="row justify-content-center" >*/}
            {/*    <Heading/>*/}
            {/*</div>*/}

        </div>
    );
}

export default LandingPage;