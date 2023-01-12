import React, { FC, useEffect, useState } from "react";
import "./navmenu.css";
import { Link } from "react-router-dom";
import finishedImg from "../../assets/images/finished.png";
import infusedImg from "../../assets/images/infused.png";
import collabsImg from "../../assets/images/collabs.png";
import shopAll from "../../assets/images/shop-all.png";

import storyImg from "../../assets/images/story.png";
import journalImg from "../../assets/images/journal.png";
import recipesImg from "../../assets/images/recipes.png";
import spireImg from "../../assets/images/spire.png";
import flagshipImg from "../../assets/images/flagship.png";
import storeImg from "../../assets/images/store.png";

type Props = {
  menuIsOpenWK: boolean;
  menuIsOpenINS: boolean;
  setMenuIsOpenWK: (val: boolean) => void;
  setMenuIsOpenINS: (val: boolean) => void;
};
const NavMenu: FC<Props> = ({
  menuIsOpenWK,
  menuIsOpenINS,
  setMenuIsOpenWK,
  setMenuIsOpenINS,
}) => {
  const [activeImg, setActiveImg] = useState<string>(finishedImg);
  const [newImage, setNewImage] = useState(finishedImg);
  const [activeImgIns, setActiveImgIns] = useState<string>(storyImg);
  const [newImageIns, setNewImageIns] = useState(storyImg);
  const updateImg = (
    e: React.MouseEvent<HTMLLIElement, MouseEvent>,
    newImg: string
  ) => {
    setNewImage(newImg);
  };
  const updateImgIns = (
    e: React.MouseEvent<HTMLLIElement, MouseEvent>,
    newImgIns: string
  ) => {
    setNewImageIns(newImgIns);
  };
  const handleClose = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    menu: string
  ) => {
    if (menu === "menuWK") {
      setMenuIsOpenWK(false);
    } else setMenuIsOpenINS(false);
  };
  useEffect(() => {
    const counter = setTimeout(() => {
      switch (newImage) {
        case "finished":
          setActiveImg(finishedImg);
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
    }, 400);
    return () => {
      clearTimeout(counter);
    };
  }, [newImage]);

  useEffect(() => {
    const counter = setTimeout(() => {
      switch (newImageIns) {
        case "story":
          setActiveImgIns(storyImg);
          break;
        case "journal":
          setActiveImgIns(journalImg);
          break;
        case "recipes":
          setActiveImgIns(recipesImg);
          break;
        case "spire":
          setActiveImgIns(spireImg);
          break;
        case "flagship":
          setActiveImgIns(flagshipImg);
          break;
        case "store":
          setActiveImgIns(storeImg);
          break;

        default:
          break;
      }
    }, 400);
    return () => {
      clearTimeout(counter);
    };
  }, [newImageIns]);

  return (
    <>
      <div className="nav__menu -flex" aria-expanded={menuIsOpenWK}>
        <button
          onClick={(e) => handleClose(e, "menuWK")}
          className="navBar__close -navList-btn -btn-primary"
        >
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
            key={newImage}
            src={activeImg}
            className="menu__left-img -animate"
          />
        </div>
        <div className="menu__right">
          <h4 className="menu__right-title">OUR WHISKEY</h4>
          <ul className="menu__list">
            <Link to="/inspired">
              <li
                className="menu__list-item -item-finished"
                onMouseEnter={(e) => updateImg(e, "finished")}
              >
                <span> FINISHED WHISKEYS</span>
              </li>
            </Link>
            <Link to="/">
              <li
                className="menu__list-item -item-infused"
                onMouseEnter={(e) => updateImg(e, "infused")}
              >
                <span>INFUSED WHISKEYS</span>
              </li>
            </Link>
            <Link to="/">
              <li
                className="menu__list-item -item-collabs"
                onMouseEnter={(e) => updateImg(e, "collabs")}
              >
                <span> COLLABORATIONS</span>
              </li>
            </Link>
            <Link to="/">
              <li
                className="menu__list-item -item-shop-all"
                onMouseEnter={(e) => updateImg(e, "shop-all")}
              >
                <span> SHOP ALL</span>
              </li>
            </Link>
          </ul>
        </div>
      </div>
      <div className="nav__menu -flex" aria-expanded={menuIsOpenINS}>
        <button
          onClick={(e) => handleClose(e, "")}
          className="navBar__close -navList-btn -btn-primary"
        >
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
          <img
            alt="Product"
            className="menu__left-img -animate"
            src={activeImgIns}
            key={newImageIns}
          />
        </div>
        <div className="menu__right">
          <h4 className="menu__right-title">INSIDE OAK & EDEN</h4>
          <ul className="menu__list">
            <Link to="/">
              <li
                className="menu__list-item"
                onMouseEnter={(e) => updateImgIns(e, "story")}
              >
                <span> OUR STORY</span>
              </li>
            </Link>
            <Link to="/">
              <li
                className="menu__list-item"
                onMouseEnter={(e) => updateImgIns(e, "journal")}
              >
                <span>JOURNAL</span>
              </li>
            </Link>
            <Link to="/">
              <li
                className="menu__list-item"
                onMouseEnter={(e) => updateImgIns(e, "recipes")}
              >
                <span>RECIPES</span>
              </li>
            </Link>
            <Link to="/">
              <li
                className="menu__list-item"
                onMouseEnter={(e) => updateImgIns(e, "spire")}
              >
                <span> THE SPIRE</span>
              </li>
            </Link>
            <Link to="/">
              <li
                className="menu__list-item"
                onMouseEnter={(e) => updateImgIns(e, "flagship")}
              >
                <span> FLAGSHIP</span>
              </li>
            </Link>
            <Link to="/">
              <li
                className="menu__list-item"
                onMouseEnter={(e) => updateImgIns(e, "store")}
              >
                <span> STORE LOCATOR</span>
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </>
  );
};

export default NavMenu;
