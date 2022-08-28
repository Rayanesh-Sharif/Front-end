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
import useParallelFetch from "../useParallelFetch";
import RelativeDate from "../RelativeDate";

const BlogsViewer = ({blogs, isEnable}) => {

    //iterate ove blogs and save user id of each blog to array
    const userIds = blogs.map(blog => blog.user_id);

    //use parallel fetch to get user data of each blog and status of fetching
    const {users, isSuccess} = useParallelFetch('http://localhost:3000/users', userIds, isEnable);

    //map each blog to its user if users are fetched successfully
    if (isSuccess) {
        blogs = blogs.map(blog => {
            const user = users.find(user => user.id === blog.user_id);
            return {...blog, user};
        }).sort((a, b) => b.id - a.id);
    }

    return isSuccess ? (
        <MDBContainer>
            {
                blogs.map((blog) => (
                    <MDBCard className='blog g-0 w-75 mx-auto' key={blog.id}>
                        <MDBRow>
                            <MDBCol className='col-3'>
                                <img className='image-fluid mx-auto d-block blog-img'
                                     src={"https://picsum.photos/1000/1000?random=" + (blog.id + 3)}
                                     alt={blog.title}></img>
                            </MDBCol>
                            <MDBCol className='col-9'>
                                <MDBCardTitle className='h1 text-end' style={{direction:"rtl"}}>{blog.title}</MDBCardTitle>
                                <MDBCardBody className='m-0 p-0'>
                                    <MDBCardText className="text-muted p text">{(blog.description)}</MDBCardText>
                                    <MDBCardFooter className="text-end writer no-padding">
                                        <MDBRow style={{direction:'rtl'}}>
                                            <MDBCol  className='p-0 col-2 col-lg-1 '>
                                                <img className='image-fluid d-block profile' src={blog.user.image} alt={'loading'}/>
                                            </MDBCol>
                                            <MDBCol  className='p-1 col-5 col-lg-3 meta'>
                                                <div className='d-flex writer'>{blog.user.name}</div>
                                                <div>
                                                    <small className='text-muted'>{RelativeDate(new Date(blog.date)) + ' . ' + blog.read_time}</small>
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
    ) : <span>{isSuccess}</span>
}

export default BlogsViewer;