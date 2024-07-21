import { Container, Row, Col, Dropdown, Alert } from "react-bootstrap"
import Form from 'react-bootstrap/Form';
import { useState } from "react";

import PageTop from "./sub-components/PageTop.jsx"
import PageBottom from "./sub-components/PageBottom.jsx"
import BookingPopups from "./sub-components/BookingPopups.jsx"
import CalendarInput from "./sub-components/CalendarInput.jsx";
import LinearProgression from "./sub-components/LinearProgression.jsx"

const DONE = 0, ACTIVE = 1, NEXT = 2, LOCKED = 3;
const NONE = 0, LOGIN = 1/*, SIGNUP = 2, CONFIRM = 3*/;
const CATEGORY = 0, SERVICE = 1, DATE = 2, TIME = 3, MAKE_RECURRING = 4, RECDATE = 5, RECTIME = 6, RECOCC = 7, ADDRESS = 8, POSTAL = 9;
const defaultNodeValues = [[ACTIVE, NEXT], [NEXT, NEXT], [LOCKED, LOCKED], [NEXT, NEXT]];

export default function BookNow(props) {
    const [nodes, setNodes] = useState(defaultNodeValues)
    const [bookingState, setBookingState] = useState(NONE);
    const [bookingInfo, setBookingInfo] = useState([0, "Service", new Date(), "Time", false, new Date(), "Time", "Occurence", "", ""]);
    const [showAlert, setShowAlert] = useState(false);

    const makeReccuringChanged = (e) => {
        changeInfo(MAKE_RECURRING, e.target.checked);
        if (!bookingInfo[MAKE_RECURRING]) {
            unlockNode(2);
        } else {
            lockNode(2);
        }
    }
    const resetNodes = () => {
        setNodes(defaultNodeValues);
        setBookingInfo([0, "Service", new Date(), "Time", false, new Date(), "Time", "Occurence"]);
    }
    const setNode = (indSet, val) => {
        if (nodes[indSet][0] === LOCKED) return nodes;
        setNodes(nodes.map((elem, index) => {
            if (index === indSet) {
                return elem[0] === ACTIVE ? [ACTIVE, val] : [val, elem[0]];
            } else if ((val === ACTIVE && elem[0] === ACTIVE) || elem[1] === DONE) {
                return [elem[1], elem[1]];
            } else {
                return elem;
            }
        }))
    }
    const nextNode = () => {
        setNodes(nodes.map((elem, index) => {
            if (elem[0] === LOCKED) return elem;
            if (elem[0] === ACTIVE) {
                return [elem[1], elem[1]];
            }
            if (index > 0) {
                if (nodes[index - 1][0] === ACTIVE) {
                    return [ACTIVE, elem[0]];
                } else if (index > 1) {
                    if (nodes[index - 2][0] === ACTIVE && nodes[index - 1][0] === LOCKED) {
                        return [ACTIVE, elem[0]];
                    }
                }
            }
            return elem;
        }))
    }
    const prevNode = () => {
        setNodes(nodes.map((elem, index) => {
            if (elem[0] === LOCKED) return elem;
            if (elem[0] === ACTIVE) {
                return [elem[1], elem[1]];
            }
            if (index < 3) {
                if (nodes[index + 1][0] === ACTIVE) {
                    return [ACTIVE, elem[0]];
                } else if (index < 2) {
                    if (nodes[index + 2][0] === ACTIVE && nodes[index + 1][0] === LOCKED) {
                        return [ACTIVE, elem[0]];
                    }
                }
            }
            return elem;
        }))
    }
    const unlockNode = (indUnlock) => {
        if (nodes[indUnlock][0] !== LOCKED) return nodes;
        setNodes(nodes.map((elem, index) => {
            if (index === indUnlock) {
                return elem[1] === LOCKED ? [NEXT, NEXT] : [elem[1], elem[1]];
            } else {
                return elem;
            }
        }))
    }
    const lockNode = (indUnlock) => {
        if (nodes[indUnlock][0] === LOCKED) return nodes;
        setNodes(nodes.map((elem, index) => {
            if (index === indUnlock) {
                return [LOCKED, elem[1]];
            } else {
                return elem;
            }
        }))
    }
    const isBookingInfoComplete = () => {
        for (let i = 0; i < 4; i++) {
            if (nodes[i][1] !== DONE && nodes[i][1] !== LOCKED) return false;
        }
        return true;
    }
    const nodeToInput = () => {
        if (nodes[0][0] === ACTIVE) {
            return (
                <Row style={{height:"400px"}}>
                    <Col className="d-flex flex-column align-items-center justify-content-center">
                        <h1 className="mb-5">Category and Service</h1>
                        <div className="mb-3">
                            {[{ name: "Yard Work" }, { name: "Car Washing" }, { name: "Dog Walking" }].map((radio, index) => {
                                return (
                                    <div className="d-inline mx-5" key={index}>
                                        <label className="me-4 mb-4" style={{fontSize:"1.5rem"}}>{radio.name}</label>
                                        <input
                                        type="radio"
                                        name="site_name"
                                        value={index + 1}
                                        checked={Number(bookingInfo[CATEGORY]) === (index + 1)}
                                        onChange={() => {changeInfo(CATEGORY, index + 1)}}
                                        style={{transform:"scale(1.5)"}}
                                        ></input>
                                    </div>
                                )
                            })
                            }
                        </div>
                        <Dropdown style={{ width: "70%" }} onSelect={(e) => {changeInfo(SERVICE, e)}}>
                            <Dropdown.Toggle variant="secondary" id="service" style={{ width: "100%", fontSize:"1.5rem"}}>{bookingInfo[SERVICE]}</Dropdown.Toggle>
                            <Dropdown.Menu>
                                {[[], ["Mowing", "Hedge Trimming"], ["Basic Wash"], ["Walk"]][bookingInfo[CATEGORY]].map((elem, index) => {
                                    return (
                                        <Dropdown.Item key={index} eventKey={elem} style={{fontSize:"1.5rem"}}>{elem}</Dropdown.Item>
                                    )
                                })}
                            </Dropdown.Menu>
                        </Dropdown>
                    </Col>
                </Row>
            );
        } else if (nodes[1][0] === ACTIVE) {
            return (
                <div className="d-flex flex-column align-items-center justify-content-center" style={{height:"400px"}}>
                    <h1 className="mb-4">Date and Time</h1>
                    <Row>
                        <Col className="d-flex flex-column align-items-center justify-content-center"><CalendarInput date={bookingInfo[DATE]} changeDate={(date) => {changeInfo(DATE, date);}}/></Col>
                        <Col className="d-flex flex-column align-items-center justify-content-center">
                            <Dropdown className="mb-2" style={{ width: "70%" }} onSelect={(e) => {changeInfo(TIME, e)}}>
                                <Dropdown.Toggle variant="secondary" id="dropdown-basic" style={{ width: "100%" }}>{bookingInfo[TIME]}</Dropdown.Toggle>

                                <Dropdown.Menu>
                                    {["09:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "01:00 PM", "02:00 PM", "03:00 PM", "04:00 PM", "05:00 PM"].map((elem, index) => {
                                        return (
                                            <Dropdown.Item key={index} eventKey={elem}>{elem}</Dropdown.Item>
                                        )
                                    })}
                                </Dropdown.Menu>
                            </Dropdown>
                            <Form.Check
                                type="switch"
                                label="Make Recurring?"
                                onChange={makeReccuringChanged}
                                defaultChecked={bookingInfo[MAKE_RECURRING]}
                            />
                        </Col>
                    </Row>
                </div>
            );
        } else if (nodes[2][0] === ACTIVE) {
            return (
                <div className="d-flex flex-column align-items-center justify-content-center" style={{height:"400px"}}>
                    <h1 className="mb-4">Recurring Date and Time</h1>
                    <Row>
                        <Col className="d-flex flex-column align-items-center justify-content-center"><CalendarInput date={bookingInfo[RECDATE]} changeDate={(date) => {changeInfo(RECDATE, date);}}/></Col>
                        <Col className="d-flex flex-column align-items-center justify-content-center">
                            <Dropdown className="mb-2" onSelect={(e) => {changeInfo(RECTIME, e)}}>
                                <Dropdown.Toggle variant="secondary" id="time-dropdown" style={{ width: "100%" }}>{bookingInfo[RECTIME]}</Dropdown.Toggle>

                                <Dropdown.Menu>
                                    {["09:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "01:00 PM", "02:00 PM", "03:00 PM", "04:00 PM", "05:00 PM"].map((elem, index) => {
                                        return (
                                            <Dropdown.Item key={index} eventKey={elem}>{elem}</Dropdown.Item>
                                        )
                                    })}
                                </Dropdown.Menu>
                            </Dropdown>
                            <Dropdown className="mb-2" onSelect={(e) => {changeInfo(RECOCC, e)}}>
                                <Dropdown.Toggle variant="secondary" id="occurence-dropdown" style={{ width: "100%" }}>{bookingInfo[RECOCC]}</Dropdown.Toggle>

                                <Dropdown.Menu>
                                    {["Twice a week", "Every week", "Every 2 weeks", "Every month", "Every year"].map((elem, index) => {
                                        return (
                                            <Dropdown.Item key={index} eventKey={elem}>{elem}</Dropdown.Item>
                                        )
                                    })}
                                </Dropdown.Menu>
                            </Dropdown>
                        </Col>
                    </Row>
                </div>
            );
        } else {
            return (
                <div className="d-flex flex-column align-items-center justify-content-center" style={{height:"400px"}}>
                    <h1 className="mb-4">Location Information</h1>
                    <Row className="d-flex align-items-center" style={{height:"400px"}}>
                        <div className="input-group mb-3" style={{height:"3rem"}}>
                            <input onChange={(e) => {changeInfo(ADDRESS, e.target.value)}} type="text" className="form-control" placeholder="Address" aria-label="Address" aria-describedby="Address" defaultValue={bookingInfo[ADDRESS]}/>
                        </div>
                        <div className="input-group mb-3" style={{height:"3rem"}}>
                            <input onChange={(e) => {changeInfo(POSTAL, e.target.value)}} type="text" className="form-control" placeholder="Postal Code" aria-label="Postal Code" aria-describedby="Postal Code" defaultValue={bookingInfo[POSTAL]}/>
                        </div>
                    </Row>
                </div>
            );
        }
    }
    const bookEnd = () => {
        if (isBookingInfoComplete()) setBookingState(LOGIN);
        else setShowAlert(true);
    }
    const changeInfo = (ind, val) => {
        switch (ind) {
            case CATEGORY:
                if (bookingInfo[SERVICE] !== "Service") setNode(0, DONE);
                else setNode(0, NEXT);
                break;
            case SERVICE:
                if (bookingInfo[CATEGORY] !== 0) setNode(0, DONE);
                else setNode(0, NEXT);
                break;
            case DATE:
                if (!((val.getDay() === 6) || (val.getDay()  === 0)) && (bookingInfo[TIME] !== "Time")) setNode(1, DONE);
                else setNode(1, NEXT);
                break;
            case TIME:
                if (!((bookingInfo[DATE].getDay() === 6) || (bookingInfo[DATE].getDay()  === 0))) setNode(1, DONE);
                else setNode(1, NEXT);
                break;
            case RECDATE:
                if (!((val.getDay() === 6) || (val.getDay()  === 0)) && (bookingInfo[RECTIME] !== "Time") && (bookingInfo[RECOCC] !== "Occurence")) setNode(2, DONE);
                else setNode(2, NEXT);
                break;
            case RECTIME:
                if (!((bookingInfo[RECDATE].getDay() === 6) || (bookingInfo[RECDATE].getDay()  === 0)) && (bookingInfo[RECOCC] !== "Occurence")) setNode(2, DONE);
                else setNode(2, NEXT);
                break;
            case RECOCC:
                if (!((bookingInfo[RECDATE].getDay() === 6) || (bookingInfo[RECDATE].getDay()  === 0)) && (bookingInfo[RECTIME] !== "Time")) setNode(2, DONE);
                else setNode(2, NEXT);
                break;
            case ADDRESS:
                if (bookingInfo[POSTAL] !== "") setNode(3, DONE);
                else setNode(3, NEXT);
                break;
            case POSTAL:
                if (bookingInfo[ADDRESS] !== "") setNode(3, DONE);
                else setNode(3, NEXT);
                break;
            default:
                break;
        }
        setBookingInfo(
            bookingInfo.map((elem, index) => {
                return index === ind ? val : elem;
            })
        )
    };

    return (
        <>
            <PageTop
                noTop={true}
                language={props.language}
                setLanguage={props.setLanguage}
            />
            <Container style={{marginTop:"100px"}}>
                <h1 className="display-1">Book With Us Today !</h1>
                <LinearProgression nodes={nodes} setNode={setNode} info={bookingInfo} infoChange={setBookingInfo}/>
                <div className="d-flex border p-3 align-items-center flex-column">
                    <Form className="mb-4">
                        {nodeToInput()}
                    </Form>
                    <div className="d-flex" style={{ width: "70%" }}>
                        {nodes[0][0] !== ACTIVE ? <button onClick={prevNode} className="btn btn-secondary me-auto" style={{fontSize:"1.5rem"}}>Prev</button> : ""}
                        {nodes[3][0] === ACTIVE ?
                            <button onClick={bookEnd} className={"btn btn-secondary ms-auto" + (isBookingInfoComplete() ? "" : " disabled")} style={{fontSize:"1.5rem"}}>Book</button> :
                            <button onClick={nextNode} className="btn btn-secondary ms-auto" style={{fontSize:"1.5rem"}}>Next</button>}
                    </div>
                </div>
            </Container>
            <PageBottom />
            <BookingPopups popup={bookingState} stateChange={setBookingState} bookingInfo={bookingInfo} reset={resetNodes}/>
            <Alert show={showAlert} variant="warning" style={{position:"fixed", top:"10%", right:"0"}}>
                <Alert.Heading>Incomplete Booking Information</Alert.Heading>
                <p>Some information is still needed to complete the booking process.</p>
                <button onClick={() => setShowAlert(false)} style={{position:"absolute", top:"10%", right:"3%"}}>X</button>
            </Alert>
        </>
    )
}