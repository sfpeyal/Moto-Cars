import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import './BestSales.css'

const BestSales = () => {
    return (
        <div className="best-sales-container">
            <h1 className="py-5">MOST SOLD MODEL</h1>
            <Container>
                <Row xs={1} md={3} className="g-4">

                    <Col>
                        <Card className="border-0">
                            <Card.Img variant="top" src="https://images.unsplash.com/photo-1520050206274-a1ae44613e6d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
                            <Card.Body>
                                <Card.Title>Audi A4 Sedan</Card.Title>
                                <Card.Text>
                                    The A4 represents the core of the brand – after four years in the making, Audi has made the successful midsize model even tauter and sportier.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col>
                        <Card className="border-0">
                            <Card.Img variant="top" src="https://images.unsplash.com/photo-1502877338535-766e1452684a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80" />
                            <Card.Body>
                                <Card.Title>Audi S3 Sedan</Card.Title>
                                <Card.Text>
                                    The s3 represents the core of the brand – after four years in the making, Audi has made the successful midsize model even tauter and sportier.

                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col>
                        <Card className="border-0">
                            <Card.Img variant="top" src="https://images.unsplash.com/photo-1597007030739-6d2e7172ee5b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80" />
                            <Card.Body>
                                <Card.Title>Audi A3 Sedan</Card.Title>
                                <Card.Text>
                                    The A3 represents the core of the brand – after four years in the making, Audi has made the successful midsize model even tauter and sportier.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default BestSales;