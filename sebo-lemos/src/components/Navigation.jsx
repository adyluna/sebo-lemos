import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navigation extends Component {
  render() {
    return (
      <div className="Navigation">
        <Link style={ { color: 'white' } } to="/">Início</Link>
        <Link style={ { color: 'white' } } to="/about">Sobre</Link>
        <Link style={ { color: 'white' } } to="/books">Livros</Link>
        <Link style={ { color: 'white' } } to="/contact">Contato</Link>
      </div>
    );
  }
}

export default Navigation;