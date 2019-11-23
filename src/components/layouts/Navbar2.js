import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Navbar2 = ({ showLoader }) => {
  return (
    <Navbar style={{ background: "#e8e8e8" }}>
      <Nav className="mr-auto navbar2">

        {/** Aici modificam pentru categorii (materii) */}

        {["ASDN", "Grafica", "Assembly", "OOP", "PSN", "Electrotehnica"].map(item => {
          return (
            <Link
              to={"/"+item}
              style={linkStyle}
              onClick={showLoader}
              className="navLink"
            >
              <span>{item}</span>
            </Link>
          )
        })}
        
      </Nav>
    </Navbar>
  );
};

const linkStyle = {
  textDecoration: "none",
  color: "#000",
  cursor: "pointer",
  marginRight: "10px",
  padding: "5px",
  paddingLeft: "20px",
  paddingRight: "20px",
  boxShadow: "0px 2px 10px -7px rgba(0, 0, 0, 0.75)",
  borderRadius: "20px",
  transition: " all 0.5s",
  background: "#fff"
};
export default Navbar2;
