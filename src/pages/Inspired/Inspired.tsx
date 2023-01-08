import React, { FC } from "react";
import "./inspired.css";
import Bottles from "../../assets/images/inspiredBottles.webp"
const Inspired: FC = () => {
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
      <section className="w1">section2</section>
    </div>
  );
};

export default Inspired;
