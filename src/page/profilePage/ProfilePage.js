import classes from "../profilePage/profilePage.module.css";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { userContext } from "../../context/userContext";
function ProfilePage() {
  const { getOneUser, oneUser } = useContext(userContext);

  const params = useParams();

  // console.log(oneUser);

  useEffect(() => {
    getOneUser(params.id);
  }, []);

  const url = "https://api.thecatapi.com/v1/images/search";
  const [catUrl, setCatUrl] = useState(
    "https://cdn.dribbble.com/users/160117/screenshots/3197970/media/51a6e132b11664f7f2085bb6a35fc628.gif"
  );

  const getCat = () => {
    fetch(url)
      .then(res => res.json())
      .then(cats => {
        console.log("Cats: ", cats);
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
              <p>{oneUser.name}</p>
            </div>
            <div className={classes.user_sur}>
              <p>{oneUser.surname}</p>
            </div>
          </div>
          <div className={classes.user_faculty}>
            <p>{oneUser.group}</p>
          </div>
          <div className={classes.hearts}>
            <div className="d-flex flex-column align-items-center me-5">
              <a className={classes.redHeart}></a>
              <b className="hearts_p">"You are the Love of my Life!"</b>
              <p className={classes.hearts_count}>{oneUser.red}</p>
            </div>
            <div className="d-flex flex-column align-items-center mx-5">
              <a className={classes.yellowishHeart}></a>
              <b className="hearts_p">"I'm kind of interested in You~?"</b>
              <p className={classes.hearts_count}>{oneUser.beige}</p>
            </div>
            <div className="d-flex flex-column align-items-center mx-5">
              <a className={classes.pinkHeart}></a>
              <b className="hearts_p">
                "I'll rather spend this day with Friends!"
              </b>
              <p className={classes.hearts_count}>{oneUser.pink}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <h1>Loading...</h1>
  );
}

export default ProfilePage;
