import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function MainNavbar(props) {
    const languages = ["EN", "OT"];

    return (
        <Navbar id="main-navbar" expand="lg" className={props.alwaysOn ? "navbar-dark top-0 w-100 sticking" : "navbar-dark top-0 w-100"} style={{ position: "fixed", zIndex: "2", transition: "0.3s" }}>
            <Container>
                <Navbar.Brand href="/">Student Services</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="/" active={props.active === "home"}>Home</Nav.Link>
                        <NavDropdown title="Services" id="basic-nav-dropdown" active={["services/yardWork", "services/carWashing", "services/dogWalking"].indexOf(props.active) > -1}>
                            <NavDropdown.Item href="/services/yardWork" active={props.active === "services/yardWork"}>Yard Work</NavDropdown.Item>
                            <NavDropdown.Item href="/services/carWashing" active={props.active === "services/carWashing"}>Car Washing</NavDropdown.Item>
                            <NavDropdown.Item href="/services/dogWalking" active={props.active === "services/dogWalking"}>Dog Walking</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="About Us" id="basic-nav-dropdown" active={["aboutUs/ourMission", "aboutUs/ourTeam"].indexOf(props.active) > -1}>
                            <NavDropdown.Item href="/aboutUs/ourMission" active={props.active === "aboutUs/ourMission"}>Our Mission</NavDropdown.Item>
                            <NavDropdown.Item href="/aboutUs/ourTeam" active={props.active === "aboutUs/ourTeam"}>Our Team</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="/careers" active={props.active === "careers"}>Careers</Nav.Link>
                        <Nav.Link href="/learnMore" active={props.active === "learnMore"}>Learn More</Nav.Link>
                        <Nav.Link href="/contactUs" active={props.active === "contactUs"}>Contact Us</Nav.Link>
                        <Nav.Link href="/bookNow" className="btn bg-secondary mx-2 align-self-start px-2 text-white">Book Now</Nav.Link>
                        <Nav.Link href="/account" active={props.active === "account"}><i className="bi bi-person-circle"></i> Account</Nav.Link>
                        <NavDropdown title={<><i className="bi bi-globe"></i> {props.language}</>} id="basic-nav-dropdown">
                            {languages.map((elem, index) => {
                                if (elem !== props.language) return (
                                    <NavDropdown.Item key={index} onClick={() => {props.setLanguage(elem);}}>{elem}</NavDropdown.Item>
                                )
                                return null;
                            })}
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}