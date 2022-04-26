import React, { Component } from 'react';
import { Routes, Route, Link, BrowserRouter as Router } from "react-router-dom"
import MainProductList from "./components/MainProductList"
import AddProduct from './components/AddProduct';
import axios from "axios"
import jwt_decode from "jwt-decode"
import Context from './Context';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
    this.routerRef = React.createRef();
  }

  async componentDidMount() {
    const products = await axios.get('http://localhost:3001/products');
    this.setState({products: products.data});
  }

  addProduct = (product, callback) => {
    let products = this.state.products.slice();
    products.push(product);
    this.setState({ products },  () => callback && callback());
  }

  render() {
    return (
      <Context.Provider
      value={{
        ...this.state,
        addProduct: this.addProduct}}
      >
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
                  <Link to="/add-product" className="navbar-item">
                    Add Product
                  </Link>
                </div>
            </div>
          </nav>
          <Routes>
            <Route exact path="/" element={<MainProductList/>} />
            <Route exact path="/products" element={<MainProductList/>} />
            <Route exact path="/add-product" element={<AddProduct/>} />
          </Routes>
        </div>
      </Router>
      </Context.Provider>
    );
  }
}
