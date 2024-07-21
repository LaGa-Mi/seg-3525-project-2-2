import {Container} from "react-bootstrap"

import PageTop from "./sub-components/PageTop.jsx"
import PageBottom from "./sub-components/PageBottom.jsx"

import backgroundImage from "../resources/happyDogs.jpg";

export default function ServicesDog(props) {
    return (
        <>
        <PageTop
            h1="Dog Walking"
            h2="Happy Paws, Happy Life"
            img={require("../resources/dogWalking.png")}
            source=""
            active="services/dogWalking"
            language={props.language}
            setLanguage={props.setLanguage}
        />
            <Container className="mt-5">
                <h1 className="display-4">What we offer?</h1>
                <p>Our dog walking services ensure your furry friend gets the exercise and attention they need. We offer daily walks,
                playtime, and personalized care to keep your dog happy and healthy.</p>
                <div style={{position:"relative"}}>
                    <div style={{ backgroundImage: `url(${backgroundImage})`, backgroundRepeat: "no-repeat", backgroundPosition: "center center", backgroundAttachment: "fixed", backgroundSize:"100%, 100%",
                    height: "350px", width: "100%", filter: "brightness(50%)"}} source="https://t3.ftcdn.net/jpg/06/09/63/58/360_F_609635821_lwYujZGyv9cMH2KB0PTnGbq9Fcpsj8tr.jpg">
                    </div>
                    <div className="d-flex flex-column align-items-center justify-content-center" style={{position: "absolute", top:"50%", left:"50%", transform:"translate(-50%, -50%)"}}>
                        <img src={require("../resources/instaLogo.png")} style={{height:"75px", width:"75px"}} alt="Instagram Logo"></img>
                        <div className="my-4 bg-primary" style={{width:"5px", height:"70px", display:"block", backgroundColor:"rgb(255, 255, 255)"}}></div>
                        <h4 className="text-center text-light">Follow us on Instagram to see<br></br>our results!</h4>
                        <a className="btn btn-secondary mt-2" target="_blank" rel="noreferrer" href="https://www.instagram.com">See our feed!</a>
                    </div>
                </div>
                <h2 className="mt-4">Why Choose Our Dog Walking Services?</h2>
                <ul>
                    <li>Caring and experienced dog walkers</li>
                    <li>Personalized walks tailored to your dog's needs</li>
                    <li>Reliable and punctual service</li>
                </ul>
                <h2>How It Works</h2>
                <ol>
                    <li>Schedule a meet and greet with our dog walkers</li>
                    <li>Set up a walking schedule that fits your needs</li>
                    <li>Our walker takes your dog on fun and safe walks</li>
                    <li>Receive updates and photos after each walk</li>
                </ol>
            </Container>
        <PageBottom/>
        </>
    )
  }