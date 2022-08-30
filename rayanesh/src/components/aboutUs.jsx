import React from 'react';
import {MDBCard, MDBCardBody, MDBCardImage, MDBCardText, MDBCardTitle, MDBCol, MDBRow} from "mdb-react-ui-kit";
function AboutUs(props) {
    let backgg = 'https://w0.peakpx.com/wallpaper/1019/567/HD-wallpaper-white-3d-polygons-background-geometric-abstraction-white-background-3d-honeycomb-white-honeycomb-background.jpg';
    return (
        <MDBCard className={"mt-5 w-75"}

                 style=
                     {{
                         backgroundImage:`url("${backgg}")`,backgroundSize:'cover',height:'25rem'}}>
            <MDBRow className='g-0 justify-content-end'>
                <MDBCol md='8'>
                    <MDBCardBody>
                        <MDBCardTitle className={"text-end"}>درباره ما</MDBCardTitle>
                        <MDBCardText className={"text-end"}>
                            لورم ایپسوم متن ساختگی با تولید سادگی
                            لورم ایپسوم متن ساختگی با تولید سادگی
                            لورم ایپسوم متن ساختگی با تولید سادگی
                            لورم ایپسوم متن ساختگی با تولید سادگی
                            لورم ایپسوم متن ساختگی با تولید سادگی
                        </MDBCardText>
                    </MDBCardBody>
                </MDBCol>
            </MDBRow>
        </MDBCard>
    );
}

export default AboutUs;