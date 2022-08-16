import React from 'react';
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage,
    MDBBtn,
    MDBRipple,
    MDBRow,
    MDBCol,
    MDBContainer
} from 'mdb-react-ui-kit';

const PopularBlogsSection = ({ blogs }) => {
    const bgColor = "#21A362"
    return (
        <MDBContainer>
            <MDBRow className='g-4' style={{ margin: "auto" }} bg="light">
                {
                    blogs.map((blog) => (
                        <MDBCol className='align-items-center col-12 col-lg-4' key={blog.id}>
                            <MDBCard className='align-items-center border-0'>
                                <MDBCardTitle>Card Title</MDBCardTitle>
                                <MDBCardSubtitle className="mb-2 text-muted">Card Subtitle</MDBCardSubtitle>
                                <MDBCardImage variant="top" src={"https://picsum.photos/1000/1000?random=" + blog.id} className="img-responsive rounded" />
                                <MDBCardText>
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                                    Ex iure delectus accusantium laudantium eaque! Odio error
                                    commodi expedita qui reiciendis vero placeat, fuga sit officia
                                    excepturi corrupti illum facere minus.
                                </MDBCardText>
                            </MDBCard>
                        </MDBCol>
                    )
                    )
                }
            </MDBRow>
        </MDBContainer>
    );
}

export default PopularBlogsSection;