import React from "react";
import { Button, Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = ({ showLoader }) => {
  return (
    <Navbar style={{ backgroundColor: "#26375D" }}>
      <Navbar.Brand href="#home" style={{ color: "#fff" }}>
        <Link
          to="/"
          style={{ color: "#fff", textDecoration: "none" }}
          onClick={showLoader}
        >
          <span className="logo"><b>B</b></span> RIDGEWORQ
        </Link>
      </Navbar.Brand>

      <Nav className="ml-auto">
        <Link to={'/user'}>
          <Button variant="info">
            My profile
          </Button>
        </Link>
      </Nav>
    </Navbar>
  );
};

export default Header;
