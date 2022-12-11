import React, { FC } from "react";
import "./carouselSeries.css";

import horse from "../../assets/images/series/horse.jpg";
import guys from "../../assets/images/series/guys.png";
import sparrow from "../../assets/images/series/jsparrow.png";

const carouselSeInfo = [
  {
    title: "FORRIE J. SMITH",
    text: "The seasoned cowboy and legacy Hollywood stuntman created his very own coffee-infused bourbon.",
    photo: horse,
  },
  {
    title: "JOHN PAUL WHITE",
    text: "Four time Grammy Award winner and half of Americana duet, The Civil Wars, John Paul White stepped up to crafting his own bourbon.",
    photo: sparrow,
  },
  {
    title: "JAMESTOWN REVIVAL",
    text: 'Americana duet produces a barrel proof rye whiskey inspired by their hit song "Round Prairie Road"',
    photo: guys,
  },
];

const CarouselSeries: FC = () => {
  return (
    <div className="cs__container -flex">
      <div className="cs__wrapper -flex">
        {carouselSeInfo &&
          carouselSeInfo.map((slide) => (
            <div className="cs__item -flex -acenter -jcenter">
              <div className="cs__inner__container -flex -acenter">
                <img
                  alt="black start symbol"
                  src={slide.photo}
                  className="cs__img"
                />
                <div className="cs__content -flexcol -acenter">
                  <h4 className="cs__title"> {slide.title}</h4>
                  <img className="cs__icon" alt="Black Star Icon"></img>
                  <p className="cs__text">{slide.text}</p>
                  <button className="nav__buy-btn -btn-shop -btn-primary -na">
                    SHOP NOW
                  </button>
                </div>
              </div>
            </div>
          ))}

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
