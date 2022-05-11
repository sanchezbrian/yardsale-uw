import React, { Component } from "react";
import withContext from "../withContext";
import { Redirect } from "react-router-dom";
import axios from 'axios';

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
    const { user } = this.props.context;
    let email = user.email;
    console.log(user);
    if (name && price) {
      const id = Math.random().toString(36).substring(2) + Date.now().toString(36);

      await axios.post(
        'http://localhost:3001/products',
        { id, name, price, description, email},
      )

      this.props.context.addProduct(
        {
          id,
          name,
          price,
          description,
          email
        },
        () => this.setState(initState)
      );
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
