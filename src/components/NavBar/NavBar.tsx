import React, { FC, useState } from "react";
import "./navBar.css";

import Logo from "../../assets/images/logo.png";
import NavMenu from "../NavMenu/NavMenu";

const NavBar: FC = () => {
  const [menuIsOpenWK, setMenuIsOpenWK] = useState(false);
  const [menuIsOpenINS, setMenuIsOpenINS] = useState(false);

  const handleMenuWK = () => {
    if (menuIsOpenINS) {
      setMenuIsOpenINS(false);
      setTimeout(() => {
        setMenuIsOpenWK((prev) => !prev);
      }, 400);
    } else setMenuIsOpenWK((prev) => !prev);
  };
  const handleMenuINS = () => {
    if (menuIsOpenWK) {
      setMenuIsOpenWK(false);
      setTimeout(() => {
        setMenuIsOpenINS((prev) => !prev);
      }, 400);
    } else setMenuIsOpenINS((prev) => !prev);
  };
  return (
    <header>
      <div className="navBar">
        <div className="navBar__ad -flex -acenter -jcenter">
          <h5 className="navBar__text -flex">
            FREE SHIPPING on Wheat & Honey
            <svg
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              height="18px"
              width="20px"
              viewBox="150 0 476.213 476.213"
              xmlSpace="preserve"
            >
              <polygon
                points="345.606,107.5 324.394,128.713 418.787,223.107 0,223.107 0,253.107 418.787,253.107 324.394,347.5 
	345.606,368.713 476.213,238.106 "
              />
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
            </svg>
          </h5>
          <button className="navBar__close -btn-primary">
            <svg
              width="24px"
              height="24px"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M5.72 5.72a.75.75 0 011.06 0L12 10.94l5.22-5.22a.75.75 0 111.06 1.06L13.06 12l5.22 5.22a.75.75 0 11-1.06 1.06L12 13.06l-5.22 5.22a.75.75 0 01-1.06-1.06L10.94 12 5.72 6.78a.75.75 0 010-1.06z"
              />
            </svg>
          </button>
        </div>
        <nav className="nav -flex -acenter">
          <a href="#" className="nav__link-logo">
            <img src={Logo} alt="" className="nav__logo" />
          </a>
          <button
            onClick={() => handleMenuWK()}
            className="nav__item-btn -flex -acenter -btn-primary"
          >
            OUR WHISKEY
            <img
              alt="Arrow down"
              className={
                !menuIsOpenWK ? "item__arrow" : "item__arrow -arrow-up"
              }
            />
          </button>
          <NavMenu
            menuIsOpenWK={menuIsOpenWK}
            setMenuIsOpenWK={setMenuIsOpenWK}
            menuIsOpenINS={menuIsOpenINS}
            setMenuIsOpenINS={setMenuIsOpenINS}
            
          />
          <button
            onClick={() => handleMenuINS()}
            className="nav__item-btn -flex -acenter -btn-primary"
          >
            INSIDE OAK & EDEN
            <img
              alt="Arrow down"
              className={
                !menuIsOpenINS ? "item__arrow" : "item__arrow -arrow-up"
              }
            />
          </button>
          <button className="nav__buy-btn -btn-primary">BUY ONLINE</button>
          <button className="nav__cart-btn -btn-primary"></button>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
