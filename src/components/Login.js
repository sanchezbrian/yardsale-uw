import React, { Component } from "react";
import { Navigate } from "react-router-dom";
import withContext from "../withContext";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }

  signInWithGoogle = (e) => {
    e.preventDefault();

    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    provider.setCustomParameters({
      hd: 'uw.edu'
    });

    signInWithPopup(auth, provider).then((res) => {
      const credential = GoogleAuthProvider.credentialFromResult(res);
      console.log(res.user.email);
      let user = {
        email: res.user.email,
        displayName: res.user.displayName
      }
      this.props.context.loginUser(user);
    }).catch((error) => {
      console.log(error.message)
    })
  }

  handleChange = e => this.setState({ [e.target.name]: e.target.value, error: "" });

  login = (e) => {
    e.preventDefault();

    const { username, password } = this.state;
    if (!username || !password) {
      return this.setState({ error: "Fill all fields!" });
    }
    this.props.context.login(username, password)
      .then((loggedIn) => {
        if (!loggedIn) {
          this.setState({ error: "Invalid Credentails" });
        }
      })
  };

  render() {
    return !this.props.context.user ? (
      <>
        <div className="hero is-link ">
          <div className="hero-body container">
            <h4 className="title has-text-centered">Login</h4>
          </div>
        </div>
        <br />
        <br />
        <form onSubmit={this.signInWithGoogle}>
          <div className="columns is-mobile is-centered">
            <div className="column is-one-third">
              <div className="field">
                <label className="label">Email: </label>
                <input
                  className="input"
                  type="email"
                  name="username"
                  onChange={this.handleChange}
                />
              </div>
              <div className="field">
                <label className="label">Password: </label>
                <input
                  className="input"
                  type="password"
                  name="password"
                  onChange={this.handleChange}
                />
              </div>
              {this.state.error && (
                <div className="has-text-danger">{this.state.error}</div>
              )}
              <div className="field is-clearfix">
                <button
                  className="button is-primary is-outlined is-pulled-right"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </form>
      </>
    ) : (
      <Navigate to="/products" />
    );
  }
}

export default withContext(Login);