import { Container } from "react-bootstrap"

import PageTop from "./sub-components/PageTop.jsx"
import PageBottom from "./sub-components/PageBottom.jsx"

import backgroundImage from "../resources/lawn2.jpg";

export default function ServicesYard(props) {
    return (
        <>
            <PageTop
                h1="Yard Work"
                h2="Transform Your Yard with Our Expertise"
                img={require("../resources/yardWorkbg.jpg")}
                source="https://skyviewcleaning.com/wp-content/uploads/2021/01/riding-lawn-mower.jpg"
                active="services/yardWork"
                language={props.language}
                setLanguage={props.setLanguage}
            />
            <Container className="mt-5">
                <h1 className="display-4">What we offer?</h1>
                <p>Our yard work services include lawn mowing, weeding, trimming, and garden maintenance. Whether you need a one-time
                cleanup or regular maintenance, our team of dedicated students is here to help.</p>
                <div style={{position:"relative"}}>
                    <div style={{ backgroundImage: `url(${backgroundImage})`, backgroundRepeat: "no-repeat", backgroundPosition: "center center", backgroundAttachment: "fixed", backgroundSize:"100%, 100%",
                    height: "350px", width: "100%", filter: "brightness(25%)"}} source="https://thelawnman.co.uk/wp-content/uploads/A-nice-lawn-1.jpg">
                    </div>
                    <div className="d-flex flex-column align-items-center justify-content-center" style={{position: "absolute", top:"50%", left:"50%", transform:"translate(-50%, -50%)"}}>
                        <img src={require("../resources/instaLogo.png")} style={{height:"75px", width:"75px"}} alt="Instagram Logo"></img>
                        <div className="my-4 bg-primary" style={{width:"5px", height:"70px", display:"block", backgroundColor:"rgb(255, 255, 255)"}}></div>
                        <h4 className="text-center text-light">Follow us on Instagram to see<br></br>our results!</h4>
                        <a className="btn btn-secondary mt-2" target="_blank" rel="noreferrer" href="https://www.instagram.com">See our feed!</a>
                    </div>
                </div>
                <h2 className="mt-4">Why Choose Our Yard Work Services?</h2>
                <ul>
                    <li>Experienced and reliable student workers</li>
                    <li>Affordable rates tailored to your budget</li>
                    <li>Flexible scheduling to suit your needs</li>
                </ul>
                <h2>How It Works</h2>
                <ol>
                    <li>Contact us to schedule a consultation</li>
                    <li>We assess your yard and provide a quote</li>
                    <li>Our team performs the services on the agreed date</li>
                    <li>Enjoy a beautifully maintained yard</li>
                </ol>
            </Container>
            <PageBottom />
        </>
    )
}