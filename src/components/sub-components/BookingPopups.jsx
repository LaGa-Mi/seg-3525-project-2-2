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
                                <div className="d-flex flex-column p-4">
                                    <div className="input-group mb-3">
                                        <input type="text" className="form-control" placeholder="Email" aria-label="Email" aria-describedby="Email" />
                                    </div>
                                    <div className="input-group mb-3">
                                        <input type="text" className="form-control" placeholder="Password" aria-label="Password" aria-describedby="Password" />
                                    </div>
                                    <button className="btn btn-primary" onClick={() => {props.stateChange(CONFIRM)}}>Login</button>
                                    <p onClick={() => {props.stateChange(SIGNUP)}} style={{cursor:"pointer"}}><u>Don't have an account? Create one!</u></p>
                                </div>
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
                                <div className='d-flex flex-column p-4'>
                                    <div className="input-group mb-3">
                                        <input id="signupFirstName" type="text" className="form-control" placeholder="First Name" aria-label="First Name" aria-describedby="First Name" />
                                    </div>
                                    <div className="input-group mb-3">
                                        <input id="signupLastName" type="text" className="form-control" placeholder="Last Name" aria-label="Last Name" aria-describedby="Last Name" />
                                    </div>
                                    <div className="input-group mb-3">
                                        <input id="signupEmail" type="text" className="form-control" placeholder="Email" aria-label="Email" aria-describedby="Email" />
                                    </div>
                                    <div className="input-group mb-3">
                                        <input id="signupPassword" type="text" className="form-control" placeholder="Password" aria-label="Password" aria-describedby="Password" />
                                    </div>
                                    <div className="input-group mb-3">
                                        <input id="signupPasswordConfirm" type="text" className="form-control" placeholder="Password Confirm" aria-label="Password Confirm" aria-describedby="Password Confirm" />
                                    </div>
                                    <button className="btn btn-primary" onClick={() => {props.stateChange(LOGIN)}}>Sign Up</button>
                                </div>
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
                                    <button className="btn btn-primary" onClick={() => {props.stateChange(NONE)}}>Confirm</button>
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