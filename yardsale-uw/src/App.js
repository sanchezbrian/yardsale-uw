import React, { Component } from 'react';
import { Routes, Route, Link, BrowserRouter as Router } from "react-router-dom"
import MainProductList from "./components/MainProductList"

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
    this.routerRef = React.createRef();
  }

  render() {
    return (
      <Router ref={this.routerRef}>
        <div className="App">
          <nav
          className='navbar container'
          role="navigation"
          aria-label="main navigation"
          >
            <div className='navbar-brand'>
              <b className='navbar-item is-size-4'>YardSale UW</b>
              <label
                role="button"
                class="navbar-burger burger"
                aria-label="menu"
                aria-expanded="false"
                data-target="navbarBasicExample"
                onClick={e => {
                  e.preventDefault();
                  this.setState({ showMenu: !this.state.showMenu});
                }}>
                  <span aria-hidden="true"></span>
                  <span aria-hidden="true"></span>
                  <span aria-hidden="true"></span>
                </label>
                <div className={`navbar-menu ${
                  this.state.showMenu ? "is-active" : ""
                }`}>
                  <Link to="/products" className="navbar-item">
                    Products
                  </Link>
                </div>
            </div>
          </nav>
          <Routes>
            <Route exact path="/" component={MainProductList} />
            <Route exact path="/products" component={MainProductList} />
          </Routes>
        </div>
      </Router>
    );
  }
}
