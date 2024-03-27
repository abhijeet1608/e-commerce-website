import React from "react";
import { Nav, Navbar, Button, Badge } from "react-bootstrap";
import { TiShoppingCart } from "react-icons/ti";
import { Link } from "react-router-dom";

import "../../style/style.css";

function Header() {
  return (
    <div>
      <Navbar bg="dark" expand="lg" variant="dark" id="navbar-container">
        <Navbar.Brand href="#">Narutoo</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="mr-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Link to="/">
              <Navbar.Text className="navbar-link">Home</Navbar.Text>
            </Link>
            <Link to="/categories">
              <Navbar.Text className="navbar-link">Categories</Navbar.Text>
            </Link>
            <Link to="/products">
              <Navbar.Text className="navbar-link">Product</Navbar.Text>
            </Link>
          </Nav>
          <Link to="/checkout">
            <Button variant="success">
              <div>
                <TiShoppingCart fontSize="30" />
                <Badge bg="info">{10}</Badge>
              </div>
            </Button>
          </Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Header;
