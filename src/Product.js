import React from "react";
import "./Product.css";

function Product() {
  return (
    <div className="product">
      <div className="product__info">
        <p>The lean startup</p>
        <p className="product__price">
          <small>$</small>
          <strong>11.96</strong>
        </p>
        <div className="product__rating">
          <p>⭐</p>
        </div>
      </div>
      <img
        src="https://m.media-amazon.com/images/I/51N-u8AsmdL.jpg"
        alt="The Lean Startup"
      />
      <button>Add To Basket</button>
    </div>
  );
}

export default Product;
