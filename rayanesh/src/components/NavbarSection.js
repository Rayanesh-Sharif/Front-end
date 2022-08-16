import {
    MDBCol,
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarToggler,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBCollapse, MDBRow
} from 'mdb-react-ui-kit';

// create a Navbar component that renders a Navbar with a brand name on left side and a list of links at left with distance
const NavbarSection = (
    {
        loggedIn,
        Name,
    }
) => {
    const logo = require("../assets/pics/logo.png");
    return (
        <MDBNavbar stick="top" style={{ background: "#21A362" }} variant="dark" expand="lg">
            <MDBContainer className={"m-0 p-0"}>
                {loggedIn ? (

                    <MDBContainer className={"d-block"}>
                        <MDBRow className={"d-flex m-0 px-1 justify-content-start align-center align-items-center"}>
                            <MDBCol md={'3'} className={"p-0 m-0"}>
                                <img
                                    src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                                    className="rounded-circle hover-overlay w-25"
                                    alt="Avatar"
                                />
                            </MDBCol>
                            <MDBCol md={'4'}>
                                Welcome {Name}
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>
                ) : null}
                <MDBNavbarToggler aria-controls="basic-navbar-nav" />
                <MDBCollapse id="basic-navbar-nav">
                    <MDBNavbarNav className="me-auto">
                        {/*<Navbar.Brand href="#home">Brand link</Navbar.Brand>*/}
                        <MDBNavbarLink href="#home">Home</MDBNavbarLink>
                        <MDBNavbarLink href="#link">Link</MDBNavbarLink>

                    </MDBNavbarNav>
                </MDBCollapse>
                <MDBNavbarBrand href="#home">
                    <img
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