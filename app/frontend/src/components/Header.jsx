import React, { Component } from "react";
import Navigation from "./Navigation";
// import "../styles/Header.css"

class Header extends Component {
    render() {
      return(
        <div className="Header">
          <h1>Sebo Lemos</h1>
          <Navigation />
        </div>
    );
  }
}

export default Header