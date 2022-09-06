import React from 'react';
import {
    MDBCard,
    MDBCardBody, MDBCardImage, MDBCardLink,
    MDBCardSubTitle,
    MDBCardText,
    MDBCardTitle,
    MDBCol,
    MDBContainer,
    MDBRow
} from "mdb-react-ui-kit";

function ContactUs(props) {
    let contactUsImg = 'https://img.lovepik.com/background/20211022/large/lovepik-contact-us-background-image_500584282.jpg'
    return (
        <MDBContainer dir={'rtl'} className={'my-3'}>
            <center>
                    <MDBCard className={'w-75 shadow-3-strong'}>
                        <MDBCardBody>
                            <MDBRow>
                                <MDBCol>
                                    <MDBCardTitle>با ما تماس بگیرید</MDBCardTitle>
                                    <MDBCardSubTitle>ما</MDBCardSubTitle>
                                    <MDBCardText>
                                        کوکو
                                    </MDBCardText>
                                    <MDBCardLink href='#'>لینک</MDBCardLink>
                                </MDBCol>
                                <MDBCol>
                                    <MDBCardImage
                                        src={contactUsImg}
                                        fluid
                                        alt={"..."}
                                    />
                                </MDBCol>
                            </MDBRow>
                        </MDBCardBody>
                    </MDBCard>
            </center>
        </MDBContainer>
    );
}

export default ContactUs;