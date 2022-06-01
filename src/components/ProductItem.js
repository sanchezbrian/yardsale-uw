import React, {useEffect, useState} from "react";
import "./App.css";
import { Modal, Button } from "react-bootstrap";
import { getStorage, ref as sRef, getDownloadURL  } from "firebase/storage";

const ProductItem = (props) => {
  const { product } = props;
  const [isOpen, setIsOpen] = useState(false);
  const [url, setURL] = useState("");


  useEffect(() => {
    display();
  });

  function display() {
    const storage = getStorage();
    let image = product.image;
    let path = `images/${image}`;
    getDownloadURL(sRef(storage, path))
      .then((url) => {

        setURL(url);
        // Or inserted into an <img> element
        // img = document.getElementById(product.image);
        // img.setAttribute('src', url);
      })
      .catch((error) => {
        // Handle any errors
      });
  }

  function toggleModal() {
    setIsOpen(!isOpen);
  }


  return (
    <div className="card">
      <div id="clickDiv" className="card-image" onClick={toggleModal}>
        <figure className="image is-square">
          <img
            id={product.image}
            src={url}
            alt="Placeholder"
          ></img>
        </figure>
      </div>
      <div className="card-content">
        <div className="media">
          <div className="media-content">
            <b style={{ textTransform: "capitalize" }}>
              {product.name}{" "}
              <span className="tag is-warning">${product.price}</span>
            </b>
          </div>
          <Modal size="xl" show={isOpen} onHide={toggleModal}>
            <Modal.Header>
              <Modal.Title id="pName">{product.name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div>
                <img
                  className="product-photo"
                  src={url}
                  alt="Placeholder"
                ></img>
              </div>
            </Modal.Body>
            <Modal.Header>
              <Modal.Title>Email</Modal.Title>
            </Modal.Header>
            <div id="pEmail" className="box">{product.email}</div>
            <Modal.Header>
              <Modal.Title>Description</Modal.Title>
            </Modal.Header>
            <div id="pDescription" className="box">{product.description}</div>
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
