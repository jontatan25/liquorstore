import React, { FC } from "react";
import "./inspired.css";

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
        </div>
      </section>
    </div>
  );
};

export default Inspired;
