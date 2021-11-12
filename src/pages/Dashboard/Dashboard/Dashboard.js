import React from 'react';
import { Button, Container, Nav, Navbar, Offcanvas } from 'react-bootstrap';
import Review from './Review/Review'
import Pay from './Pay/Pay'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
} from "react-router-dom";
import DashboardHome from './DashboardHome/DashboardHome';
import MyOrder from './MyOrder/MyOrder';
import MakeAdmin from './MakeAdmin/MakeAdmin';
import AddProduct from './AddProduct/AddProduct';
import ManageAllOrders from './ManageAllOrders/ManageAllOrders';
import useAuth from '../../../Hooks/useAuth';

const Dashboard = () => {
  let { path, url } = useRouteMatch();
  const { logout, admin } = useAuth()

  return (
    <>
      <Navbar bg="light" expand={false}>
        <Container>
          <Navbar.Brand href="#">DASHBOARD BAR</Navbar.Brand>
          <Navbar.Toggle aria-controls="offcanvasNavbar" />
          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel">
                Dashboard
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1">
                {admin && (
                  <Nav>
                    <Nav.Link as={Link} to={`${url}/make-admin`}>
                      Make Admin
                    </Nav.Link>
                    <Nav.Link as={Link} to={`${url}/add-product`}>
                      Add Product
                    </Nav.Link>
                    <Nav.Link as={Link} to={`${url}/manage-orders`}>
                      Manage All Orders
                    </Nav.Link>
                  </Nav>
                )}
                <Nav.Link as={Link} to={`${url}/my-orders`}>
                  My Order
                </Nav.Link>
                <Nav.Link as={Link} to={`${url}/pay`}>
                  Pay
                </Nav.Link>
                <Nav.Link as={Link} to={`${url}/review`}>
                  Review
                </Nav.Link>
                {/* <Nav.Link onClick={logout}>Logout</Nav.Link> */}
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
      <Container>
        <Switch>
          <Route exact path={path}>
            <DashboardHome></DashboardHome>
          </Route>
          <Route path={`${path}/my-orders`}>
            <MyOrder></MyOrder>
          </Route>
          <Route path={`${path}/pay`}>
            <Pay></Pay>
          </Route>
          <Route path={`${path}/review`}>
            <Review></Review>
          </Route>
          <Route path={`${path}/make-admin`}>
            <MakeAdmin></MakeAdmin>
          </Route>
          <Route path={`${path}/add-product`}>
            <AddProduct></AddProduct>
          </Route>
          <Route path={`${path}/manage-orders`}>
            <ManageAllOrders></ManageAllOrders>
          </Route>
        </Switch>
      </Container>
    </>
  );
};

export default Dashboard;