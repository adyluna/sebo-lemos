import React, { useContext, useState } from "react";
import { Navigate } from 'react-router-dom';
import { requestPost, setToken } from '../services/requests';
import logo from '../images/seboLogo.jpeg';
import LoginContext from "../context/LoginContext";
import { Image, Container, Button } from 'react-bootstrap';

const Login = () => {
  const { logged, setLogged } = useContext(LoginContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginFailed, setLoginFailed] = useState(false);

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      const endpoint = '/login';
      const { token } = await requestPost(endpoint, {email, password});
      setToken(token);
      return setLogged(true);
    } catch (error) {
      setLogged(false);
      return setLoginFailed(true);
    }
  };

  if (logged) return <Navigate to="/home" />;

  return (
    <Container className="form-signin w-25 m-auto mt-2">
      <form>
        <Image fluid className="mb-4 rounded-circle" src={logo} alt="sebo-logo" />
        <h1 className="h3 mb-3 fw-normal">Acesse sua conta</h1>

        <div className="form-floating mb-1">
          <input
            onChange={({ target: { value } }) => setEmail(value)}
            type="email"
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com"
            value={email}
          />
          <label htmlFor="floatingInput">Email</label>
        </div>
        <div className="form-floating mb-1">
          <input
            onChange={({ target: { value } }) => setPassword(value)}
            type="password"
            className="form-control"
            id="floatingPassword"
            placeholder="Password"
            value={password}
          />
          <label htmlFor="floatingPassword">Senha</label>
        </div>

        <div className="checkbox mb-3">
          <label>
            <input type="checkbox" value="remember-me" /> Lembrar-me
          </label>
        </div>
        <Button size="lg" onClick={(event) => handleLogin(event)} className="mt-3" type="submit">Entrar</Button>
        { loginFailed && <p  style={{ color: 'red', fontSize: 13 }}><em>*E-mail ou senha incorretos</em></p> }
        <p className="mt-5 mb-3 text-muted">&copy; 2022</p>
      </form>
</Container>
  )
};

export default Login;