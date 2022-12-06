import React from "react";
import "./style.css";

const Home = () => {
  return (
    <>
      <section className="home__presentation -flex -acenter">
        <div className="home__presentation-container -flexcol">
          <p className="presentation__text">HONEY, MEET WHEATED BOURBON.</p>
          <span className="presentation__text-short">
            Small batch release only available online.
          </span>
          <button className="nav__buy-btn -btn-shop -btn-primary">
            SHOP NOW
          </button>
        </div>
      </section>
      <section className="home__spire">
        <div className="home__spire-line"></div>
        <div className="spire__container">
          <div className="spire__left -flexcol -acenter ">
            <div className="spire__img_reference">
              <img className="spire__img" />
            </div>
            <p className="spire__text">In-Bottle Finishing</p>
            <img alt="decoration Star" className="spire__img-deco" />
          </div>
          <div className="spire_right"></div>
        </div>
          <div className="home__spire-line"></div>
      </section>
      <section>NEW SECTION</section>
    </>
  );
};

export default Home;
