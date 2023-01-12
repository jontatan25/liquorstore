import React, { FC } from "react";
import "./inspired.css";
import Bottles from "../../assets/images/inspiredBottles.webp";
import Marquee from "../../components/Marquee/Marquee";
import data from ".././../../src/wData";
import Accordion from "../../components/Accordion/Accordion";

const Inspired: FC = () => {
  const { productsData, categoriesData } = data;

  return (
    <div className="inspired__container">
      <section className="hero__section">
        <div className="hero__container">
          <div className="hero__head -flex">
            <h2 className="hero__title">INSPIRED SERIES</h2>
            <div className="subtitle__container -flex">
              <span className="subtitle__text">
                WHISKEY + SPIRE <br />+ FIRE
              </span>
            </div>
          </div>
          <img src={Bottles} alt="Bottles" className="hero__image" />
        </div>
      </section>
      <section className="w1">
        <Marquee text={" — BOURBON & SPIRE"} />
        <Accordion
          products={productsData}
          categories={categoriesData}
          filterCategory={"BOURBON & SPIRE"}
        />
      </section>
      <section className="w2">
        <Marquee text={" — WHEAT & SPIRE"} />
        <Accordion
          products={productsData}
          categories={categoriesData}
          filterCategory={"WHEAT & SPIRE"}
        />
      </section>
      <section className="w3">
        <Marquee text={" — 4 GRAIN & SPIRE"} />
        <Accordion
          products={productsData}
          categories={categoriesData}
          filterCategory={"4 GRAIN & SPIRE"}
        />
      </section>
      <section className="w4">
        <Marquee text={" — RYE & SPIRE"} />
        <Accordion
          products={productsData}
          categories={categoriesData}
          filterCategory={"RYE & SPIRE"}
        />
      </section>
      <section className="inspired__others">
        <h3 className="inspired__others-title">EXPLORE OTHER PRODUCT LINES</h3>
        <div className="inspired__others-container -flex">
          <div className="others__content -flexcol -acenter">
            <img src="" alt="" className="others__img -others-left" />
            <span></span>
            <h3 className="inspired__others-subtitle">INSPIRED SERIES</h3>
            <button className="nav__buy-btn -others-btn -btn-primary ">EXPLORE INSPIRED SERIES</button>
          </div>
          <div className="others__content -flexcol -acenter">
            <img src="" alt="" className="others__img -others-right" />
            <span></span>
            <h3 className="inspired__others-subtitle">ANTHRO SERIES</h3>
            <button className="nav__buy-btn -others-btn -btn-primary ">EXPLORE ANTHRO SERIES</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Inspired;
