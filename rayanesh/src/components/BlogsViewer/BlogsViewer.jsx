import {
    MDBCol,
    MDBContainer,
    MDBRow,
    MDBCard,
    MDBCardTitle,
    MDBCardBody,
    MDBCardText,
    MDBCardFooter
} from "mdb-react-ui-kit";
import './BlogsViewer.scss';
import {relativeDate} from "../../helpers/relativeDate";
import LazyLoad from 'react-lazy-load';
import {BsCalendar2Event} from 'react-icons/bs';
import {BiTime} from 'react-icons/bi';

const BlogsViewer = ({blogs}) => {
    console.log('blogs', blogs);
    return (
        <MDBContainer>
            {
                blogs.map((blog) => (
                    <MDBCard className='blog g-0 w-75 mx-auto' key={blog.id}>
                        <MDBRow>
                            <MDBCol className='col-3'>
                                <LazyLoad>
                                    <img className='image-fluid mx-auto d-block blog-img'
                                         src={"https://picsum.photos/1000/1000?random=" + (blog.id + 3)}
                                         alt={blog.title}></img>
                                </LazyLoad>
                            </MDBCol>
                            <MDBCol className='col-9'>
                                <MDBCardTitle className='h1 text-end'
                                              style={{direction: "rtl"}}>{blog.title}</MDBCardTitle>
                                <MDBCardBody className='m-0 p-0'>
                                    <MDBCardText className="text-muted p text">{(blog.description)}</MDBCardText>
                                    <MDBCardFooter className="text-end writer no-padding">
                                        <MDBRow style={{direction: 'rtl'}}>
                                            <MDBCol className='p-0 col-2 col-lg-1 '>
                                                <img className='image-fluid d-block profile' src={blog.user.image}
                                                     alt={'loading'}/>
                                            </MDBCol>
                                            <MDBCol className='p-1 col-6 col-lg-3 meta'>
                                                <div className='d-flex writer'>
                                                    {blog.user.name}
                                                </div>
                                                <div>
                                                    <small
                                                        className='text-muted'>
                                                        <BsCalendar2Event/>
                                                        {
                                                            `\t${relativeDate(new Date(blog.date))}`
                                                        }
                                                        <BiTime/>
                                                        {
                                                            `\t${blog.read_time}`
                                                        }
                                                    </small>
                                                </div>
                                            </MDBCol>
                                        </MDBRow>
                                    </MDBCardFooter>
                                </MDBCardBody>
                            </MDBCol>
                        </MDBRow>
                    </MDBCard>
                ))
            }
        </MDBContainer>
    )
}

export default BlogsViewer;