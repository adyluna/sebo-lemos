import React, { useContext, useState } from "react";
import { Redirect } from 'react-router-dom';
import { requestLogin, setToken } from '../services/requests';
import logo from '../images/seboLogo.jpeg';
import LoginContext from "../context/LoginContext";

const Login = () => {
  const { logged, setLogged } = useContext(LoginContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginFailed, setLoginFailed] = useState(false)

  const handleLogin = async (event) => {
    event.preventDefault();
    const endpoint = '/login';
    const result = await requestLogin(endpoint, {email, password})
    
    if (result.token) {
      console.log(result.token);
      setToken(result.token)
      return setLogged(true);
    }

    console.log(result);
    
    return setLoginFailed(true);
  };

  if (logged) return <Redirect to="/matches" />;

  return (
    <main className="form-signin w-25 m-auto mt-2">
      <form>
        <img className="mb-4 rounded-circle" src={logo} alt="" width="150" height="150" />
        <h1 className="h3 mb-3 fw-normal">Acesse sua conta</h1>

        <div className="form-floating">
          <input
            onChange={({ target: { value } }) => setEmail(value)}
            type="email"
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com"
            value={email}
          />
          <label for="floatingInput">Email</label>
        </div>
        <div className="form-floating">
          <input
            onChange={({ target: { value } }) => setPassword(value)}
            type="password"
            className="form-control"
            id="floatingPassword"
            placeholder="Password"
            value={password}
          />
          <label for="floatingPassword">Senha</label>
        </div>

        <div className="checkbox mb-3">
          <label>
            <input type="checkbox" value="remember-me" /> Lembrar-me
          </label>
        </div>
        <button onClick={(event) => handleLogin(event)} className="w-100 btn btn-lg btn-primary" type="submit">Entrar</button>
        { loginFailed && <p  style={{ color: 'red', fontSize: 13 }}><em>*E-mail ou senha incorreta</em></p> }
        <p className="mt-5 mb-3 text-muted">&copy; 2022</p>
      </form>
</main>
  )
};

export default Login;