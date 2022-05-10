
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

    <div class="card">
  <div class="card-image" onClick={toggleModal}>
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
      <Modal
          isOpen={isOpen}
          onRequestClose={toggleModal}
          contentLabel="My dialog"
      >
        <div>
            <h2> Contact Buyer</h2>
            <p> ProductName: {product.name} {"\n"}</p>
            <p> Email: {product.email} {"\n"}</p>
            <p> Description: {product.description}</p>
        </div>
        <button onClick={toggleModal}>Close modal</button>
      </Modal>
    </div>
  </div>
</div>

  );
};

export default ProductItem;
