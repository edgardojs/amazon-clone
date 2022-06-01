import React from "react";
import Product from "./Product";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://m.media-amazon.com/images/I/61UtjpK5SjL._SX3000_.jpg"
          alt="banner"
        />
        <div className="home__row">
          <Product />
        </div>
        <div className="home__row">
          {/*product*/}
          {/*product*/}
          {/*product*/}
        </div>
        <div className="home__row">{/*product*/}</div>
      </div>
    </div>
  );
}

export default Home;
