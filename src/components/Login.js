import React, { Component } from "react";
import { Navigate } from "react-router-dom";
import withContext from "../withContext";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { child, getDatabase, ref, get, set } from "firebase/database";
// import { computeStyles } from "@popperjs/core";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      number: "",
    };
  }

  setUser = (name, email, number, uid) => {
    let user = {
      email: email,
      name: name,
      phone_number: number,
      uid: uid
    }
    this.props.context.loginUser(user);
  }

  signInWithGoogle = (e) => {
    e.preventDefault();


    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    provider.setCustomParameters({
      hd: 'uw.edu'
    });

    signInWithPopup(auth, provider).then((res) => {
      //const credential = GoogleAuthProvider.credentialFromResult(res);
      let uid = res.user.uid;
      const db = getDatabase();
      //const auth = getAuth();

      const dbRef = ref(getDatabase());
      get(child(dbRef, `User/${uid}`)).then((snapshot) => {
        if (snapshot.exists()) {
          let data = snapshot.val();
          this.setUser(data.name, data.email, data.phone_number, data.uid);
        } else {
          const { name, number } = this.state;
          this.setState({redirect:true});
          if (!name || !number) {
            return this.setState(
              { flash: { status: 'is-danger', msg: 'Email is not yet registered. Please fill in all fields and login again!' } }
            );
          }
          set(ref(db, 'User/' + uid), {
            email: res.user.email,
            name: name,
            phone_number: number,
            uid: uid
          });
          this.setUser(name, res.user.email, number, uid);
        }
      }).catch((error) => {
        console.error(error);
      });

      console.log(res.user);
    }).catch((error) => {
      console.log(error.message)
    })
  }

  handleChange = e => this.setState({ [e.target.name]: e.target.value, error: "", flash:"" });

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
              {this.state.redirect && (
                <div className="field">
                <label className="label">Full Name: </label>
                <input
                  className="input"
                  type="text"
                  name="name"
                  onChange={this.handleChange}
                />
              </div>
              )}
              {this.state.redirect && (
                <div className="field">
                <label className="label">Phone Number: </label>
                <input
                  className="input"
                  type="number"
                  name="number"
                  onChange={this.handleChange}
                />
              </div>
              )}
              {this.state.flash && (
                <div className={`notification ${this.state.flash.status}`}>
                  {this.state.flash.msg}
                </div>
              )}
              <div className="field is-clearfix">
                <button
                  className="button is-primary is-outlined is-fullwidth"
                >
                  Login with UW NetID
                </button>
              </div>
            </div>
          </div>
        </form>
      </>
    ) : <Navigate to="/products" />
  }
}

export default withContext(Login);