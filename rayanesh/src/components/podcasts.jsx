import React from 'react';
import {MDBCol, MDBContainer, MDBRow} from "mdb-react-ui-kit";

function Podcasts(props) {
    let bgImg = 'https://i.pinimg.com/originals/0f/d6/de/0fd6de2090b9cc7e0d02e7353071f901.jpg'
    let col1Img = 'https://image.shutterstock.com/image-vector/neon-city-font-sign-number-260nw-1113297791.jpg';
    let col2Img = 'https://image.shutterstock.com/image-vector/neon-city-font-sign-number-260nw-1113297791.jpg';
    let col3Img = 'https://image.shutterstock.com/image-vector/neon-city-font-sign-number-260nw-1113297791.jpg';
    return (
        <MDBContainer style=
                          {{backgroundImage: `url(${bgImg})`
                              ,backgroundSize: 'cover'
                              ,overflow: 'hidden'
        }} className={'my-3 p-4 center'} >
            < MDBRow className={'justify-content-end'}>
                < MDBCol md={5}>
                    <img
                        src={col1Img} alt={'img 1'}/>
                </MDBCol>
            </MDBRow>
            <MDBRow className={'justify-content-center'}>
                <MDBCol md={5}>
                    <img
                        src={col2Img} alt={'img 2'}/>
                </MDBCol>
            </MDBRow>
            <MDBRow className={'justify-content-start'}>
                <MDBCol md={5}>
                    <img
                        src={col3Img} alt={'img 3'}/>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    );
}

export default Podcasts;