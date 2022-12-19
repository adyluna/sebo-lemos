import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navigation.css';

class Navigation extends Component {
  render() {
    return (
      <div className="Navigation">
        <Link to="/">Início</Link>
        <Link to="/about">Sobre</Link>
        <Link to="/books">Livros</Link>
        <Link to="/contact">Contato</Link>
      </div>
    );
  }
}

export default Navigation;