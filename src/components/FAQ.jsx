import React, { useState } from 'react';
import { Container, Form, Row, Col, Card } from "react-bootstrap"

import PageTop from "./sub-components/PageTop.jsx"
import PageBottom from "./sub-components/PageBottom.jsx"

export default function Home(props) {
    const FAQs = [
        {
            question: "What areas do you serve?",
            answer: "We provide our services throughout Ottawa, covering all neighborhoods within the city."
        },
        {
            question: "How do I book a service?",
            answer: "You can book a service through our website by filling out the booking form, or by contacting us via phone or email."
        },
        {
            question: "What are your hours of operation?",
            answer: "We operate from 8 AM to 8 PM, seven days a week."
        },
        {
            question: "Are your workers insured?",
            answer: "Yes, all our student workers are fully insured and trained to ensure a safe and professional service."
        },
        {
            question: "What payment methods do you accept?",
            answer: "We accept payments through credit cards, debit cards, and PayPal."
        },
        {
            question: "Can I reschedule or cancel a booking?",
            answer: "Yes, you can reschedule or cancel your booking by contacting us at least 24 hours in advance."
        },
        {
            question: "Do you provide your own equipment and supplies?",
            answer: "Yes, our team comes fully equipped with all the necessary tools and eco-friendly supplies needed for the job."
        },
        {
            question: "Is there a satisfaction guarantee?",
            answer: "Absolutely! We are committed to providing excellent service and will address any concerns to ensure your satisfaction."
        }];

        const [searchTerm, setSearchTerm] = useState('');

        const filteredFaqs = FAQs.filter(faq =>
          faq.question.toLowerCase().includes(searchTerm.toLowerCase())
        );

    return (
        <>
            <PageTop
                noTop={true}
                active="FAQ"
                language={props.language}
                setLanguage={props.setLanguage}
            />
            <Container style={{ marginTop: "100px" }}>
                <h1 className="display-1">FAQ</h1>
                <Form.Group controlId="search">
                    <Form.Label>Search FAQs</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Search..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </Form.Group>
                <Row className="mt-4">
                    {filteredFaqs.map((faq, index) => (
                        <Col md={6} key={index} className="mb-3">
                            <Card>
                                <Card.Body>
                                    <Card.Title>{faq.question}</Card.Title>
                                    <Card.Text>{faq.answer}</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
            <PageBottom />
        </>
    )
}