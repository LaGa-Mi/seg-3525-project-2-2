import { Container, Row, Col, Card, Button } from "react-bootstrap"

import PageTop from "./sub-components/PageTop.jsx"
import PageBottom from "./sub-components/PageBottom.jsx";

export default function AccountOpt1(props) {
    const user = {
        name: "John Doe",
        email: "john.doe@example.com",
        phone: "123-456-7890",
        address: "1234 Main St, Ottawa, ON, A1A 1A1",
        servicesBooked: [
            { service: "Yard Work", date: "2024-07-20", status: "Completed" },
            { service: "Car Washing", date: "2024-07-22", status: "Scheduled" }
        ]
    };

    return (
        <>
            <PageTop
                noTop={true}
                active="account"
                language={props.language}
                setLanguage={props.setLanguage}
            />
            <Container style={{ marginTop: "100px", height:"71vh"}}>
                <h1 className="mb-4">My Account</h1>
                <Row>
                    <Col md={6}>
                        <Card>
                            <Card.Body>
                                <Card.Title>Account Details</Card.Title>
                                <Card.Text><strong>Name:</strong> {user.name}</Card.Text>
                                <Card.Text><strong>Email:</strong> {user.email}</Card.Text>
                                <Card.Text><strong>Phone:</strong> {user.phone}</Card.Text>
                                <Card.Text><strong>Address:</strong> {user.address}</Card.Text>
                                <Button variant="secondary">Edit Details</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6}>
                        <Card>
                            <Card.Body>
                                <Card.Title>Next Appointment</Card.Title>
                                {user.servicesBooked.map((service, index) => (
                                    <div key={index} className="mb-3">
                                        <Card.Text><strong>Service:</strong> {service.service}</Card.Text>
                                        <Card.Text><strong>Date:</strong> {service.date}</Card.Text>
                                        <Card.Text><strong>Status:</strong> {service.status}</Card.Text>
                                    </div>
                                ))}
                                <Button variant="secondary">View All Bookings</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            <PageBottom/>
        </>
    )
}