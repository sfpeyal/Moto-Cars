import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Form, Row, Button } from 'react-bootstrap';
import { useParams } from 'react-router';
import useAuth from '../../Hooks/useAuth';
import './Purchase.css'

const Purchase = () => {
    const [product, setProduct] = useState({});
    const { id } = useParams();
    const { user } = useAuth();



    //order handleling

    const initialInfo = { userName: user.displayName, email: user.email, productName: '', address: '', phone: '' }
    const [orderData, setOrderData] = useState(initialInfo);


    const onHandleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newOrderData = { ...orderData };
        newOrderData[field] = value;
        setOrderData(newOrderData);



    }


    const handleOrder = e => {
        // order data
        const order = {
            ...orderData,
        }
        // send data to server
        fetch('http://localhost:5000/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Your order done!');
                }
            })

        e.preventDefault();
    }


    useEffect(() => {
        const url = `http://localhost:5000/products/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])
    return (
        <div className="purchase-container my-5">
            <h1>this will purchase route for this id</h1>
            <Container>
                <Row xs={1} md={3} className="g-4">
                    <Col></Col>
                    <Col>
                        <Card border="0">
                            <Card.Img variant="top" src={product.picture} />
                            <Card.Body>
                                <Card.Title className="fst-italic">{product.name}</Card.Title>
                                <Card.Text className="fst-italic">
                                    {product.info}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col></Col>
                </Row>

                <h1>Fill This Form For Complete Order</h1>
                <Form onSubmit={handleOrder}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Your Name</Form.Label>
                        <Form.Control defaultValue={user.displayName} type="text"
                            name="userName"
                            onBlur={onHandleOnBlur}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Your Email</Form.Label>
                        <Form.Control defaultValue={user.email} type="email"
                            name="email"
                            onBlur={onHandleOnBlur}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Product Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter Product Name"
                            name="productName"
                            onBlur={onHandleOnBlur}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Your Address</Form.Label>
                        <Form.Control type="text" placeholder="Your Address"
                            name="address"
                            onBlur={onHandleOnBlur}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Phone Nmuber</Form.Label>
                        <Form.Control type="number" placeholder="Phone Nmuber"
                            name="phone"
                            onBlur={onHandleOnBlur}
                        />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </Container>









        </div>
    );
};

export default Purchase;