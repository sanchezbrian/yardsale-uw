import React from "react";
import ProductItem from "./ProductItem"
import withContext from "../withContext"

const MainProductList = props => {
    const { products } = props.context;

    return (
    <>
      <div className="hero is-link">
        <div className="hero-body container">
          <h4 className="title has-text-centered">Our Products</h4>
        </div>
      </div>
      <br />
      <div className="container">
        
        <div className="column columns is-multiline">
          {products && products.length ? (
            products.map((product, index) => (
              <div class ="column is-one-quarter">
                <div class="column is-align-content-space-around">
              <ProductItem
                product={product}
                key={index}
              />
              </div>
              </div>
            ))
          ) : (
            <div className="column">
              <span className="title has-text-grey-light">
                No products found!
              </span>
            </div>
          )}
          </div>
      </div>
    </>
    );
};

export default withContext(MainProductList);