import React from "react";
import axios from 'axios';

const ProductItem = props => {
  const { product } = props;
  return (
    <div class="card">
  <div class="card-image">
    <figure class="image is-square">
      <img src="https://bulma.io/images/placeholders/128x128.png" alt="Placeholder image">
      </img>  
    </figure>
  </div>
  <div class="card-content">
    <div class="media">
      <div class="media-content">
        <b style={{ textTransform: "capitalize" }}>
      {product.name}{" "}
    <span className="tag is-warning">${product.price}</span>
    </b> 
      </div>
    </div>
  </div>
</div>

  );
};



export default ProductItem;
