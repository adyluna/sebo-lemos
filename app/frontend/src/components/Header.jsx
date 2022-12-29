import React, { useContext } from "react";
import logo from '../images/seboLogo.jpeg';
import LoginContext from "../context/LoginContext";

const Header = () => {
  const { logged, setLogged } = useContext(LoginContext);
  
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
          ? <div>
              <svg color="white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
              </svg>
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