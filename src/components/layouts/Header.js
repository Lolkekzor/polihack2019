import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = ({ showLoader }) => {
  return (
    <Navbar style={{ backgroundColor: " #ff6600" }}>
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
        
      </Nav>
    </Navbar>
  );
};

export default Header;
