import {Container} from "react-bootstrap"

import PageTop from "./sub-components/PageTop.jsx"
import PageBottom from "./sub-components/PageBottom.jsx"

import backgroundImage from "../resources/carwash3.jpg";

export default function ServicesCar(props) {
    return (
        <>
        <PageTop
            h1="Car Washing"
            h2="Shine On with Our Car Washing Services"
            img={require("../resources/carWash.png")}
            source="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTZnBKfS2exsbswjUHSMviU2p7fuFl7n5bz77059SMXMZAqJtmX"
            active="services/carWashing"
            language={props.language}
            setLanguage={props.setLanguage}
        />
        <Container className="mt-5">
        <h1 className="display-4">What we offer?</h1>
            <p>Our car washing services include exterior washes, interior cleaning, and full detailing. We use eco-friendly products
            to ensure your car looks its best while protecting the environment.</p>
            <div style={{position:"relative"}}>
                    <div style={{ backgroundImage: `url(${backgroundImage})`, backgroundRepeat: "no-repeat", backgroundPosition: "center center", backgroundAttachment: "fixed", backgroundSize:"100%, 100%",
                    height: "350px", width: "100%", filter: "brightness(25%)"}} source="https://cjsautobling.com/wp-content/uploads/2020/03/How-to-Wash-Your-Car-at-Home.jpg">
                    </div>
                    <div className="d-flex flex-column align-items-center justify-content-center" style={{position: "absolute", top:"50%", left:"50%", transform:"translate(-50%, -50%)"}}>
                        <img src={require("../resources/instaLogo.png")} style={{height:"75px", width:"75px"}} alt="Instagram Logo"></img>
                        <div className="my-4 bg-primary" style={{width:"5px", height:"70px", display:"block", backgroundColor:"rgb(255, 255, 255)"}}></div>
                        <h4 className="text-center text-light">Follow us on Instagram to see<br></br>our results!</h4>
                        <a className="btn btn-secondary mt-2" target="_blank" rel="noreferrer" href="https://www.instagram.com">See our feed!</a>
                    </div>
            </div>
            <h2 className="mt-4">Why Choose Our Car Washing Services?</h2>
            <ul>
                <li>Thorough and meticulous cleaning</li>
                <li>Convenient mobile service at your location</li>
                <li>Competitive pricing for quality service</li>
            </ul>
            <h2>How It Works</h2>
            <ol>
                <li>Book an appointment online or by phone</li>
                <li>Choose your desired service package</li>
                <li>Our team arrives at your location to clean your car</li>
                <li>Drive away with a spotless vehicle</li>
            </ol>
        </Container>
        <PageBottom/>
        </>
    )
  }