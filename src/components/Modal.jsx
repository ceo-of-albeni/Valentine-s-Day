import React from "react";
import { useNavigate } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
// import "../styles/loginbtn.css";

const MyModal = props => {
  const navigate = useNavigate();

  return (
    <div>
      {/* modal */}
      <Modal
        {...props}
        className="d-flex align-items-center justify-content-center"
        style={{ color: "palevioletred" }}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered>
        <Modal.Header closeButton style={{ backgroundColor: "#f5d4d9" }}>
          <Modal.Title id="contained-modal-title-vcenter">Sign In</Modal.Title>
        </Modal.Header>
        <Modal.Body
          style={{
            width: "400px",
            height: "350px",
            backgroundColor: "#ffebee",
          }}
          className="d-flex align-items-center justify-content-center">
          {/* <h4>Sign In</h4> */}
          <Form className="d-flex flex-column">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                It must be your Ala-Too email.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group> */}
            <a className="login_btn mb-3">Log In</a>
            {/* <br /> */}
            <span>
              Don't have an account yet?{"  "}
              <a onClick={() => navigate("/register")}> Sign Up</a>
            </span>
          </Form>
        </Modal.Body>
      </Modal>
      {/* end of modal */}
    </div>
  );
};

export default MyModal;
