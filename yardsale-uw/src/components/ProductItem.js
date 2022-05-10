import React, { useState } from "react";
import "./App.css";
import { Modal, Button } from "react-bootstrap";

const ProductItem = (props) => {
  const { product } = props;
  const [isOpen, setIsOpen] = useState(false);

  function toggleModal() {
    setIsOpen(!isOpen);
  }

  return (
    <div class="card">
      <div class="card-image" onClick={toggleModal}>
        <figure class="image is-square">
          <img
            src="https://bulma.io/images/placeholders/128x128.png"
            alt="Placeholder"
          ></img>
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
          <Modal size="xl" show={isOpen} onHide={toggleModal}>
            <Modal.Header>
              <Modal.Title>{product.name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div>
                <img
                  className="product-photo"
                  src="https://bulma.io/images/placeholders/128x128.png"
                  alt="Placeholder"
                ></img>
              </div>
            </Modal.Body>
            <Modal.Header>
              <Modal.Title>Email</Modal.Title>
            </Modal.Header>
            <div class="box">{product.email}</div>
            <Modal.Header>
              <Modal.Title>Description</Modal.Title>
            </Modal.Header>
            <div class="box">{product.description}</div>
            <Modal.Footer>
              <Button variant="secondary" onClick={toggleModal}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
