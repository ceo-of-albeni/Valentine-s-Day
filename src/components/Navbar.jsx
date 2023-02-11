import React from "react";
import Container from "react-bootstrap/Container";
import "../styles/header.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Logo from "../images/Untitled (1).svg";
import { useNavigate } from "react-router-dom";

function NavScrollExample() {
  const navigate = useNavigate();

  return (
    <Navbar
      style={{
        backgroundImage:
          "linear-gradient(to right, #ffdfd5, rgb(230, 107, 107),#b20a2c)",
      }}
      variant="dark"
      expand="lg">
      <Container fluid>
        <Navbar.Brand>
          <img
            src={Logo}
            width="280"
            alt=""
            id="logo"
            onClick={() => navigate("/")}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto ms-auto my-lg-0 "
            style={{ maxHeight: "100px" }}
            navbarScroll></Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
