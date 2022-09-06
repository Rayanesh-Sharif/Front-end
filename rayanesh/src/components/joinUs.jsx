import React from 'react';
import {
    MDBBtn,
    MDBCard,
    MDBCardBody, MDBCardFooter,
    MDBCardHeader, MDBCardText,
    MDBCardTitle,
    MDBCol,
    MDBContainer,
    MDBRow
} from "mdb-react-ui-kit";

function JoinUs(props) {
    let joinUsImg = 'https://png.pngtree.com/png-clipart/20220729/original/pngtree-join-us-design-element-png-image_8438239.png'
    return (
        <MDBContainer className={'w-100 bg-dark my-2'} dir={'rtl'}>
            <MDBRow className={'align-items-center justify-content-center'}>
                <MDBCol md={7} className={'align-items-center'}>
                    <center className={'text-center'}>
                        <MDBCard alignment='center' background={'transparent'} className={'text-white'}>
                            <MDBCardHeader>Featured</MDBCardHeader>
                            <MDBCardBody>
                                <MDBCardTitle>Special title treatment</MDBCardTitle>
                                <MDBCardText>With supporting text below as a natural lead-in to additional content.</MDBCardText>
                                <MDBBtn href='#'>join us</MDBBtn>
                            </MDBCardBody>
                        </MDBCard>
                    </center>
                </MDBCol>
                <MDBCol md={5}>
                    <img alt={'join us'}
                         className={'img-fluid'}
                         src={joinUsImg}
                    />
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    );
}

export default JoinUs;