export default function ContactConfirm(props) {
    console.log(props.data.formName.value);
    return (
        <div className="d-flex justify-content-center align-items-center" style={{ height: "100%", width: "100%", backgroundColor: "rgba(0, 0, 0, 0.75)", top: "0", zIndex: "3", position: "fixed" }}>
            <div className="d-flex flex-column align-items-center justify-content-center">
                <div className='position-absolute bg-white z-3 rounded'>
                    <div className='d-flex justify-content-between px-4 pt-4'>
                        <h1 className='text-primary h3 pe-5'>Support Ticket Created</h1>
                        <button className="btn btn-dark mb-3 me-1 mt-1" onClick={() => { props.stateChange(false) }}>X</button>
                    </div>
                    <div className='d-flex flex-column justify-content-between px-4 pt-4'>
                        <p><span className='h5'>Name: </span>{props.data.formName}</p>
                        <p><span className='h5'>Email: </span>{props.data.formEmail}</p>
                        <p><span className='h5'>Subject: </span>{props.data.formSubject}</p>
                        <p><span className='h5'>Message: </span>{props.data.formMessage}</p>
                    </div>
                    <p className="h3 text-center">Thank you for your feedback!</p>
                    <div className='d-flex flex-column p-4'>
                        <h1>{document.getElementById("signupFirstName")}</h1>
                        <button className="btn btn-primary" onClick={() => { props.stateChange(false) }}>Confirm</button>
                    </div>
                </div>
            </div>
        </div>
    )
}