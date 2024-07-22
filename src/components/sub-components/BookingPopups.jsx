import { Form } from "react-bootstrap";

const NONE = 0, LOGIN = 1, SIGNUP = 2, CONFIRM = 3;
const CATEGORY = 0, SERVICE = 1, DATE = 2, TIME = 3, MAKE_RECURRING = 4;

export default function BookingPopups(props) {
    const displayDate = (date) => { //https://stackoverflow.com/questions/3066586/get-string-in-yyyymmdd-format-from-js-date-object
        var mm = date.getMonth() + 1;
        var dd = date.getDate();
      
        return [date.getFullYear(),
                (mm>9 ? '' : '0') + mm,
                (dd>9 ? '' : '0') + dd
               ].join('/');
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (e.currentTarget.checkValidity()) {
            switch (props.popup) {
                case LOGIN:
                    props.stateChange(CONFIRM);
                    break;
                case SIGNUP:
                    props.stateChange(LOGIN);
                    break;
                case CONFIRM:
                    props.stateChange(NONE);
                    break;
                default:
                    break;
            }
        }
    }

    const showPopup = () => {
        switch (props.popup) {
            case NONE:
                return (
                    <></>
                )
            case LOGIN:
                return (
                    <div className="d-flex justify-content-center align-items-center" style={{ height: "100%", width: "100%", backgroundColor: "rgba(0, 0, 0, 0.75)", top: "0", zIndex: "3", position: "fixed" }}>
                        <div className="d-flex flex-column align-items-center justify-content-center">
                            <div className="bg-white z-3 rounded">
                                <div className="d-flex justify-content-between px-4 pt-4">
                                    <h1 className="text-primary h3">Login</h1>
                                    <button className="btn btn-dark mb-3 me-1 mt-1" onClick={() => {props.stateChange(NONE)}}>X</button>
                                </div>
                                <Form className="d-flex flex-column p-4" onSubmit={handleSubmit}>
                                    <Form.Group controlId="formEmail" className="mb-3">
                                        <Form.Control type="email" placeholder="Enter your email" required/>
                                    </Form.Group>
                                    <Form.Group controlId="formEmail" className="mb-3">
                                        <Form.Control type="password" placeholder="Password" required/>
                                    </Form.Group>
                                    <button type="submit" className="btn btn-primary">Login</button>
                                    <p onClick={() => {props.stateChange(SIGNUP)}} style={{cursor:"pointer"}}><u>Don't have an account? Create one!</u></p>
                                </Form>
                            </div>
                        </div>
                    </div >
                );
            case SIGNUP:
                return (
                    <div className="d-flex justify-content-center align-items-center" style={{ height: "100%", width: "100%", backgroundColor: "rgba(0, 0, 0, 0.75)", top: "0", zIndex: "3", position: "fixed" }}>
                        <div className="d-flex flex-column align-items-center justify-content-center">
                            <div className='position-absolute bg-white z-3 rounded'>
                                <div className='d-flex justify-content-between px-4 pt-4'>
                                    <h1 className='text-primary h3'>Sign Up</h1>
                                    <button className="btn btn-dark mb-3 me-1 mt-1" onClick={() => {props.stateChange(NONE)}}>X</button>
                                </div>
                                <Form className="d-flex flex-column p-4" onSubmit={handleSubmit}>
                                    <Form.Group controlId="signupFirstName" className="mb-3">
                                        <Form.Control type="text" placeholder="First Name" required />
                                    </Form.Group>
                                    <Form.Group controlId="signupLastName" className="mb-3">
                                        <Form.Control type="text" placeholder="Last Name" required />
                                    </Form.Group>
                                    <Form.Group controlId="signupEmail" className="mb-3">
                                        <Form.Control type="email" placeholder="Email" required />
                                    </Form.Group>
                                    <Form.Group controlId="signupPassword" className="mb-3">
                                        <Form.Control type="password" placeholder="Password" required />
                                    </Form.Group>
                                    <button type="submit" className="btn btn-primary">Sign Up</button>
                                    <p onClick={() => {props.stateChange(LOGIN)}} style={{cursor: "pointer"}}><u>Already have an account? Log in!</u></p>
                                </Form>
                            </div>
                        </div>
                    </div>
                );
            case CONFIRM:
                return (
                    <div className="d-flex justify-content-center align-items-center" style={{ height: "100%", width: "100%", backgroundColor: "rgba(0, 0, 0, 0.75)", top: "0", zIndex: "3", position: "fixed" }}>
                        <div className="d-flex flex-column align-items-center justify-content-center">
                            <div className='position-absolute bg-white z-3 rounded'>
                                <div className='d-flex justify-content-between px-4 pt-4'>
                                    <h1 className='text-primary h3 pe-5'>Confirm Booking</h1>
                                    <button className="btn btn-dark mb-3 me-1 mt-1" onClick={() => {props.stateChange(NONE)}}>X</button>
                                </div>
                                <div className='d-flex flex-column justify-content-between px-4 pt-4'>
                                    <p><span className='h5'>Category: </span>{props.bookingInfo[CATEGORY]}</p>
                                    <p><span className='h5'>Service: </span>{props.bookingInfo[SERVICE]}</p>
                                    <p><span className='h5'>Date: </span>{displayDate(props.bookingInfo[DATE])}</p>
                                    <p><span className='h5'>Time: </span>{props.bookingInfo[TIME]}</p>
                                    <p><span className='h5'>Recurring: </span>{props.bookingInfo[MAKE_RECURRING] ? "Yes" : "No"}</p>
                                </div>
                                <div className='d-flex flex-column p-4'>
                                    <h1>{document.getElementById("signupFirstName")}</h1>
                                    <button className="btn btn-primary" onClick={() => {props.stateChange(NONE); props.reset();}}>Confirm</button>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            default:
                return <></>;
        }
    }

    return (
        <>{showPopup()}</>
    )
}