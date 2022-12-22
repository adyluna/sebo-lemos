import React, { Component } from "react";
import Navigation from "./Navigation";
import "../styles/Header.css";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/esm/Row';
import { Link } from 'react-router-dom';

class Header extends Component {
    render() {
      return(
        <Row xl={2} className="Header">
          <Col xl="11" lg="10" md="9" sm="8" xs="6" className="d-flex flex-column align-items-center justify-content-center">
            <h1 className="mt-2">Sebo Lemos</h1>
            <Navigation />
          </Col>
          <Col xl="1" lg="2" md="3" sm="4" xs="5" className="mt-3">
            <Link to="/login" className="Header">
              <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="bi bi-box-arrow-in-right" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0v-2z"/>
              <path fill-rule="evenodd" d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"/>
              </svg>
            </Link>
          </Col>
        </Row>
    );
  }
}

export default Header