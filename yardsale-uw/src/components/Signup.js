import React, { Component } from "react";
import { Navigate } from "react-router-dom";
import axios from "axios"
import withContext from "../withContext";

const initState = {
    email: "",
    name: "",
    phone_number: "",
    password: ""
  };

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = initState;
  }

  save = async (e) => {
    e.preventDefault();
    const { email, name, phone_number, password } = this.state;

    if (name && email && phone_number && password) {
      const id = Math.random().toString(36).substring(2) + Date.now().toString(36);

      await axios.post(
        'http://localhost:3001/users',
        { id, name, email, phone_number, password },
      )

      this.setState(
        { flash: { status: 'is-success', msg: 'User created successfully' }}
      );

    } else {
      this.setState(
        { flash: { status: 'is-danger', msg: 'Please fill in all fields' }}
      );
    }
  };

  handleChange = e => this.setState({ [e.target.name]: e.target.value, error: "" });

  render() {
    const {name, email, phone_number, password} = this.state;
    return !this.props.context.user ? (
      <>
        <div className="hero is-link ">
          <div className="hero-body container">
            <h4 className="title">Sign Up</h4>
          </div>
        </div>
        <br />
        <br />
        <form onSubmit={this.save}>
          <div className="columns is-mobile is-centered">
            <div className="column is-one-third">
             <div className="field">
                <label className="label">Name: </label>
                <input
                  className="input"
                  type="name"
                  name="name"
                  value={name}
                  onChange={this.handleChange}
                  required
                />
              </div>
              <div className="field">
                <label className="label">Email: </label>
                <input
                  className="input"
                  type="email"
                  name="email"
                  value={email}
                  onChange={this.handleChange}
                  required
                />
              </div>
              <div className="field">
                <label className="label">Phone Number: </label>
                <input
                  className="input"
                  type="number"
                  name="phone_number"
                  value={phone_number}
                  onChange={this.handleChange}
                  required
                />
              </div>
              <div className="field">
                <label className="label">Password: </label>
                <input
                  className="input"
                  type="password"
                  name="password"
                  value={password}
                  onChange={this.handleChange}
                  required
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
                  onClick={this.save}
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </form>
      </>
    ) : (
      <Navigate to="/login" />
    );
  }
}

export default withContext(Signup);