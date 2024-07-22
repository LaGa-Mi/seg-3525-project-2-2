import {Row, Col} from "react-bootstrap"

const pageText = [
    ["Learn More", "Discere Plus"],
    ["Book Now", "Libri Nunc"],
];

const langInd = {"EN": 0, "LA": 1};

function imgCol(props) {
    return (<Col><img className="border border-dark border-3" src={props.img} alt={props.title} style={{width:"100%", overflow:"hidden", objectFit:"cover"}}></img></Col>);
}

function descCol(props) {
    return (
    <Col className="d-flex flex-column justify-content-center align-items-center p-0">
        <h1>{props.title}</h1>
        <p className="text-center">{props.description}</p>
        <a href={props.to}>{pageText[0][langInd[props.language]]}</a>
        <a className="btn btn-secondary mt-3" href="/bookNow">{pageText[1][langInd[props.language]]}</a>
    </Col>
    );
}

export default function HomeRow(props) {

    return (
        <Row>
            {props.imgPos === "left" ? imgCol(props) : descCol(props)}
            {props.imgPos === "left" ? descCol(props) : imgCol(props)}
        </Row>
    )
  }