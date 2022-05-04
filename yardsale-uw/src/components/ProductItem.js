import React, {useState} from "react";
import './App.css';

import Modal from "react-modal";


const ProductItem = props => {
  const { product } = props;
  const [isOpen, setIsOpen] = useState(false);


  function toggleModal() {
    setIsOpen(!isOpen);
  }

  function sayHello(st) {
  }

  return (
    <div className=" column is-half">
      <div  className="box" onClick={toggleModal}>
          <div className="media">
            <div className="media-left">
              <figure className="image is-64x64">
                <img
                  src="https://bulma.io/images/placeholders/128x128.png"
                  alt={product.shortDesc}
                />
              </figure>
            </div>
            <div className="media-content">
              <b style={{ textTransform: "capitalize" }}>
                {product.name}{" "}
                <span className="tag is-warning">${product.price}</span>
              </b>
              <div>{product.description}</div>
            </div>
          </div>
      </div>
      <Modal
          isOpen={isOpen}
          onRequestClose={toggleModal}
          contentLabel="My dialog"
      >
        <div>
            <h2> Contact Buyer</h2>
            <p> Email: {product.email} {"\n"}</p>
            <p> Name: {product.email} {"\n"}</p>
        </div>
        <button onClick={toggleModal}>Close modal</button>
      </Modal>
    </div>
  );
};

export default ProductItem;
