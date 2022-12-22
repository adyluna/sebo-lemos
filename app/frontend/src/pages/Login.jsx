import React from "react";
import logo from '../images/seboLogo.jpeg';

const Login = () => {
  return (
    <main className="form-signin w-25 m-auto mt-2">
      <form>
        <img className="mb-4 rounded-circle" src={logo} alt="" width="150" height="150" />
        <h1 className="h3 mb-3 fw-normal">Acesse sua conta</h1>

        <div className="form-floating">
          <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
          <label for="floatingInput">Email</label>
        </div>
        <div className="form-floating">
          <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
          <label for="floatingPassword">Senha</label>
        </div>

        <div className="checkbox mb-3">
          <label>
            <input type="checkbox" value="remember-me" /> Lembrar-me
          </label>
        </div>
        <button className="w-100 btn btn-lg btn-primary" type="submit">Entrar</button>
        <p className="mt-5 mb-3 text-muted">&copy; 2022</p>
      </form>
</main>
  )
};

export default Login;