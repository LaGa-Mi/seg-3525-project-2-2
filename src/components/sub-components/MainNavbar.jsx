import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function MainNavbar(props) {
    const languages = ["EN", "LA"];

    const pageText = [
        ["Home", "Domum"],                               // 0
        ["Services", "Officia"],                        // 1
        ["Yard Work", "Navale Opus"],                   // 2
        ["Car Washing", "Currus Lavatio"],              // 3
        ["Dog Walking", "Canis Ambulans"],              // 4
        ["About Us", "De Nobis"],                       // 5
        ["Our Mission", "Nostra Missio"],               // 6
        ["Our Team", "Nostri Quadrigis Peritorum"],     // 7
        ["Careers", "Gestas"],                          // 8
        ["Learn More", "Discere Plus"],                 // 9
        ["Contact Us", "Nobis Loquere"],                // 10
        ["FAQ", "Saepe Quaesivit Quaestiones"],         // 11
        ["Book Now", "Libri Nunc"],                     // 12
        ["Account", "Ratio"]];                          // 13

    const langInd = {"EN": 0, "LA": 1};

    return (
        <Navbar id="main-navbar" expand="lg" className={props.alwaysOn ? "navbar-dark top-0 w-100 sticking" : "navbar-dark top-0 w-100"} style={{ position: "fixed", zIndex: "2", transition: "0.3s" }}>
            <Container>
                <Navbar.Brand href="/">Student Services</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="/" active={props.active === "home"}>{pageText[0][langInd[props.language]]}</Nav.Link>
                        <NavDropdown title={pageText[1][langInd[props.language]]} id="basic-nav-dropdown" active={["services/yardWork", "services/carWashing", "services/dogWalking"].indexOf(props.active) > -1}>
                            <NavDropdown.Item href="/services/yardWork" active={props.active === "services/yardWork"}>{pageText[2][langInd[props.language]]}</NavDropdown.Item>
                            <NavDropdown.Item href="/services/carWashing" active={props.active === "services/carWashing"}>{pageText[3][langInd[props.language]]}</NavDropdown.Item>
                            <NavDropdown.Item href="/services/dogWalking" active={props.active === "services/dogWalking"}>{pageText[4][langInd[props.language]]}</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title={pageText[5][langInd[props.language]]} id="basic-nav-dropdown" active={["aboutUs/ourMission", "aboutUs/ourTeam"].indexOf(props.active) > -1}>
                            <NavDropdown.Item href="/aboutUs/ourMission" active={props.active === "aboutUs/ourMission"}>{pageText[6][langInd[props.language]]}</NavDropdown.Item>
                            <NavDropdown.Item href="/aboutUs/ourTeam" active={props.active === "aboutUs/ourTeam"}>{pageText[7][langInd[props.language]]}</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="/careers" active={props.active === "careers"}>{pageText[8][langInd[props.language]]}</Nav.Link>
                        <Nav.Link href="/learnMore" active={props.active === "learnMore"}>{pageText[9][langInd[props.language]]}</Nav.Link>
                        <Nav.Link href="/contactUs" active={props.active === "contactUs"}>{pageText[10][langInd[props.language]]}</Nav.Link>
                        <Nav.Link href="/FAQ" active={props.active === "FAQ"}>{pageText[11][langInd[props.language]]}</Nav.Link>
                        <Nav.Link href="/bookNow" className="btn bg-secondary mx-2 align-self-start px-2 text-white">{pageText[12][langInd[props.language]]}</Nav.Link>
                        <Nav.Link href="/account" active={props.active === "account"}><i className="bi bi-person-circle"></i> {pageText[13][langInd[props.language]]}</Nav.Link>
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