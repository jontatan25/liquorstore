import React, { FC, useState, TransitionEvent, useEffect, useRef } from "react";
import "./style.css";
import bottles from "./bottles";

interface Bottle {
  title: string;
  photo: string;
  tag: string;
  description: string;
}

const Carousel: FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [acumulator, setAcumulator] = useState(0);
  const [bottleProducts, setBottleProducts] = useState<Bottle[]>();
  //   const [updatedProducts, setUpdatedProducts] = useState<Bottle[]>();
  const [isMovingToRight, setIsMovingToRight] = useState<boolean>();
  const carouselRef = useRef<HTMLInputElement>(null);
  const carousel__det = useRef<HTMLInputElement>(null);

  const makeDivAppear = () => {
    if (carousel__det.current) carousel__det.current.style.opacity = "0";
    setTimeout(() => {
      if (carousel__det.current) carousel__det.current.style.opacity = "1"
    },500);
  };
  const handleClick = (
    e: React.MouseEvent<HTMLButtonElement>,
    indexModifier: number
  ) => {
    makeDivAppear();
    let newIndex = activeIndex + indexModifier;
    if (newIndex < 0 && bottleProducts) newIndex = bottleProducts.length - 1;
    else if (bottleProducts && newIndex >= bottleProducts.length) {
      newIndex = 0;
    }
    setActiveIndex(newIndex);
    if (indexModifier === 1) {
      if (carouselRef.current !== null) {
        carouselRef.current.style.transform = `translateX(-150%)`;
      }
      setAcumulator(acumulator + 1);
      setIsMovingToRight(true);
    } else {
      if (carouselRef.current !== null) {
        carouselRef.current.style.transform = `translateX(-50%)`;
      }
      setAcumulator(acumulator - 1);
      setIsMovingToRight(false);
    }
  };

  const handleTransitionEnd = (e: TransitionEvent<HTMLDivElement>) => {
    if (bottleProducts) {
      const bottleCopy = [...bottleProducts];

      if (isMovingToRight) {
        bottleCopy.push(bottleProducts[0]);
        bottleCopy.splice(0, 1);
        setBottleProducts(bottleCopy);
      } else if (isMovingToRight === false) {
        bottleCopy.splice(0, 0, bottleProducts[6]);
        bottleCopy.splice(7, 1);
        setBottleProducts(bottleCopy);
      }
      if (carouselRef.current !== null) {
        carouselRef.current.style.transition = `none`;
        carouselRef.current.style.transform = `translateX(-100.5%)`;
        setTimeout(() => {
          if (carouselRef.current !== null) {
            carouselRef.current.style.transition = `all 0.3s ease-in-out`;
          }
        });
      }
    }
  };

  useEffect(() => {
    if (!bottleProducts) {
      setBottleProducts(bottles);
    }
  });

  return (
    <>
      <div className="carousel">
        <div
          className="carousel__wraper"
          style={{ transform: `translateX(-100.5%` }}
          onTransitionEnd={(e) => handleTransitionEnd(e)}
          ref={carouselRef}
        >
          {bottleProducts &&
            bottleProducts.map((bottle, index) => (
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
          {bottleProducts && (
            <div className="marquee__container">
              <div className="marquee -flex -marque-right" aria-hidden="true">
                <span>{bottleProducts[2].title}</span>
                <span>{bottleProducts[2].title}</span>
                <span>{bottleProducts[2].title}</span>
                <span>{bottleProducts[2].title}</span>
              </div>
              <div className="marquee -flex -marque-left" aria-hidden="true">
                <span>{bottleProducts[2].title}</span>
                <span>{bottleProducts[2].title}</span>
                <span>{bottleProducts[2].title}</span>
                <span>{bottleProducts[2].title}</span>
              </div>
            </div>
          )}
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
        {bottleProducts && (
          <div className="carousel__details" ref={carousel__det}>
            <h2 className="carousel__details-title">
              {bottleProducts[2].title}
            </h2>
            <p className="carousel__details-text">
              {bottleProducts[2].description}
            </p>
            <button className="nav__buy-btn -btn-carousel -btn-primary">
              SHOP NOW
            </button>
          </div>
        )}
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
