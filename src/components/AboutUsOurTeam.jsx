import {Container} from "react-bootstrap"

import PageTop from "./sub-components/PageTop.jsx"
import PageBottom from "./sub-components/PageBottom.jsx"
import ExpertCard from "./sub-components/ExpertCard.jsx"

export default function AboutUsOurTeam(props) {
    return (
        <>
        <PageTop
            h1="Meet Our Team"
            h2="The students that make it all happen!"
            img={require("../resources/highschool.jpg")}
            alt="page background"
            source="https://upload.wikimedia.org/wikipedia/commons/3/39/Hibbing_High_School_2014.jpg"
            active="aboutUs/ourTeam"
            language={props.language}
            setLanguage={props.setLanguage}
        />
        <Container className="mt-5">
            <h1 className="display-1">Our Team</h1>
            <p>Our team consists of enthusiastic and responsible students from various academic backgrounds. Each member is carefully selected and trained to provide the best service possible. We take pride in our work and treat every task with the utmost care and attention to detail.</p>
            <h1 className="display-4">Yard Work<span className="style-line-long"></span></h1>
            <ExpertCard
            name="Alice Smith"
            title="Yard Worker"
            description="Alice is a dedicated yard worker with a passion for maintaining beautiful landscapes. She has extensive experience in lawn care, weeding, and garden maintenance."
            img={require("../resources/yardWork1.jpg")}
            source="https://www.andersonlumbercompany.com/Data/694x557-yardwork-is-hard.jpg?Revision=071c&Timestamp=JtpJ2G"
            />
            <ExpertCard
            name="Bob Johnson"
            title="Yard Worker"
            description="Bob is a reliable yard worker who excels in trimming, pruning, and overall yard upkeep. His attention to detail ensures that every yard looks its best."
            img={require("../resources/yardWork2.jpg")}
            source="https://media.istockphoto.com/id/498315707/photo/rooting-out-the-problem.jpg?s=612x612&w=0&k=20&c=IZRHC0tLeEY43rgFtlbfQKZ7P7-cf_7RwA-XZWJVR_4="
            />
            <h1 className="display-4 mt-5">Car Washing<span className="style-line-long"></span></h1>
            <ExpertCard
            name="Charlie Davis"
            title="Car Washer"
            description="Charlie is an expert car washer who uses eco-friendly products to provide top-quality exterior and interior car cleaning services. His meticulous approach guarantees a spotless finish."
            img={require("../resources/carWasher2.jpg")}
            source="https://www.slashgear.com/img/gallery/ryobi-vs-dewalt-who-makes-the-better-pressure-washer/l-intro-1694787085.jpg"
            />
            <ExpertCard
            name="Danielle Lee"
            title="Car Washer"
            description="Danielle is a skilled car washer with a keen eye for detail. She specializes in full detailing and ensures that every vehicle she works on looks brand new."
            img={require("../resources/carWasher1.jpg")}
            source="https://images.herzindagi.info/image/2023/Jun/pressure-washer.jpg"
            />
            <h1 className="display-4 mt-5">Dog Walking<span className="style-line-long"></span></h1>
            <ExpertCard
            name="Evan Martinez"
            title="Dog Walker"
            description="Evan is a caring and enthusiastic dog walker who loves spending time with furry friends. He provides personalized walks and playtime to keep dogs happy and healthy."
            img={require("../resources/dogwalker1.png")}
            source="https://image.cnbcfm.com/api/v1/image/107113357-1662573246312-carbonthumb.png?v=1662573414"
            />
        </Container>
        <PageBottom/>
        </>
    )
  }