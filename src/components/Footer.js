import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="footer-div">
          <h1>Creativise</h1>
          <span>Empowering Curators, Enriching Perspectives</span>
        </div>
       <div className="icons">
          <span className="input-span"><input type="email" placeholder="@" />
          <button>notify me</button></span>
          <span className="socials"><i className="fa fa-instagram"></i><i className="fa fa-facebook"></i><i className="fa fa-linkedin"></i><i className="fa fa-pinterest"></i><i className="fa fa-twitter"></i></span>
          <span><i className="fa fa-copyright"></i> 2023 Creativise, All rights reserved.</span>
       </div>
      </footer>
    );
  }
}

export default Footer;
