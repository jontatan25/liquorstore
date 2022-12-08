import React, { FC, useState, TransitionEvent, useEffect } from "react";
import "./style.css";
import bottles from "./bottles";

const Carousel: FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [acumulator, setAcumulator] = useState(2);
  const [bottleProducts, setBottleProducts] = useState(bottles);
  const [isMovingToRight, setIsMovingToRight] = useState<boolean>();
  const [animated, setAnimated] = useState<boolean>(true);

  const handleClick = (
    e: React.MouseEvent<HTMLButtonElement>,
    indexModifier: number
  ) => {
    let newIndex = activeIndex + indexModifier;
    if (newIndex < 0) newIndex = bottleProducts.length - 1;
    else if (newIndex >= bottleProducts.length) {
      newIndex = 0;
    }
    setActiveIndex(newIndex);
    if (indexModifier === 1) {
      setIsMovingToRight(true);
      setAcumulator(acumulator + 1);
    } else {
      setIsMovingToRight(false);
      setAcumulator(acumulator - 1);
    }
  };

  const animate = (value: boolean) => {
    setAnimated(value);
  };

  const handleTransitionEnd = (e: TransitionEvent<HTMLDivElement>) => {
    let bottleCopy = [...bottleProducts];

    if (isMovingToRight) {
      setAnimated(false);
      bottleCopy.splice(0, 0, bottleProducts[6]);
      bottleCopy.splice(7, 1);
      setBottleProducts(bottleCopy);
      setAnimated(true);
    } else if (isMovingToRight === false) {
      
        bottleCopy.push(bottleProducts[0]);
        bottleCopy.splice(0, 1);
        setBottleProducts(bottleCopy);
    }
  };

    useEffect(() => console.log(bottleProducts), [bottleProducts]);
  return (
    <>
      <div className="carousel">
        <div
          className="carousel__wraper"
          style={
            animated
              ? { transform: `translateX(-${acumulator * 50}%)` }
              : {
                  transform: `translateX(-100%)`,
                  transition: `none`,
                }
          }
          onTransitionEnd={(e) => handleTransitionEnd(e)}
        >
          {bottleProducts &&
            bottleProducts.map((bottle) => (
              <div
                key={bottle.tag}
                className="carousel__img-container -flex -jcenter"
              >
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
          onClick={(e) => handleClick(e, -1)}
        >
          PREV
        </button>
        <button
          className="carousel__btn -btn-next -btn-primary"
          onClick={(e) => handleClick(e, 1)}
        >
          NEXT
        </button>
      </div>
      <div className="carousel__indicator -flex -acenter">
        <div className="carousel__indicator-bar -flex -acenter">
          <div
            className="carousel__indicator-progress"
            style={{ transform: `translateX(${activeIndex * 100}%)` }}
          ></div>
        </div>
      </div>
    </>
  );
};

export default Carousel;
