import React, { useState } from "react";
import { Navigate } from 'react-router-dom';
import { requestPost } from '../services/requests';
import logo from '../images/seboLogo.jpeg';
import { Image, Container, Button } from 'react-bootstrap';

const Register = () => {
  const [doneRegistration, setDoneRegistration] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [failedRegistration, setFailedRegistration] = useState(false);
  const [errorMessage, setErrorMessage] = useState('E-mail ou senha inválidos');

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      const endpoint = '/register';
      await requestPost(endpoint, {name, email, password});

      return setDoneRegistration(true);
    } catch (error) {
      setErrorMessage(error.response.data.message);
      setFailedRegistration(true);
      return setDoneRegistration(false);
    }
  };

  if (doneRegistration) return <Navigate to="/login" />;

  return (
    <Container fluid className="d-flex align-items-center justify-content-center form-signin w-25 m-auto mt-2">
      <form>
        <Image fluid className="mb-4 rounded-circle" src={logo} alt="sebo-logo" />
        <h1 className="h3 mb-3 fw-normal">Crie sua conta</h1>
        <div className="form-floating mb-1">
          <input
            onChange={({ target: { value } }) => setName(value)}
            type="text"
            className="form-control"
            id="floatingUsername"
            placeholder="Username"
            value={name}
          />
          <label htmlFor="floatingPassword">Nome</label>
        </div>
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
        <div className="form-floating">
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
        <Button size="lg" onClick={(event) => handleLogin(event)} className="mt-3" type="submit">Criar conta</Button>
        { failedRegistration && <p  style={{ color: 'red', fontSize: 13 }}><em>*{ errorMessage }</em></p> }
        <p className="mt-5 mb-3 text-muted">&copy; 2022</p>
      </form>
</Container>
  )
};

export default Register;