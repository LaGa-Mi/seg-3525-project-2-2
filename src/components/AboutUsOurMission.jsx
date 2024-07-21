import {Container} from "react-bootstrap"

import PageTop from "./sub-components/PageTop.jsx"
import PageBottom from "./sub-components/PageBottom.jsx"

export default function AboutUsOurMission(props) {
    return (
        <>
        <PageTop
            h1="Our Mission"
            h2="Where it all started"
            img={require("../resources/genericTeens.jpg")}
            alt=""
            source="https://parentingteensandtweens.com/wp-content/uploads/2023/08/parenting-mistakes-made-in-freshman-year-1024x574.jpg"
            active="aboutUs/ourMission"
            language={props.language}
            setLanguage={props.setLanguage}
        />
        <Container className="mt-5">
            <h1 className="display-3">Our History</h1>
            <p>Founded by a group of enterprising students, Student Services began with a simple idea: to offer reliable and affordable services to our community while gaining valuable work experience. We recognized the need for quality assistance with everyday tasks, and we knew we could make a difference.</p>
            <div className="d-flex mt-5" style={{width:"100%"}}>
                <div style={{width:"40%"}}>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d359705.10798850725!2d-75.91374816635181!3d45.223599575501765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cd167e08276c099%3A0xb6d09c28fe5644af!2sOttawa%2C%20ON!5e0!3m2!1sen!2sca!4v1721433840539!5m2!1sen!2sca"
                    title="Ottaw Region" width="100%" height="400px" style={{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <div className="d-flex flex-column align-items-end justify-content-center" style={{width:"60%"}}>
                    <div className="d-flex flex-column" style={{width:"90%"}}>
                        <h1 className="display-5"> Where Do We Offer Services</h1>
                        <p>Student Services is proud to serve the vibrant community of Ottawa. Our team of dedicated students is available throughout the city, providing top-quality yard work, car washing, and dog walking services to residents in all neighborhoods. Whether you are in the bustling downtown core or the peaceful suburbs, we are here to help you with your household needs. Our commitment to excellence and reliability ensures that you receive the best service possible, no matter where you are in Ottawa.</p>
                    </div>
                </div>
            </div>
        </Container>
        <PageBottom/>
        </>
    )
  }