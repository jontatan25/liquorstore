import axios from "axios";
import React, { FC, useEffect, useState } from "react";
import Carousel from "../../components/Carousel/Carousel";
import CarouselSeries from "../../components/CarouselSeries/CarouselSeries";
import "./style.css";

const Home: FC = () => {
  interface user {
    name: name;
    picture: string;
  }
  interface name {
    first: string;
    last: string;
    title: string;
  }
  interface response {
    data: { results: user[] };
  }

  const [users, setUsers] = useState<user[]>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

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
  useEffect(() => {
    console.log(users);
  }, [users]);

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
              <img className="spire__img" alt="spire" />
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
              <p className="spire__right__text-big">
                AGED in TRADITION. STEEPED in INNOVATION.
              </p>
              <p className="spire__right__text-small">
                At Oak & Eden, we place a 5” long spiral cut piece of wood into
                every bottle of our fully aged whiskey.
              </p>
              <button className="nav__buy-btn -btn-spire -btn-primary">
                LEARN MORE
              </button>
            </div>
          </div>
        </div>
        <div className="home__spire-line"></div>
      </section>
      <section className="featured">
        <div className="featured__title -flex">
          <span className="featured__title-text -flex -acenter">FEATURED</span>
          <img alt="black Star" className="featured__title-icon"></img>
          <span className="featured__title-text -flex -acenter">FLAVORS</span>
        </div>
        <Carousel />
      </section>
      <section className="cocktails -flex -acenter -jcenter">
        <div className="cocktails__container -flexcol -acenter">
          <div className="cocktails__title -flex -acenter">
            <img className="cocktails__icon"></img>
            <h4 className="cocktails__title-text">COCKTAILS</h4>
            <img className="cocktails__icon" alt="Black Star Icon"></img>
          </div>
          <p className="cocktails__subtitle">
            Crafted right from the comfort of home sweet home.
          </p>
          <p className="cocktails__subtitle-small">
            Ease back with a cocktail created by some of the best mixologists in
            the game.
          </p>
          <button className="nav__buy-btn -btn-cocktails -btn-primary">
            SEE ALL RECIPES
          </button>
        </div>
      </section>
      <section className="wheated -flex">
        <div className="wheated__left"></div>
        <div className="wheated__center -flexcol -acenter -jcenter">
          <img className="cocktails__icon" alt="Black Star Icon"></img>
          <p className="wheated__text">
            WHEATED BOURBON MEETS AMERICAN HONEY. AVAILABLE FOR A LIMITED TIME
            ONLY.
          </p>
          <img className="cocktails__icon" alt="Black Star Icon"></img>
          <button className="nav__buy-btn -btn-wheated -btn-primary">
            SHOP WHEAT & HONEY
          </button>
        </div>
        <div className="wheated__right"></div>
      </section>
      <section className="series">
        <div className="series__marquee -flex -marque-left" aria-hidden="true">
          <span> - ANTHRO SERIES</span>
          <span> - ANTHRO SERIES</span>
          <span> - ANTHRO SERIES</span>
          <span> - ANTHRO SERIES</span>
        </div>
        <CarouselSeries />
      </section>
      <section className="behalf -flex -acenter -jcenter">
        <div className="behalf__container -flex -acenter -jcenter">
          <span className="behalf__text -behalf__text-start">ON BEHALF OF</span>
          <img className="cocktails__icon " alt="Black Star Icon"></img>
          {loading ? (
            <h4>Loading ...</h4>
          ) : error ? (
            <h4>oops Try again ...</h4>
          ) : (
            users &&
            users.map((user) => (
              <span className="behalf__text">{user.name.first}.</span>
            ))
          )}
        </div>
      </section>
    </>
  );
};

export default Home;
