import React from "react";
import "../styles/homepage.css";
import { useNavigate } from "react-router-dom";
import PinkHeart from "../images/pink.svg";
import YellowHeart from "../images/yellowish.svg";
import RedHeart from "../images/red.svg";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="d-flex flex-column m-4">
      {/* first section */}
      <div
        id="first-section"
        className="d-flex ps-5 mb-5 "
        style={{
          border: "5px double #b20a2c",
        }}>
        <div className="d-flex" id="first-section_article">
          <article className="d-flex flex-column justify-content-center gap-2">
            <h1>
              VALENTINE'S DAY <br />
            </h1>
            <h3> in Ala-Too University</h3>
            <p className="col-9 homepage_p">
              The season of love is here again and your loved one is waiting for
              your attention. A romantic valentine's message is the best way to
              show your affection to your partner. If your heart is asking you
              what are some best happy valentine wishes for my love, you can
              start by sending hearts with lovely messages.
            </p>

            <a
              style={{ width: "fit-content" }}
              className="animated-button1"
              onClick={() => navigate("/users")}>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Start
            </a>
          </article>
        </div>
        <img
          src="https://www.onlygfx.com/wp-content/uploads/2021/02/6-pixel-heart-3.png"
          height="550"
          alt="image"
          id="big-heart"
        />
      </div>
      {/* end of first section */}

      {/* second section */}
      <div className="d-flex justify-content-around my-5" id="hearts_container">
        <div
          className="d-flex flex-column w-25 align-items-center"
          id="hearts_container-div">
          <h1 className="hearts_h1">RED HEART</h1>
          <img src={RedHeart} width="200" alt="" className="my-4" />
          <b className="hearts_p">
            "You are the Love of my Life!"
            <br />
          </b>
          <hr width="100%" />
          <p className="hearts_p">
            Send this to your soulmate to make them happy and feel loved.
            <br />
            Share your emotions to spend this special day with wholesome
            moments.
            <br />
            Some cute messages along will make it even better!
          </p>
        </div>

        <div
          className="d-flex flex-column w-25 align-items-center"
          id="hearts_container-div">
          <h1 className="hearts_h1">BEIGE HEART</h1>
          <img src={YellowHeart} width="200" alt="" className="my-4" />

          <b className="hearts_p">
            "I'm kind of interested in You~?"
            <br />
          </b>
          <hr width="100%" />
          <p className="hearts_p">
            Maybe today is the only day when I can make a first move to him/her?
            <br />
            If you miss this single chance you may regret it through your whole
            life!
            <br />
            Valentine's Day is here to help you be brave!
          </p>
        </div>

        <div
          className="d-flex flex-column w-25 align-items-center pink_hearts-div"
          id="hearts_container-div">
          <h1 className="hearts_h1">PINK HEART</h1>
          <img src={PinkHeart} width="200" alt="" className="my-4" />
          <b className="hearts_p">
            "I'll rather spend this day with Friends!"
            <br />
          </b>

          <hr width="100%" />
          <p className="hearts_p">
            What can be more precious than friends?
            <br />
            Don't be upset that you haven't found your soulmate yet!
            <br />
            You can spend this day together with your friends!
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
