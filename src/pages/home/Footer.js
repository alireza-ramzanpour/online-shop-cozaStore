import React from "react";
import { FaTwitter, FaInstagram, FaPinterest, FaYoutube } from "react-icons/fa";

function Footer() {

  return (
    <>
      <div className="footer">
        <div className="container">
          <div className="footer-wrapper">
            <div className="useful-links">
              <h2 className="title">CATEGORIES</h2>
              <p className="link">Women</p>
              <p className="link">Men</p>
              <p className="link">Shoes</p>
              <p className="link">Watches</p>
            </div>
            <div className="useful-links">
              <h2 className="title">Help</h2>
              <p className="link">Track Order</p>
              <p className="link">Returns</p>
              <p className="link">Shipping</p>
              <p className="link">FAQs</p>
            </div>
            <div className="useful-links">
              <h2 className="title">GET IN TOUCH</h2>
              <address>Any questions? Let us know in store at 8th floor, 379 Hudson St, New York, NY 10018 Any questions?
                Let us know in store at 8th floor, 379 Hudson St, New York, NY 10018</address>
            </div>
            <div className="contactUS">
              <div className="logo">
                <img src="assets/images/logo-03.png" alt="LOGO" />
              </div>
              <span className="tel">(+1) 96 716 6879</span>
              <div className="media">
                <FaTwitter />
                <FaInstagram />
                <FaPinterest />
                <FaYoutube />
              </div>

            </div>
          </div>
        </div>
      </div>


    </>
  );
}

export default Footer;
