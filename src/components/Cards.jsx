import React from "react";
import "../styles/cards.css";
import Card from "react-bootstrap/Card";
import "../styles/sendbtn.css";
import { useNavigate } from "react-router-dom";

const Cards = ({ item }) => {
  const navigate = useNavigate();
  return (
    <div className="tools-wrap tool">
      <Card
        style={{ width: "24rem", height: "14rem" }}
        className="mt-5 mb-3 mx-4 align-items-center tools-wrap tool d-flex flex-row">
        <div>
          <Card.Img
            className="justify-content-center"
            variant="top"
            style={{ width: "7rem" }}
            src="https://upload.wikimedia.org/wikipedia/commons/4/4d/Cat_November_2010-1a.jpg"
          />
        </div>
        <Card.Body>
          <Card.Title style={{ fontSize: "23px", fontWeight: "bold" }}>
            {item.name} {item.surname}
          </Card.Title>
          <Card.Text
            style={{
              color: "palevioletred",
              fontSize: "15px",
              fontWeight: "bold",
            }}>
            {item.group}
          </Card.Text>
          <a className="send_btn" onClick={() => navigate(`/users/${item.id}`)}>
            Send
          </a>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Cards;
