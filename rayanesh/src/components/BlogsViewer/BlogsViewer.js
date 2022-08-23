import {
    MDBCol,
    MDBIcon,
    MDBContainer,
    MDBRow,
    MDBCard,
    MDBCardTitle,
    MDBCardBody,
    MDBCardText,
    MDBCardFooter
} from "mdb-react-ui-kit";
import './BlogsViewer.scss';

const BlogsViewer = ({blogs}) => {
    return (
        <MDBContainer>
            {
                blogs.map((blog) => (
                    <MDBCard className='blog g-0' key={blog.id}>
                        <MDBRow>
                            <MDBCol className='col-3'>
                                <img className='image-fluid mx-auto d-block'
                                     src={"https://picsum.photos/1000/1000?random=" + (blog.id + 3)}
                                     alt={blog.title}></img>
                            </MDBCol>
                            <MDBCol className='col-9'>
                                <MDBCardTitle className='h1'>{blog.title}</MDBCardTitle>
                                <MDBCardBody className='m-0 p-0'>
                                    <MDBCardText className="text-muted p text">{(blog.description)}</MDBCardText>
                                    <MDBCardFooter className="text-end writer no-padding">
                                        <small>{blog.writer}</small>
                                        <MDBIcon fas icon="chess"/>
                                    </MDBCardFooter>
                                </MDBCardBody>
                            </MDBCol>
                        </MDBRow>
                    </MDBCard>
                ))
            }
        </MDBContainer>
    );
}

export default BlogsViewer;