import React from "react";
import "./Home.scss";
import Product from "../Product/Product";

const Home = () => {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Beauty_v2_en_US_1x._CB429089975_.jpg"
        alt=""
      />
      <div className="home__row">
        <Product product={prod1} />
        <Product product={prod2} />
      </div>

      <div className="home__row">
        <Product product={prod1} />
        <Product product={prod2} />
        <Product product={prod3} />
      </div>

      <div className="home__row">
        <Product product={prod4} />
        <Product product={prod3} />
      </div>

      <div className="home__row">
        <Product product={prod3} />
      </div>
    </div>
  );
};

const prod1 = {
  id: 1,
  title: "Hostinger",
  image:
    "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/July/amazonbasics_520x520._SY304_CB442725065_.jpg",
  price: 54,
  rating: 3,
};
const prod2 = {
  id: 2,
  title: "NameHero",
  image: "https://m.media-amazon.com/images/I/41cnyVCI1PL._AC_SL260_.jpg",
  price: 154,
  rating: 5,
};

const prod3 = {
  id: 3,
  title: "Yoga",
  image:
    "https://images-na.ssl-images-amazon.com/images/G/01/events/GFAH/GWDesktop_SingleImageCard_fitathome_1x._SY304_CB434924743_.jpg",
  price: 184,
  rating: 5,
};

const prod4 = {
  id: 4,
  title: "Riding boy",
  image:
    "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Deals_1x._SY304_CB430401028_.jpg",
  price: 1154,
  rating: 5,
};
export default Home;
