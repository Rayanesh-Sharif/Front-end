import {MDBRow, MDBCol, MDBContainer} from 'mdb-react-ui-kit';
import './BlogIntro.scss';

const BlogIntro = () => {
    const view = require('../../assets/pics/logo.png');
    return (
        <MDBContainer className='bg-component'>
                <MDBRow className='g-0' >
                    <MDBCol className='no-padding col-md-1  col-12'>
                        <p className="text text-center">در</p>
                    </MDBCol>
                    <MDBCol className='hover-zoom align-items-center col-md-5 col-12'>
                        <img alt={'logo'} className='picture rounded mx-auto d-block' src={view}>
                        </img>
                    </MDBCol>
                    <MDBCol className='no-padding col-md-6 col-12'>
                        <p className="text text-center">!بخوانید و بنویسید</p>
                    </MDBCol>
                </MDBRow>
        </MDBContainer>
    );
}

export default BlogIntro;