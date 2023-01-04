import React, { useContext } from "react";
import LoginContext from '../context/LoginContext';
import logo from '../images/seboLogo.jpeg';

const Header = () => {
  const { logged } = useContext(LoginContext);

  return (
    <header style={{ backgroundColor: '#3A095B' }} className="p-3">
    <div className="container-fluid">
      <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
        <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
          <img style={{ width: 30, height: 30, borderRadius: 50 }} src={logo} alt="sebo-logo"/>
        </a>
        
        <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
          <li><a href="/" className="nav-link px-2 text-white">Início</a></li>
          <li><a href="about" className="nav-link px-2 text-white">Sobre</a></li>
          <li><a href="books" className="nav-link px-2 text-white">Livros</a></li>
        </ul>
       { logged
          ? <div className="btn-group">
              <button type="button" className="btn btn-outline-secondary">
              <a href="profile" className="nav-link px-2 text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"></path>
                    <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"></path>
                  </svg>
              </a>
                </button>
              <button type="button" className="btn btn-outline-secondary">
                <a href="cart" className="nav-link px-2 text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart3" viewBox="0 0 16 16">
                    <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"></path>
                  </svg>
                </a>
              </button>
          </div>
          :  <div className="text-end">
              <a href="/login">
                <button type="button" className="btn btn-outline-light me-2">Entrar</button>
              </a>
              <a href="/register">
                <button type="button" className="btn btn-warning">Cadastre-se</button>
              </a>
             </div>
        }
      </div>
    </div>
  </header>
  );
}

export default Header;