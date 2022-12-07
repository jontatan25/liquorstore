import React,{FC} from "react";
import Carousel from "../../components/Carousel/Carousel";
import "./style.css";

const Home:FC = () => {
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
        <div className="spire__container -flex">
          <div className="spire__left -flexcol -acenter ">
            <div className="spire__img_reference">
              <img className="spire__img" alt="spire"/>
            </div>
            <p className="spire__text">In-Bottle Finishing</p>
            <img alt="decoration Star" className="spire__img-deco" />
          </div>
          <div className="spire_right -flex -acenter -jcenter">
            <div className="spire__right__content -flexcol -acenter">
              <div className="spire__right__title-container -flex">
                <span className="spire__right__title -title-right">THE</span>
                <span className="spire__line__container -flex -acenter -jcenter">
                  <span className="spire__line "></span>
                </span>
                <span className="spire__right__title">SPIRE</span>
              </div>
              <p className="spire__right__text-big">AGED in TRADITION. STEEPED in INNOVATION.</p>
            <p className="spire__right__text-small">At Oak & Eden, we place a 5” long spiral cut piece of wood into every bottle of our fully aged whiskey.</p>
            <button className="nav__buy-btn -btn-spire -btn-primary">
            LEARN MORE
          </button>
            </div>
          </div>  
        </div>
        <div className="home__spire-line"></div>
      </section>
      <section className= "featured">
        <div className="featured__title -flex">
          <span className="featured__title-text -flex -acenter">FEATURED</span>
          <img alt= "black Star" className="featured__title-icon"></img>
          <span className="featured__title-text -flex -acenter">FLAVORS</span>
        </div>
        <Carousel/>
      </section>
    </>
  );
};

export default Home;
