import React from 'react';
import { Container, Nav, Navbar, } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const Navigation = () => {
    const { user, logout } = useAuth();
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">MoTo-Go</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/home">Home</Nav.Link>
                            <Nav.Link as={Link} to="/explore">Explore</Nav.Link>
                            <Nav.Link as={Link} to="/free-try">Free Try</Nav.Link>
                            <Nav.Link as={Link} to="/help">help</Nav.Link>


                            <Navbar.Text>
                                User: <span style={{ textDecoration: 'none', color: 'white' }}>{user?.displayName}</span>
                            </Navbar.Text>
                        </Nav>
                        <Nav>
                            {
                                user?.email ?
                                    <Nav.Link className="border-end">
                                        <button onClick={logout} type="button" className="btn btn-outline-light">LOGOUT</button>
                                    </Nav.Link>

                                    :
                                    <Nav.Link className="border-end" href="/login">
                                        <button type="button" className="btn btn-outline-light">LOGIN</button>
                                    </Nav.Link>
                            }

                            {
                                user?.email ?
                                    <Nav.Link href="/dashboard">
                                        <button type="button" className="btn btn-outline-light">DESHBORAD</button>
                                    </Nav.Link>
                                    :

                                    <Nav.Link href="/register">
                                        <button type="button" className="btn btn-outline-light">REGISTER</button>
                                    </Nav.Link>
                            }

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Navigation;