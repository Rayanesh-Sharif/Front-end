import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import {MDBCol, MDBContainer, MDBRow} from "mdb-react-ui-kit";

// create a Navbar component that renders a Navbar with a brand name on left side and a list of links at left with distance
const NavbarSection = (
    {
        loggedIn,
        Name,
    }
) => {
    const logo = require("../assets/pics/logo.png");
    return (
        <Navbar stick="top" style={{background: "#21A362"}} variant="dark" expand="lg">
            <Container className={"m-0 p-0"}>
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
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        {/*<Navbar.Brand href="#home">Brand link</Navbar.Brand>*/}
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Link</Nav.Link>

                    </Nav>
                </Navbar.Collapse>
                <Navbar.Brand href="#home">
                    <img
                        src={logo}
                        width={50}
                        height={30}
                    />
                </Navbar.Brand>
            </Container>
        </Navbar>
    );
}

export default NavbarSection;