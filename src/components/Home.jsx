import {Container} from "react-bootstrap"

import PageTop from "./sub-components/PageTop.jsx"
import PageBottom from "./sub-components/PageBottom.jsx"
import HomeRow from "./sub-components/HomeRow.jsx"

export default function Home(props) {
    return (
        <>
        <PageTop
            arr={[
                {
                    h1: "Yard Work",
                    h2: "Transform Your Yard with Our Expertise",
                    button: "Learn More",
                    buttonTo: "/services/yardWork",
                    img: require("../resources/yardWorkbg.jpg"),
                    source:"https://skyviewcleaning.com/wp-content/uploads/2021/01/riding-lawn-mower.jpg",
                },
                {
                    h1: "Car Washing",
                    h2: "Shine On with Our Car Washing Services",
                    button: "Learn More",
                    buttonTo: "/services/carWashing",
                    img: require("../resources/carWash.png"),
                    source:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTZnBKfS2exsbswjUHSMviU2p7fuFl7n5bz77059SMXMZAqJtmX",
                },
                {
                    h1: "Dog Walking",
                    h2: "Happy Paws, Happy Life",
                    button: "Learn More",
                    buttonTo: "/services/dogWalking",
                    img: require("../resources/dogWalking.png"),
                    source:"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSMCbKisSA2FtKBTmuKG_-TiUaY3DfF-H-w529phYVf2-h3ibpT",
                }
            ]}
            active="home"
            large={true}
            language={props.language}
            setLanguage={props.setLanguage}
        />
        <Container>
            <div className="mt-5">
                <h1 className="display-3">Who we are</h1>
                <p>Welcome to Student Services, your trusted partner for a variety of essential household tasks. We are a team of dedicated and hardworking students committed to providing top-notch services in yard work, car washing, and dog walking. Our mission is to help you save time and enjoy a more convenient and stress-free life.</p>
            </div>
            <div className="mt-5">
                <HomeRow
                imgPos="left"
                title="Yard Work"
                description="Our yard work services include lawn mowing, weeding, trimming, and garden maintenance. Whether you need a one-time cleanup or regular maintenance, our team of dedicated students is here to help."
                to="/Services/YardWork"
                img={require("../resources/lawn.jpg")}
                source="https://thegrasspeople.com/media/knowledge_base/article/kb_tgp/how-to-care-for-a-fine-lawn-1.jpg"
                />
                <HomeRow
                imgPos="right"
                title="Car Washing"
                description="Our car washing services include exterior washes, interior cleaning, and full detailing. We use eco-friendly products to ensure your car looks its best while protecting the environment."
                to="/Services/CarWashing"
                img={require("../resources/carwash2.jpg")}
                source="https://www.shinearmor.com/cdn/shop/articles/Best-Car-Wash-Mitt--Best-Car-Wash-Mitt-to-Avoid-Scratching-Your-Car-Shine-Armor-1686929939156_ed283fd9-75f1-4d2f-839e-c388d087f387_1445x.webp?v=1686930044"
                />
                <HomeRow
                imgPos="left"
                title="Dog Walking"
                description="Our dog walking services ensure your furry friend gets the exercise and attention they need. We offer daily walks, playtime, and personalized care to keep your dog happy and healthy."
                to="/Services/dogWalking"
                img={require("../resources/dogwalking.jpg")}
                source="https://magazine.caaneo.ca/wp-content/uploads/2023/06/iStock-1442143816-1.jpg"
                />
            </div>
        </Container>
        <PageBottom/>
        </>
    )
  }