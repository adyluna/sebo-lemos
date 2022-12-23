import React from "react";
import logo from '../images/seboLogo.jpeg';

const TestHeader = () => {
  return (
    <header style={{ backgroundColor: '#3A095B' }} className="p-3">
    <div className="container-fluid">
      <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
        <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
          <img style={{ width: 30, height: 30, borderRadius: 50 }} src={logo} alt="sebo-logo"/>
        </a>
        
        <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
          <li><a href="/" className="nav-link px-2 text-white">Home</a></li>
          <li><a href="about" className="nav-link px-2 text-white">Sobre</a></li>
          <li><a href="books" className="nav-link px-2 text-white">Livros</a></li>
        </ul>

        <div className="text-end">
          <a href="/login">
            <button type="button" className="btn btn-outline-light me-2">Entrar</button>
          </a>
          <button type="button" className="btn btn-warning">Cadastre-se</button>
        </div>
      </div>
    </div>
  </header>
  );
}

export default TestHeader;