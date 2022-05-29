import React from "react";
import ProductItem from "./ProductItem"
import withContext from "../withContext"
import { getDatabase, ref, update } from "firebase/database";

const UserProfile = props => {
  const { products, user } = props.context;

  let userProducts;
  if (user === null) {
    userProducts = null;
  } else {
   userProducts = products.filter(product => user.email === product.email)
  }

  function sold(e, index) {
    const database = getDatabase();
    update(ref(database, 'Post/' + e.target.id), {
      sold: 1
    }).catch(alert);
    //alert("Item sold");
    props.context.markItemSold(e.target.id);
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
            userProducts.map((product, index) => (
              <div className="column is-one-quarter" key={product.pid}>
                <div className="column is-align-content-space-around">
                  <ProductItem
                    product={product}
                  />
                  {product.sold ? <button className="button is-danger is-static" id={product.pid}>Sold</button> :
                                <button className="button is-danger" onClick={(e) => {sold(e,index)}} id={product.pid}>Mark as Sold</button> }
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