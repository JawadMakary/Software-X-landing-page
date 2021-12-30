import React from "react";
import "./styles/Footer.css";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";

const Footer = () => {
  // redirection to social media
  const newTabIg = () => {
    window.open("https://www.instagram.com/", "_blank");
  };
  const newTagFb = () => {
    window.open("https://www.facebook.com/", "_blank");
  };
  const newTabTwitter = () => {
    window.open("https://twitter.com/", "_blank");
  };
  return (
    <div className="footer">
      <footer className="footer__distributed">
        <div className="footer__left">
          <img src="logo.jpeg" alt="software x logo" width={200} />
        </div>
        <div className="footer__center">
          <div>
            <p>
              <span>Software X</span>{" "}
            </p>
          </div>
          <div>
            <p>+phone number</p> <br />
            <p>email@email.com</p>
          </div>
        </div>
        <div className="footer__right">
          <h3 className="footer__company__about">Contact Us Via</h3>

          <div className="footer_icons_container">
            <FacebookIcon
              className="footer_mui_icon"
              style={{ color: "#fff", marginRight: 70, cursor: "pointer" }}
              onClick={newTagFb}
            />
            <InstagramIcon
              className="footer_mui_icon"
              style={{ color: "#fff", marginRight: 70, cursor: "pointer" }}
              onClick={newTabIg}
            />
            <TwitterIcon
              className="footer_mui_icon"
              style={{ color: "#fff", marginRight: 80, cursor: "pointer" }}
              onClick={newTabTwitter}
            />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
