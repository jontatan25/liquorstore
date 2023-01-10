import React, { FC } from "react";
import "./inspired.css";
import Bottles from "../../assets/images/inspiredBottles.webp";
import Marquee from "../../components/Marquee/Marquee";
import data from ".././../../src/wData";
import Accordion from "../../components/Accordion/Accordion";

const Inspired: FC = () => {
  const { productsData, categoriesData } = data;
  console.log(productsData);
  console.log(categoriesData);
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
        <Marquee text={" - BOURBON & SPIRE"} />
        <Accordion products={productsData} categories={categoriesData} filterCategory={"BOURBON & SPIRE"}/>
      </section>
    </div>
  );
};

export default Inspired;
