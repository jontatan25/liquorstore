import React, { FC } from "react";
import "./footer.css";

const Footer: FC = () => {
  return (
    <footer className="footer">
      <div className="footer__container -flex">
        <div className="footer__left">
          <h4 className="footer__left-title">GET UPDATES & STAY CONNECTED</h4>
          <div className="footer__inp-container -flex">
            <input
              type="text"
              className="footer__inp"
              id="footer-inp"
              placeholder="YOUR EMAIL"
            />
            <button className="footer__inp-btn -btn-primary">JOIN</button>
          </div>

          <button className="footer__btn -ig-btn -btn-primary"></button>
          <button className="footer__btn -fb-btn -btn-primary"></button>
        </div>
        <div className="footer__right -flex">
          <ul className="footer__right-menu">
            <li className="footer__menu-item">SHOP ALL</li>
            <li className="footer__menu-item">OUR STORY</li>
            <li className="footer__menu-item">JOURNAL</li>
            <li className="footer__menu-item">FIND US</li>
          </ul>
          <ul className="footer__right-menu">
            <li className="footer__menu-item">CONTACT</li>
            <li className="footer__menu-item">COLLABORATIONS</li>
            <li className="footer__menu-item">CREATORS</li>
            <li className="footer__menu-item">MEDIA INQUIRIES</li>
            <li className="footer__menu-item">PRESS</li>
            <li className="footer__menu-item">FAQ</li>
          </ul>
        </div>
      </div>
      <div className="footer__credits">
        <div className="credits__btn__container">
          <button className="credits__btn -btn-terms -btn-primary">
            Terms & Conditions
          </button>
          <button className="credits__btn -btn-privacy -btn-primary">
            Privacy Policy
          </button>
          <button className="credits__btn -btn-intell -btn-primary">
            Intellectual Property
          </button>
        </div>
        <p className="credits__text">
          COPYRIGHT © 2022 OAK & EDEN. ALL RIGHTS RESERVED.
        </p>
      </div>
      <img alt="white logo" className="footer__logo" />
    </footer>
  );
};

export default Footer;
