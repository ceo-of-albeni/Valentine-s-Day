import React, { useEffect, useContext } from "react";
import Container from "react-bootstrap/Container";
import "../styles/header.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Logo from "../images/Untitled (1).svg";
// import { useNavigate } from "react-router-dom";

function NavScrollExample() {
  // const navigate = useNavigate();

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
          <img src={Logo} width="280" alt="" id="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto ms-auto my-lg-0 "
            style={{ maxHeight: "100px" }}
            navbarScroll>
            {/* <Nav.Link id="navlink"></Nav.Link> */}
            {/* <Nav.Link id="navlink">ABOUT</Nav.Link>
            <Nav.Link id="navlink">PLACES</Nav.Link> */}
          </Nav>

          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              style={{ color: "palevioletred" }}
            />
            <div className="box-3">
              <div className="btn btn-three">
                <span style={{ color: "white" }}>Search</span>
              </div>
            </div>
          </Form>

          {/* <div className="box-3">
            <div className="btn btn-three">
              <span style={{ color: "white" }}>Log In</span>
            </div>
          </div> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
