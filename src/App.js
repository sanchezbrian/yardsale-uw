import React, { Component } from 'react';
import { Routes, Route, Link, BrowserRouter as Router } from "react-router-dom"
import UserProfile from './components/UserProfile';
import MainProductList from "./components/MainProductList"
import AddProduct from './components/AddProduct';
import Login from "./components/Login"
import Signup from './components/Signup';
import axios from "axios"
import jwt_decode from "jwt-decode"
import Context from './Context';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      products: []
    };
    this.routerRef = React.createRef();
  }

  async componentDidMount() {
    let user = localStorage.getItem("user");
    user = user ? JSON.parse(user) : null;
    this.setState({ user });

    const products = await axios.get('https://yardsale-uw-default-rtdb.firebaseio.com/Post.json');
    const arr = []
    Object.keys(products.data).forEach(key => arr.push(products.data[key]))
    this.setState({products: arr});
  }

  markItemSold = (pid) => {
    let products = [...this.state.products];
    let index = products.findIndex((product) => product.pid === pid);
    let product = {...products[index]};
    product.sold = 1;
    products[index] = product;
    this.setState({products: products});
  }

  addProduct = (product, callback) => {
    let products = this.state.products.slice();
    products.push(product);
    this.setState({ products },  () => callback && callback());
  }

  loginUser = (user) => {
    this.setState({ user });
    localStorage.setItem("user", JSON.stringify(user));
  }

  login = async (email, password) => {
    const res = await axios.post(
      'http://localhost:3001/login',
      { email, password },
    ).catch((res) => {
      return { status: 401, message: 'Unauthorized' }
    })

    if(res.status === 200) {
      const { email } = jwt_decode(res.data.accessToken)
      const user = {
        email,
        token: res.data.accessToken,
        accessLevel: email === 'admin@example.com' ? 0 : 1
      }

      this.setState({ user });
      localStorage.setItem("user", JSON.stringify(user));
      return true;
    } else {
      return false;
    }
  }

  logout = e => {
    this.setState({ user: null });
    localStorage.removeItem("user");
  };

  render() {
    return (
      <Context.Provider
      value={{
        ...this.state,
        addProduct: this.addProduct,
        login:this.login,
        loginUser:this.loginUser,
        markItemSold:this.markItemSold}}
      >
      <Router>
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
                className ="navbar-burger burger"
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
                  {this.state.user && (
                  <Link to="/products" className="navbar-item">
                    Products
                  </Link>
                  )}

                  {this.state.user && (
                  <Link to="/add-product" className="navbar-item">
                    Add Product
                  </Link>
                )}
                  {!this.state.user && (
                    <Link to="/" className="navbar-item">
                      Sign Up
                    </Link>
                  )}
                  {this.state.user && (
                    <Link to="/user-profile" className="navbar-item">
                      User profile
                    </Link>
                  )}
                  {!this.state.user ? (
                    <Link to="/login" className="navbar-item">
                       Login
                    </Link>
                  ) : (
                    <Link to="/login" onClick={this.logout} className="navbar-item">
                      Logout
                    </Link>
                )}
                </div>
            </div>
          </nav>
          <Routes>
            <Route exact path="/" element={<Signup/>} />
            <Route exact path="/login" element={<Login/>} />
            <Route exact path="/products" element={<MainProductList/>} />
            <Route exact path="/add-product" element={<AddProduct/>} />
            <Route exact path="/user-profile" element={<UserProfile/>} />
          </Routes>
        </div>
      </Router>
      </Context.Provider>
    );
  }
}
