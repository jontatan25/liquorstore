import React, { FC, useState } from "react";
import "./style.css";
import bottles from "./bottles";

const Carousel: FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (
    e: React.MouseEvent<HTMLButtonElement>,
    newIndex: number
  ) => {
    if (newIndex < 0) newIndex = 0;
    else if (newIndex >= bottles.length) {
      newIndex = bottles.length - 1;
    }
    setActiveIndex(newIndex);
  };
  return (
    <div className="carousel">
      <div
        className="carousel__wraper"
        style={{ transform: `translateX(-${activeIndex * 50}%)` }}
      >
        {bottles &&
          bottles.map((bottle) => (
            <div key={bottle.tag} className="carousel__img-container -flex -jcenter">
              <img
                src={bottle.photo}
                alt={bottle.tag}
                className="carousel__bottle-img"
              />
            </div>
          ))}
      </div>
      <button
        className="carousel__btn -btn-prev -btn-primary"
        onClick={(e) => handleClick(e, activeIndex - 1)}
      >
        PREV
      </button>
      <button
        className="carousel__btn -btn-next -btn-primary"
        onClick={(e) => handleClick(e, activeIndex + 1)}
      >
        NEXT
      </button>
    </div>
  );
};

export default Carousel;
