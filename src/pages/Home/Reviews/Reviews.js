import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './Reviews.css'

const Reviews = () => {
    return (
        <div className="review-container">
            <h1 className="py-5">REVIEWS</h1>
            <Container>
                <Row xs={1} md={3} className="g-4">

                    <Col>
                        <Card className="border-0">
                            <Card.Img variant="top" src="https://images.unsplash.com/photo-1500048993953-d23a436266cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80" />
                            <Card.Body>
                                <Card.Title>Max</Card.Title>
                                <Card.Title>Rate: 4.7</Card.Title>
                                <Card.Text>
                                    Their committed sales staff strive to find the right model for every customer to suit their lifestyle and budget.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col>
                        <Card className="border-0">
                            <Card.Img variant="top" src="https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1176&q=80" />
                            <Card.Body>
                                <Card.Title>Eva</Card.Title>
                                <Card.Title>Rate: 4.9</Card.Title>

                                <Card.Text>
                                    A very well experience to buy cars for them. I liked there service what are thry provide with every coustmers.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col>
                        <Card className="border-0">
                            <Card.Img variant="top" src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
                            <Card.Body>
                                <Card.Title>Hassan</Card.Title>
                                <Card.Title>Rate: 4.8</Card.Title>

                                <Card.Text>
                                    A really positive car-buying experience. No hard sell, but plenty of time to show us the car and answer all our questions.                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Reviews;