import React from 'react';
import {MDBCard, MDBCol, MDBContainer, MDBRipple, MDBRow} from "mdb-react-ui-kit";

function Heading() {
    return (
        <MDBContainer>
            <MDBRow className={"mt-5 pt-5"}
                    style=
                        {{
                            backgroundImage:`url("https://w0.peakpx.com/wallpaper/92/878/HD-wallpaper-watermark-white-blocks-white-and-gray-background-white-background-white-white-blocks-gray-background-mermaid-nareda.jpg")`}}>
                <MDBCol className={"pt-5"} start>
                    <MDBCard className={"h-50"}>
                        <MDBRipple

                            className='bg-image hover-overlay shadow-1-strong rounded mb-2'
                            rippleTag='div'
                            rippleColor='light'
                        >
                            <img src={'https://picsum.photos/1000/1000?random'} className={"img-fluid"}
                                 alt={"rayanesh"}/>
                            <a href='#!'>
                                <div className='mask' style={{backgroundColor: 'rgba(123,222,163,0.2)'}}/>
                            </a>
                        </MDBRipple>
                    </MDBCard>
                </MDBCol>
                <MDBCol center>
                    <MDBCard className={"h-50"}>
                        <MDBRipple

                            className='bg-image hover-overlay shadow-1-strong rounded mb-2'
                            rippleTag='div'
                            rippleColor='light'
                        >
                            <img src={'https://picsum.photos/1000/1000?random'} className={"img-fluid"}
                                 alt={"rayanesh"}/>
                            <a href='#!'>
                                <div className='mask' style={{backgroundColor: 'rgba(123,222,163,0.2)'}}/>
                            </a>
                        </MDBRipple>
                    </MDBCard>
                </MDBCol>
                <MDBCol end>
                    <MDBCard className={"h-50"}>
                        <MDBRipple

                            className='bg-image hover-overlay shadow-1-strong rounded mb-2'
                            rippleTag='div'
                            rippleColor='light'
                        >
                            <img src={'https://picsum.photos/1000/1000?random'} className={"img-fluid"}
                                 alt={"rayanesh"}/>
                            <a href='#!'>
                                <div className='mask' style={{backgroundColor: 'rgba(123,222,163,0.2)'}}/>
                            </a>
                        </MDBRipple>
                    </MDBCard>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    );
}

export default Heading;