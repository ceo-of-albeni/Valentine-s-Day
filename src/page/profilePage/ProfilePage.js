import classes from "../profilePage/profilePage.module.css";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { userContext } from "../../context/userContext";
import PinkModal from "../../components/modals/PinkModal";
import RedModal from "../../components/modals/RedModal";
import YellowishModal from "../../components/modals/YellowishModal";
import axios from "axios";

function ProfilePage() {
  const { getOneUser, oneUser } = useContext(userContext);

  const params = useParams();

  const [openPinkModal, setOpenPinkModal] = useState(false);
  const [openRedModal, setOpenRedModal] = useState(false);
  const [openYellowishModal, setOpenYellowishModal] = useState(false);

  useEffect(() => {
    getOneUser(params.first_name);
  }, []);

  const url = "https://api.thecatapi.com/v1/images/search";
  const [catUrl, setCatUrl] = useState(
    "https://cdn.dribbble.com/users/160117/screenshots/3197970/media/51a6e132b11664f7f2085bb6a35fc628.gif"
  );

  const getCat = () => {
    fetch(url)
      .then(res => res.json())
      .then(cats => {
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

  return oneUser ? (
    <div className={classes.container}>
      <div className={classes.prof}>
        <div className={classes.prof_img}>
          <img src={catUrl} alt="cat" />
        </div>
        <div className={classes.user}>
          <div className={classes.user_sur_name}>
            <div className={classes.user_name}>
              <p>{oneUser.first_name}</p>
            </div>
            <div className={classes.user_sur}>
              <p>{oneUser.last_name}</p>
            </div>
          </div>
          <div className={classes.user_faculty}>
            <p>{oneUser.group_name}</p>
          </div>

          <div className={classes.hearts}>
            <div className="d-flex flex-column align-items-center">
              <a
                className={classes.redHeart}
                onClick={() => {
                  setOpenRedModal(true);
                }}></a>
              <b className="hearts_p">"You are the Love of my Life!"</b>
              <p className={classes.hearts_count}>{oneUser.red}</p>
            </div>

            <div className="d-flex flex-column align-items-center">
              <a
                className={classes.yellowishHeart}
                onClick={() => {
                  setOpenYellowishModal(true);
                }}></a>
              <b className="hearts_p">"I'm kind of interested in You~?"</b>
              <p className={classes.hearts_count}>{oneUser.beige}</p>
            </div>

            <div className="d-flex flex-column align-items-center">
              <a
                className={classes.pinkHeart}
                onClick={() => {
                  setOpenPinkModal(true);
                }}></a>
              <b className="hearts_p">
                "I'll rather spend this day with Friends!"
              </b>
              <p className={classes.hearts_count}>{oneUser.pink}</p>
            </div>
          </div>
        </div>
      </div>
      {openRedModal && <RedModal closeModal={setOpenRedModal} />}
      {openYellowishModal && (
        <YellowishModal closeModal={setOpenYellowishModal} />
      )}
      {openPinkModal && <PinkModal closeModal={setOpenPinkModal} />}
    </div>
  ) : (
    <div className="d-flex justify-content-center align-items-center">
      <h1>Loading...</h1>
    </div>
  );
}

export default ProfilePage;
