import axios from "axios";
import React, { FC, useEffect, useState, useRef } from "react";
import Carousel from "../../components/Carousel/Carousel";
import CarouselSeries from "../../components/CarouselSeries/CarouselSeries";
import "./home.css";
import { useElementAnimation } from "../../assets/hooks/useElementAnimation";
import Marquee from "../../components/Marquee/Marquee";

const Home: FC = () => {
  interface picture {
    large: string;
    medium: string;
    thumbnail: string;
  }
  interface user {
    name: name;
    picture: picture;
  }
  interface name {
    first: string;
    last: string;
    title: string;
  }

  const [users, setUsers] = useState<user[]>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const spireImg = useRef<HTMLImageElement>(null);
  const [spireIsVisible] = useElementAnimation(spireImg,0.75)
  const cocktailsRef = useRef<HTMLImageElement>(null);
  const [cocktailsRefIsVisible] = useElementAnimation(cocktailsRef,0.2)
  const wheatedRef = useRef<HTMLImageElement>(null);
  const [wheatedRefIsVisible] = useElementAnimation(wheatedRef,0.5)

  const getUsers = async () => {
    setLoading(true);
    try {
      await axios
        .get(
          "https://randomuser.me/api/?results=24&inc=name,picture&noinfo&nat=us"
        )
        .then((res) => {
          setUsers(res.data.results);
        });
    } catch (error) {
      setError(true);
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      <main>
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
                <img
                  className={`spire__img ${
                    spireIsVisible && "spire__img-animated"
                  }`}
                  alt="spire"
                  ref={spireImg}
                />
              </div>
              <p className="spire__text">In-Bottle Finishing</p>
              <img alt="decoration Star" className="spire__img-deco" />
            </div>
            <div className="spire_right -flex -acenter -jcenter">
              <div className="spire__right__content -flexcol -acenter">
                <div className="spire__right__title-container -flex">
                  <span
                    className={`spire__right__title -title-right ${
                      spireIsVisible && "spire__title-animated"
                    }`}
                  >
                    THE
                  </span>
                  <span className="spire__line__container -flex -acenter -jcenter">
                    <span
                      className={`spire__line ${
                        spireIsVisible && "spire__line-animated"
                      } `}
                    ></span>
                  </span>
                  <span
                    className={`spire__right__title ${
                      spireIsVisible && "spire__title-animated"
                    }`}
                  >
                    SPIRE
                  </span>
                </div>
                <p
                  className={`spire__right__text-big ${
                    spireIsVisible && "spire__text-big-animated"
                  }`}
                >
                  AGED in TRADITION. STEEPED in INNOVATION.
                </p>
                <p
                  className={`spire__right__text-small ${
                    spireIsVisible && "spire__text-small-animated"
                  }`}
                >
                  At Oak & Eden, we place a 5” long spiral cut piece of wood
                  into every bottle of our fully aged whiskey.
                </p>
                <button
                  className={`nav__buy-btn -btn-spire -btn-primary ${
                    spireIsVisible && "-btn-spire-animated"
                  }`}
                >
                  LEARN MORE
                </button>
              </div>
            </div>
          </div>
          <div className="home__spire-line"></div>
        </section>
        <section className="featured">
          <div className="featured__title -flex">
            <span className="featured__title-text -flex -acenter">
              FEATURED
            </span>
            <img alt="black Star" className="featured__title-icon"></img>
            <span className="featured__title-text -flex -acenter">FLAVORS</span>
          </div>
          <Carousel />
        </section>
        <section className="cocktails -flex -acenter -jcenter">
          <div className="cocktails__container -flexcol -acenter" ref={cocktailsRef}>
            <div className={`cocktails__title -flex -acenter ${cocktailsRefIsVisible && "cocktails__title-animated"}`}>
              <img className="cocktails__icon" alt="cocktail Icon"></img>
              <h4 className="cocktails__title-text">COCKTAILS</h4>
              <img className="cocktails__icon" alt="Black Star Icon"></img>
            </div>
            <p className={`cocktails__subtitle ${cocktailsRefIsVisible && "cocktails__subtitle-animated "}`}>
              Crafted right from the comfort of home sweet home.
            </p>
            <p className={`cocktails__subtitle-small ${cocktailsRefIsVisible && "cocktails__subtitle-animated "}`}>
              Ease back with a cocktail created by some of the best mixologists
              in the game.
            </p>
            <button className={`nav__buy-btn -btn-cocktails -btn-primary ${cocktailsRefIsVisible && "-btn-cocktails-animated"}`}>
              SEE ALL RECIPES
            </button>
          </div>
        </section>
        <section className="wheated -flex">
          <div className="wheated__left"></div>
          <div className="wheated__center -flexcol -acenter -jcenter" ref={wheatedRef}>
            <div className={`wheated__animation__container -flexcol -acenter -jcenter ${wheatedRefIsVisible && "wheated__container-animated"}`}>
            <img className="cocktails__icon" alt="Black Star Icon"></img>
            <p className="wheated__text">
              WHEATED BOURBON MEETS AMERICAN HONEY. AVAILABLE FOR A LIMITED TIME
              ONLY.
            </p>
            <img className="cocktails__icon" alt="Black Star Icon"></img>
            </div>
            <button className={`nav__buy-btn -btn-wheated -btn-primary ${wheatedRefIsVisible && "-btn-wheated-animated"}`}>
              SHOP WHEAT & HONEY
            </button>
          </div>
          <div className="wheated__right"></div>
        </section>
        <section className="series">
          <Marquee text={" - ANTHRO SERIES"}/>
          <CarouselSeries />
        </section>
        <section className="behalf -flex -acenter -jcenter">
          <div className="behalf__container -flex -acenter -jcenter">
            <span className="behalf__text -behalf__text-start">
              ON BEHALF OF
            </span>
            <img className="cocktails__icon " alt="Black Star Icon"></img>
            {loading ? (
              <h4>Loading ...</h4>
            ) : error ? (
              <h4>oops Try again ...</h4>
            ) : (
              users &&
              users.map((user: user) => (
                <div key={user.name.first + user.name.last}>
                  <span className="behalf__text">
                    {user.name.first}.{" "}
                    <img
                      src={user.picture.medium}
                      alt="user"
                      className="behalf__img"
                    />
                  </span>
                </div>
              ))
            )}
            <img className="cocktails__icon " alt="Black Star Icon"></img>
            <span className="behalf__text -behalf__text-start">
              THANKS FOR HANGING OUT !
            </span>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
