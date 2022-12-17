import React, { FC, useState } from "react";
import "./navmenu.css";
import { Link } from "react-router-dom";
import finishedimg from "../../assets/images/finished.png";
import infusedImg from "../../assets/images/infused.png";
import collabsImg from "../../assets/images/collabs.png";
import shopAll from "../../assets/images/shop-all.png";
const NavMenu: FC = () => {
  const [activeImg, setActiveImg] = useState<string>(finishedimg);
  const [startAnimation, setStartAnimation] = useState(false);
  const [loadingAnimation, setLoadingAnimation] = useState(false);

  const updateImg = (
    e: React.MouseEvent<HTMLLIElement, MouseEvent>,
    newImg: string
  ) => {
    setStartAnimation(true);
    setTimeout(() => {
      switch (newImg) {
        case "finished":
          setActiveImg(finishedimg);
          break;
        case "infused":
          setActiveImg(infusedImg);
          break;
        case "collabs":
          setActiveImg(collabsImg);
          break;
        case "shop-all":
          setActiveImg(shopAll);
          break;

        default:
          break;
      }
    }, 300);
  };

  const endAnimation = () => {
    setStartAnimation(false);
  };

  return (
    <>
      <div className="nav__menu -flex" aria-expanded={true}>
        <button className="navBar__close -navList-btn -btn-primary">
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
        <div className="menu__left -flex -jcenter" id="ourwk">
          <img
            alt="Product"
            src={activeImg}
            className={
              startAnimation ? "menu__left-img -animate" : "menu__left-img"
            }
            onAnimationEnd={() => endAnimation()}
          />
        </div>
        <div className="menu__right">
          <h4 className="menu__right-title">OUR WHISKEY</h4>
          <ul className="menu__list">
            <Link to="/">
              <li
                className="menu__list-item -item-finished"
                onMouseEnter={(e) => updateImg(e, "finished")}
              >
                FINISHED WHISKEYS
              </li>
            </Link>
            <Link to="/">
              <li
                className="menu__list-item -item-infused"
                onMouseEnter={(e) => updateImg(e, "infused")}
              >
                INFUSED WHISKEYS
              </li>
            </Link>
            <Link to="/">
              <li
                className="menu__list-item -item-collabs"
                onMouseEnter={(e) => updateImg(e, "collabs")}
              >
                COLLABORATIONS
              </li>
            </Link>
            <Link to="/">
              <li
                className="menu__list-item -item-shop-all"
                onMouseEnter={(e) => updateImg(e, "shop-all")}
              >
                SHOP ALL
              </li>
            </Link>
          </ul>
        </div>
      </div>
      <div className="nav__menu -flex" aria-expanded={false}>
        <button className="navBar__close -navList-btn -btn-primary">
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
        <div className="menu__left -flex -jcenter">
          <img alt="Product" className="menu__left-img -store" />
        </div>
        <div className="menu__right">
          <h4 className="menu__right-title">INSIDE OAK & EDEN</h4>
          <ul className="menu__list">
            <li className="menu__list-item">OUR STORY</li>
            <li className="menu__list-item">JOURNAL</li>
            <li className="menu__list-item">RECIPES</li>
            <li className="menu__list-item">THE SPIRE</li>
            <li className="menu__list-item">FLAGSHIP</li>
            <li className="menu__list-item">STORE LOCATOR</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default NavMenu;
