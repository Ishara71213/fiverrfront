import React from "react";
import "./Home.scss";
import Featured from "../../components/featured/Featured";
import Trustedby from "../../components/trustedby/Trustedby";
import { cards } from "../../data/data";
import CatCard from "../../components/catCard/CatCard";
import Slide from "../../components/slide/Slide";
import BannerVideo from "../../components/bannerVideo/BannerVideo";
import BannerImage from "../../components/bannerImage/BannerImage";

const Home = () => {
  return (
    <div className="home">
      <div className="container">
        <Featured />
        <Trustedby />
        <div className="serviceSlider-wrapper">
          <Slide
            slidesToShow={5}
            arrowsScroll={4}
            title="Popular professional services"
          >
            {cards.map((card) => {
              return <CatCard item={card} key={card.id} />;
            })}
          </Slide>
        </div>
        <BannerVideo />
        <BannerImage />
      </div>
    </div>
  );
};

export default Home;
