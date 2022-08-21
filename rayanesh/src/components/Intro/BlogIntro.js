import { MDBRow, MDBCol, MDBContainer } from 'mdb-react-ui-kit';
import './BlogIntro.scss';

const BlogIntro = () => {
    const view = require('../../assets/pics/logo.png');
    return (
        <MDBContainer className='bg-component'>
            <div>
                <MDBRow className='g-0 '>
                    <MDBCol className='no-padding col-lg-6 col-12 order-3 order-sm-1 ' >
                        <p className="text text-center">!بخوانید و بنویسید</p>
                    </MDBCol>
                    <MDBCol className='hover-zoom align-items-center col-lg-5 col-12 order-2'>
                        <img alt={'logo'} className='picture rounded mx-auto d-block' src={view}>
                        </img>
                    </MDBCol >
                    <MDBCol className='no-padding col-lg-1  col-12 order-1 order-sm-3'>
                        <p className="text text-center">در</p>
                    </MDBCol>
                </MDBRow>
            </div>
        </MDBContainer >
    );
}

export default BlogIntro;