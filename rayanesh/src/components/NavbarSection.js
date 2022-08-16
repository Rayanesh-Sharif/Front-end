import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

// create a Navbar component that renders a Navbar with a brand name on left side and a list of links at left with distance
const NavbarSection = () => {
    const logo = require("../assets/pics/logo.png");
    return (
        <Navbar sticky="top" style={{ background: "#21A362" }} variant="dark" expand="lg">
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
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