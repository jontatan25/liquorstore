import React, { FC } from "react";
import "./carouselSeries.css";

const CarouselSeries: FC = () => {
  return (
    <div className="cs__container -flex">
      <div className="cs__wrapper">
        <div className="cs__item -flex -acenter -jcenter">
          <div className="cs__inner__container -flex -acenter">
            <img alt="" className="cs__img" />
            <div className="cs__content -flexcol -acenter">
              <h4 className="cs__title">FORRIE J. SMITH</h4>
              <img className="cs__icon" alt="Black Star Icon"></img>
              <p className="cs__text">
                The seasoned cowboy and legacy Hollywood stuntman created his
                very own coffee-infused bourbon.
              </p>
              <button className="nav__buy-btn -btn-shop -btn-primary">
                SHOP NOW
              </button>
            </div>
          </div>
        </div>
        <button
          className="carousel__btn-series -btn-prev-series -btn-primary"
          // onClick={(e) => handleClick(e, -1)}
        >
          PREV
        </button>
        <button
          className="carousel__btn-series -btn-next-series -btn-primary"
          // onClick={(e) => handleClick(e, 1)}
        >
          NEXT
        </button>
      </div>
    </div>
  );
};

export default CarouselSeries;
