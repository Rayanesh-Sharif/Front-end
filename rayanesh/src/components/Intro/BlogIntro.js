import { MDBRow, MDBCol, MDBContainer } from 'mdb-react-ui-kit';
import './BlogIntro.scss';

const BlogIntro = () => {
    const view = require('../../assets/pics/logo.png');
    return (
        <MDBContainer>
            <div className='bg-component'>
                <MDBRow className='g-0'>
                    <MDBCol end className='no-padding col-12 col-lg-6' >
                        <p className="text text-center">!بخوانید و بنویسید</p>
                    </MDBCol>
                    <MDBCol center className='hover-zoom align-items-center col-12 col-lg-5'>
                        <img className='picture rounded mx-auto d-block' src={view}>
                        </img>
                    </MDBCol >
                    <MDBCol start className='no-padding col-12 col-lg-1'>
                        <p className="text text-center">در</p>
                    </MDBCol>
                </MDBRow>
            </div>
        </MDBContainer >
    );
}

export default BlogIntro;