import {Container} from "react-bootstrap"

import PageTop from "./sub-components/PageTop.jsx"
import PageBottom from "./sub-components/PageBottom.jsx"
import HomeRow from "./sub-components/HomeRow.jsx"

export default function Home(props) {
    const pageText = [
        ["Yard Work", "Navale Opus"],
        ["Transform Your Yard with Our Expertise", "Transforma Hortum Tuum Nostra Peritia"],
        ["Learn More", "Discere Plus"],
        ["Car Washing", "Currus Lavatio"],
        ["Shine On with Our Car Washing Services", "Splende Cum Nostris Currus Lavationibus"],
        ["Dog Walking", "Canis Ambulans"],
        ["Happy Paws, Happy Life", "Felices Pedes, Vita Felicior"],
        ["Who we are", "De nobis"],
        ["Welcome to Student Services, your trusted partner for a variety of essential household tasks. We are a team of dedicated and hardworking students committed to providing top-notch services in yard work, car washing, and dog walking. Our mission is to help you save time and enjoy a more convenient and stress-free life.", "Salve ad Officia Discipulorum, socium tuum fidelem pro varietate operum domesticorum necessariorum. Sumus grex discipulorum dedicatorum et laboriosorum qui se obligant ad praestandas officia optima in navale opus, currus lavatione, et canis ambulatione. Nostra missio est ut te tempus servare et vitam commodiorem et liberam a curis frui."],
        ["Our yard work services include lawn mowing, weeding, trimming, and garden maintenance. Whether you need a one-time cleanup or regular maintenance, our team of dedicated students is here to help.", "Officia nostra navale operis includunt gramen tonsum, eradicatio, caesura, et horti curatio. Sive unam purgationem tempor"],
        ["Our car washing services include exterior washes, interior cleaning, and full detailing. We use eco-friendly products to ensure your car looks its best while protecting the environment.", "Officia nostra currus lavationis includunt lavationes exteriores, purgationem interiorem, et plenam descriptionem. Utimur productis amicis naturae ut currus tuus optime videatur dum ambientem protegimus."],
        ["Our dog walking services ensure your furry friend gets the exercise and attention they need. We offer daily walks, playtime, and personalized care to keep your dog happy and healthy.", "Officia nostra canis ambulationis assecurant ut amicus tuus pilosus exercitationem et attentionem accipiat quas desiderat. Officimus ambulationes cotidianas, tempus ludendi, et curam personalisatam ut canem tuum felicem et sanum teneamus."]
    ];

    const langInd = {"EN": 0, "LA": 1};

    return (
        <>
        <PageTop
            arr={[
                {
                    h1: pageText[0][langInd[props.language]],
                    h2: pageText[1][langInd[props.language]],
                    button: pageText[2][langInd[props.language]],
                    buttonTo: "/services/yardWork",
                    img: require("../resources/yardWorkbg.jpg"),
                    source:"https://skyviewcleaning.com/wp-content/uploads/2021/01/riding-lawn-mower.jpg",
                },
                {
                    h1: pageText[3][langInd[props.language]],
                    h2: pageText[4][langInd[props.language]],
                    button: pageText[2][langInd[props.language]],
                    buttonTo: "/services/carWashing",
                    img: require("../resources/carWash.png"),
                    source:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTZnBKfS2exsbswjUHSMviU2p7fuFl7n5bz77059SMXMZAqJtmX",
                },
                {
                    h1: pageText[5][langInd[props.language]],
                    h2: pageText[6][langInd[props.language]],
                    button: pageText[2][langInd[props.language]],
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
                <h1 className="display-3">{pageText[7][langInd[props.language]]}</h1>
                <p>{pageText[8][langInd[props.language]]}</p>
            </div>
            <div className="mt-5">
                <HomeRow
                imgPos="left"
                title={pageText[0][langInd[props.language]]}
                description={pageText[9][langInd[props.language]]}
                to="/Services/YardWork"
                img={require("../resources/lawn.jpg")}
                source="https://thegrasspeople.com/media/knowledge_base/article/kb_tgp/how-to-care-for-a-fine-lawn-1.jpg"
                language={props.language}
                />
                <HomeRow
                imgPos="right"
                title={pageText[3][langInd[props.language]]}
                description={pageText[10][langInd[props.language]]}
                to="/Services/carWashing"
                img={require("../resources/carwash2.jpg")}
                source="https://www.shinearmor.com/cdn/shop/articles/Best-Car-Wash-Mitt--Best-Car-Wash-Mitt-to-Avoid-Scratching-Your-Car-Shine-Armor-1686929939156_ed283fd9-75f1-4d2f-839e-c388d087f387_1445x.webp?v=1686930044"
                language={props.language}
                />
                <HomeRow
                imgPos="left"
                title={pageText[5][langInd[props.language]]}
                description={pageText[11][langInd[props.language]]}
                to="/Services/dogWalking"
                img={require("../resources/dogwalking.jpg")}
                source="https://magazine.caaneo.ca/wp-content/uploads/2023/06/iStock-1442143816-1.jpg"
                language={props.language}
                />
            </div>
        </Container>
        <PageBottom/>
        </>
    )
  }