import {Container, Row, Col} from "react-bootstrap"

export default function PageBottom(props) {
    const iconSizes = "40px";

    return (
        <div className="mt-5 py-4 bg-primary text-light">
            <Container>
                <Row>
                    <Col className="d-flex flex-column justify-content-between me-5">
                        <h1>Student Services</h1>
                        <div className="d-flex flex-row justify-content-between">
                            <a target="_blank" rel="noreferrer" href="https://www.instagram.com"><img src={require("../../resources/instaLogo.png")} alt="Our instagram page" style={{height:iconSizes, width:iconSizes}}></img></a>
                            <a target="_blank" rel="noreferrer" href="https://www.facebook.com"><img src={require("../../resources/facebookLogo.png")} alt="Our facebook page" style={{height:iconSizes, width:iconSizes}}></img></a>
                            <a target="_blank" rel="noreferrer" href="https://www.linkedin.com"><img src={require("../../resources/linkedinLogo.png")} alt="Our linkedin page" style={{height:iconSizes, width:iconSizes}}></img></a>
                            <a target="_blank" rel="noreferrer" href="https://x.com/home?lang=en"><img src={require("../../resources/xLogo.png")} alt="Our x page" style={{height:iconSizes, width:iconSizes}}></img></a>
                        </div>
                    </Col>
                    <Col className="d-flex flex-column justify-content-between ms-5">
                        <h2>Business Hours</h2>
                        <p>Mon-Thu: 9:00 am - 5:00 pm</p>
                        <p>Fri: 10:00 am - 4:00 pm</p>
                        <p>Sat-Sun: closed</p>
                    </Col>
                    <Col className="d-flex flex-column">
                        <h2>Support</h2>
                        <a href="/contactUs" className="link-light mt-3">Contact Us</a>
                    </Col>
                    <Col className="d-flex flex-column">
                        <h2>Account</h2>
                        <a href="/account" className="link-light mt-3">My Account</a>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}