import React from "react";
import ProductItem from "./ProductItem"
import withContext from "../withContext"

const UserProfile = props => {
  const { products, user } = props.context;

  let userProducts;
  if (user === null) {
    userProducts = null;
  } else {
   userProducts = products.filter(product => user.email === product.email)
  }

  return (
    <>
      <div className="hero is-link">
        <div className="hero-body container">
          <h4 className="title has-text-centered">Your Products</h4>
        </div>
      </div>
      <div className="container">
        <div className="column columns is-multiline">
          {userProducts && userProducts.length ? (
            userProducts.map((product) => (
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
}

export default withContext(UserProfile);