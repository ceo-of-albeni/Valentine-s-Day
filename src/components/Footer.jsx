import React from "react";
import "../styles/footer.css";

const Footer = () => {
  return (
    <footer className="pt-2 mt-auto">
      <div className="footer">
        <div className="d-flex flex-column align-items-center">
          <p>© 2020 Международный Университет Ала-Тоо</p>
          <div>
            <a href="https://www.instagram.com/alatoo.edu.kg/">
              <div className="icon icon-fill">
                <i
                  style={{ marginLeft: "11px" }}
                  className="fa-brands fa-instagram"></i>
              </div>
            </a>

            <a href="https://www.youtube.com/channel/UCRwPUKmeoiUausG3luv7d3Q">
              <div className="icon icon-enter">
                <i
                  style={{ marginLeft: "8px" }}
                  className="fa-brands fa-youtube"></i>
              </div>
            </a>

            <a href="https://www.facebook.com/AlaTooInternationalUniversity/">
              <div className="icon icon-collapse">
                <i
                  style={{ marginLeft: "10px" }}
                  className="fa-brands fa-facebook"></i>
              </div>
            </a>

            <a href="https://twitter.com/alatooedukg/">
              <div className="icon icon-rotate">
                <i
                  style={{ marginLeft: "10px" }}
                  className="fa-brands fa-twitter"></i>
              </div>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
