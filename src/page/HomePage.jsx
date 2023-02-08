import React from "react";
import "../styles/homepage.css";
import PinkHeart from "../images/pink.svg";
import YellowHeart from "../images/yellowish.svg";
import RedHeart from "../images/red.svg";
import Modal from "../components/Modal";

const HomePage = () => {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <div className="d-flex flex-column m-4">
      {/* first section */}
      <div
        className="d-flex ps-5 mb-5"
        style={{
          border: "5px double #b20a2c",
        }}>
        <div className="d-flex">
          <article className="d-flex flex-column justify-content-center gap-2 ">
            <h1>
              VALENTINE'S DAY <br />
            </h1>
            <h3> in Ala-Too University</h3>
            <p className="col-9 homepage_p">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
              dolorem, quaerat iure ratione maxime iusto amet provident quod
              totam. Quos eius quibusdam eos minus esse, quam at enim qui quod
              velit.
            </p>

            <a style={{ width: "fit-content" }} className="animated-button1">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Start
            </a>
          </article>
        </div>
        <img
          // src="https://user-images.githubusercontent.com/10260230/93533501-53aa0d80-f943-11ea-90d1-e6e70eca2e29.gif"
          src="https://www.onlygfx.com/wp-content/uploads/2021/02/6-pixel-heart-3.png"
          height="550"
          alt="image"
        />
      </div>
      {/* end of first section */}

      {/* second section */}
      <div className="d-flex justify-content-around my-5">
        <div className="d-flex flex-column w-25 align-items-center">
          {/* <div> */}
          <h1>RED HEART</h1>
          <img src={RedHeart} width="200" alt="" className="my-4" />
          <p className="hearts_p">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam culpa
            amet veniam voluptatibus nesciunt. Quidem harum facilis accusamus
            incidunt a ipsam expedita exercitationem, nobis, voluptas libero
            sequi deleniti pariatur ratione?
          </p>
          {/* </div> */}
        </div>

        <div className="d-flex flex-column w-25 align-items-center">
          {/* <div> */}
          <h1>BEIGE HEART</h1>
          <img src={YellowHeart} width="200" alt="" className="my-4" />
          <p className="hearts_p">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam culpa
            amet veniam voluptatibus nesciunt. Quidem harum facilis accusamus
            incidunt a ipsam expedita exercitationem, nobis, voluptas libero
            sequi deleniti pariatur ratione?
          </p>
          {/* </div> */}
        </div>

        <div className="d-flex flex-column w-25 align-items-center">
          {/* <div> */}
          <h1>PINK HEART</h1>
          <img src={PinkHeart} width="200" alt="" className="my-4" />
          <p className="hearts_p">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam culpa
            amet veniam voluptatibus nesciunt. Quidem harum facilis accusamus
            incidunt a ipsam expedita exercitationem, nobis, voluptas libero
            sequi deleniti pariatur ratione?
          </p>
          {/* </div> */}
        </div>
      </div>
      {/* end of second section */}

      <div
        className="d-flex flex-column align-items-center justify-content-center mt-5"
        style={{ height: "500px", border: "4px double #b20a2c" }}>
        <h1 className="mb-3">Wanna see hearts you've got?</h1>
        <a
          style={{ width: "fit-content" }}
          className="animated-button1"
          onClick={() => setModalShow(true)}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Sign In
        </a>
      </div>
      <Modal show={modalShow} onHide={() => setModalShow(false)} />
    </div>
  );
};

export default HomePage;
