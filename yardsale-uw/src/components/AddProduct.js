import React, { Component } from "react";
import withContext from "../withContext";
import { Redirect } from "react-router-dom";
import axios from 'axios';
import { getDatabase, ref, push, child, get } from "firebase/database";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDaYpplAT03YJXpE7-WD3QkLVTixMQDy7E",
  authDomain: "yardsale-uw.firebaseapp.com",
  projectId: "yardsale-uw",
  storageBucket: "yardsale-uw.appspot.com",
  messagingSenderId: "908488081877",
  appId: "1:908488081877:web:220777cf4b6a392a557d5c",
  measurementId: "G-WRDG2DCKVR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const database = getDatabase();

const initState = {
  name: "",
  price: "",
  description: ""
};

class AddProduct extends Component {
  constructor(props) {
    super(props);
    this.state = initState;
  }

  save = async (e) => {
    e.preventDefault();
    const { name, price, description } = this.state;

    if (name && price) {
      const id = Math.random().toString(36).substring(2) + Date.now().toString(36);

      await axios.post(
        'http://localhost:3001/products',
        { id, name, price, description },
      )

      this.props.context.addProduct(
        {
          name,
          price,
          description
        },
        () => this.setState(initState)
      );

      push(ref(database, 'Post/'), {
        name: name,
        price: price,
        description: description,
        pid: id
      }).catch(alert);

      this.setState(
        { flash: { status: 'is-success', msg: 'Product created successfully' }}
      );

    } else {
      this.setState(
        { flash: { status: 'is-danger', msg: 'Please enter name and price' }}
      );
    }
  };

  handleChange = e => this.setState({ [e.target.name]: e.target.value, error: "" });

  render() {
      const {name, price, description } = this.state;

      return (
          <>
            <div className="hero is-link">
                <div className="hero-body container">
                    <h4 className="title">Add Product</h4>
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
