import {
    MDBCol,
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarNav,
    MDBNavbarLink,
    MDBCollapse, MDBRow
} from 'mdb-react-ui-kit';
import './NavbarSection.scss';

const NavbarSection = (
    {
        loggedIn
    }
) => {
    const logo = require("../../assets/pics/logo.png");
    return (
        <MDBNavbar className= 'rayanesh-navbar-light' sticky="sticky" variant="dark" expand="lg">
            <MDBContainer>
                {
                    loggedIn ?
                        <MDBContainer className={"d-block"}>
                            <MDBRow className={"d-flex m-0 px-1 justify-content-start align-center align-items-center"}>
                                <MDBCol md={'1'} className={"p-0 m-0"}>
                                    <img
                                        src="https://mdbcdn.b-cdn.net/img/new/avatars/4.webp"
                                        className="rounded-circle hover-overlay w-50"
                                        alt="Avatar"
                                    />
                                </MDBCol>
                            </MDBRow>
                        </MDBContainer>
                    : <button type="button" style={{fontFamily: 'Vazir', fontSize: '10px', color: '#21A362'}}
                                className="btn btn-light fw-bolder p-2">
                        ورود / ثبت‌نام
                    </button>
                }
                <MDBCollapse id="basic-navbar-nav">
                    <MDBNavbarNav className="me-auto">
                        {/*<Navbar.Brand href="#home">Brand link</Navbar.Brand>*/}
                        <MDBNavbarLink href="#home">Home</MDBNavbarLink>
                        <MDBNavbarLink href="#link">Link</MDBNavbarLink>

                    </MDBNavbarNav>
                </MDBCollapse>

                <MDBNavbarBrand href="#home">
                    <img
                        alt={'logo'}
                        src={logo}
                        width={50}
                        height={30}
                    />
                </MDBNavbarBrand>
            </MDBContainer>
        </MDBNavbar>
    );
}

export default NavbarSection;