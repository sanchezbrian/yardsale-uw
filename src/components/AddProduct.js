import React, { Component } from "react";
import withContext from "../withContext";
import { Redirect } from "react-router-dom";
import { getDatabase, ref, push, child, get, set } from "firebase/database";
import axios from 'axios';
// import { storage } from "../index";
import { getStorage, ref as sRef, uploadBytes } from "firebase/storage";

const initState = {
  name: "",
  price: "",
  description: "",
  image: ""
};

class AddProduct extends Component {
  constructor(props) {
    super(props);
    this.state = initState;
  }

  save = async (e) => {
    e.preventDefault();
    const { name, price, description, image } = this.state;
    const storageRef = sRef(getStorage(), `/images/${image.name}`);
    const { user } = this.props.context;
    let email = user.email;
    let imageName = image.name;
    let sold = 0;
    if (name && price && image) {
      const id = Math.random().toString(36).substring(2) + Date.now().toString(36);

      // await axios.post(
      //   'http://localhost:3001/products',
      //   { id, name, price, description, email},
      // )

      this.props.context.addProduct(
        {
          id,
          name,
          price,
          description,
          email,
          imageName,
          sold,
        },
        () => this.setState(initState)
      );
      const database = getDatabase();
      set(ref(database, 'Post/' + id), {
        name: name,
        email: email,
        price: price,
        description: description,
        pid: id,
        image: image.name,
        sold: sold
      }).catch(alert);

      console.log(image);
      uploadBytes(storageRef, image).then((snapshot) => {
        console.log('Uploaded a blob or file!');
      });

      this.setState(
        { flash: { status: 'is-success', msg: 'Product created successfully' } }
      );

    } else {
      this.setState(
        { flash: { status: 'is-danger', msg: 'Please enter name and price and image' } }
      );
    }
  };

  handleChange = e => this.setState({ [e.target.name]: e.target.value, error: "" });

  render() {
    const { name, price, description, image } = this.state;

    return (
      <>
        <div className="hero is-link">
          <div className="hero-body container">
            <h4 className="title has-text-centered">Add Product</h4>
          </div>
        </div>
        <br></br>
        <br></br>
        <form onSubmit={this.save}>
          <div className="columns is-mobile is-centered">
            <div className="column is-one-third">
              <div className="field">
                <label className="label">Product Name: </label>
                <input
                  className="input"
                  type="text"
                  name="name"
                  value={name}
                  onChange={this.handleChange}
                  required
                />
              </div>
              <div className="field">
                <label className="label">Price: </label>
                <input
                  className="input"
                  type="number"
                  name="price"
                  value={price}
                  onChange={this.handleChange}
                  required
                />
              </div>
              <div className="field">
                <label className="label">Description: </label>
                <textarea
                  className="textarea"
                  type="text"
                  rows="2"
                  style={{ resize: "none" }}
                  name="description"
                  value={description}
                  onChange={this.handleChange}
                />
              </div>
              <div className="field">
                <label className="label">File Upload: </label>
                <div class="file has-name is-small">
                  <label class="file-label">
                    <input
                      class="file-input"
                      type="file"
                      onChange={(e) => { this.setState({ image: e.target.files[0] }) }}
                      accept="image/png, image/gif, image/jpeg"
                      value={""}
                      name="resume"/>
                      <span class="file-cta">
                        <span class="file-icon">
                          <i class="fas fa-upload"></i>
                        </span>
                        <span class="file-label">
                          Choose a file…
                        </span>
                      </span>
                      <span class="file-name">
                        {this.state.image ? this.state.image.name : "No File Chosen"}
                      </span>
                  </label>
                </div>
                {/* <input
                  type="file"
                  onChange={(e) => { this.setState({ image: e.target.files[0] }) }}
                  accept="image/png, image/gif, image/jpeg"
                /> */}
              </div>
              {this.state.flash && (
                <div className={`notification ${this.state.flash.status}`}>
                  {this.state.flash.msg}
                </div>
              )}
              <div className="field is-clearfix">
                <button
                  className="button is-primary is-outlined is-pulled-right"
                  type="submit"
                  onClick={this.save}
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </form>
      </>
    );
  }

}

export default withContext(AddProduct);
