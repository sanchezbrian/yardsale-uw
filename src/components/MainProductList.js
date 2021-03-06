import React from "react";
import ProductItem from "./ProductItem"
import withContext from "../withContext"

const MainProductList = props => {
    const { products, user } = props.context;

    let newProducts;
    if (user === null) {
      newProducts = null;
    } else {
      newProducts = products.filter(product => product.email !== user.email && 0 === product.sold)
    }

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
          {newProducts && newProducts.length ? (
            newProducts.map((product) => (
              <div className ="column is-one-quarter" key={product.id}>
                <div className="column is-align-content-space-around">
              <ProductItem
                product={product}
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