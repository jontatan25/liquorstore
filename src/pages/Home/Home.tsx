import React from "react";
import "./style.css";

const Home = () => {
  return (
    <>
      <section>
        <div className="home__presentation -flex -acenter">
            <div className="home__presentation-container -flexcol">
                <p className="presentation__text">HONEY, MEET WHEATED BOURBON.</p>
                <span className="presentation__text-short">Small batch release only available online.</span>
                <button className="nav__buy-btn -btn-shop -btn-primary">SHOP NOW</button>
            </div>
        </div>
      </section>
      <section>next Section</section>
    </>
  );
};

export default Home;
