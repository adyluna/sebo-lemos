import React, { Component } from "react";
import Navigation from "./Navigation";
import "../styles/Header.css";
import Col from 'react-bootstrap/Col';

class Header extends Component {
    render() {
      return(
        <Col className="Header d-flex flex-column align-items-center justify-content-center">
          <h1 className="mt-2">Sebo Lemos</h1>
          <Navigation />
        </Col>
    );
  }
}

export default Header