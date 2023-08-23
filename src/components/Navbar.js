import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
        <>
        <nav className="main-nav">
            <div className="logo">Creatwise</div>
            <div className="links">
                <a href="/">Home</a>
                <a href="/products">Products</a>
                <a href="/about">About Us</a>
                <a href="/contact">Blogs</a>
            </div>
            <div className="btns">
                <button href="/login" className="login-btn" type="button">Login</button>
                <span className="dot"></span>
                <button href="/contact" className="signup-btn" type="button">Sign up</button>
            </div>
        </nav>
        </>
    );
  }
}

export default Navbar;
