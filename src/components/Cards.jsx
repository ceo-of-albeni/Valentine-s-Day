import React, { useEffect, useState } from "react";
import "../styles/cards.css";
import Card from "react-bootstrap/Card";
import "../styles/sendbtn.css";
import { useNavigate } from "react-router-dom";

const Cards = ({ item }) => {
  const navigate = useNavigate();

  const url = "https://api.thecatapi.com/v1/images/search";
  const [catUrl, setCatUrl] = useState(
    "https://cdn.dribbble.com/users/160117/screenshots/3197970/media/51a6e132b11664f7f2085bb6a35fc628.gif"
  );

  const getCat = () => {
    fetch(url)
      .then(res => res.json())
      .then(cats => {
        // console.log("Cats: ", cats);
        const catUrl = cats[0].url;
        setCatUrl(catUrl);
      })
      .catch(error => {
        console.log("Error: ", error);
      });
  };

  useEffect(() => {
    console.log("Loading your feline friends...");
    getCat();
  }, []);

  return (
    <div className="tools-wrap tool">
      <Card
        id="cardcss"
        style={{ width: "24rem", height: "14rem" }}
        className="mt-5 mb-3 mx-4 align-items-center tools-wrap tool d-flex flex-row">
        <div>
          <Card.Img
            className="justify-content-center"
            variant="top"
            style={{ width: "7rem" }}
            src={catUrl}
          />
        </div>
        <Card.Body>
          <Card.Title
            id="cards_name"
            style={{ fontSize: "23px", fontWeight: "bold" }}>
            {item.first_name} {item.last_name}
          </Card.Title>
          <Card.Text
            style={{
              color: "palevioletred",
              fontSize: "15px",
              fontWeight: "bold",
            }}>
            {item.group_name}
          </Card.Text>
          <a className="send_btn" onClick={() => navigate(" /users/${item.first_name}")}>
            Send
          </a>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Cards;
