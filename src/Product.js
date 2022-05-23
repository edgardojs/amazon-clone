import React from 'react';
import './Product.css';

function Product() {
  return (
    <div clasName="product">
    <div className="product__info">
        <p>The lean startup</p>
        <p className="product__price">
            <small>$</small>
            <strong>11.96</strong>
        </p>
    </div>

    </div>
  )
}

export default Product