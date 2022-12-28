import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Books from './pages/Books';
import Container from 'react-bootstrap/Container';
import './App.css';
import Login from './pages/Login';
import Footer from './components/Footer';
import Header from './components/Header';
import LoginContext from './context/LoginContext';
import Register from './pages/Register';

function App() {
  const [logged, setLogged] = useState(false);

  return (
  <LoginContext.Provider value={{ logged, setLogged }}>
  <Container fluid className='App'>
    <Header />
    <Routes>
        <Route exact path="/" element={ <Home /> } />
        <Route exact path="/home" element={ <Home /> } />
        <Route exact path="/about" element={ <About /> } />
        <Route exact path="/books" element={ <Books /> } />
        <Route exact path="/login" element={ <Login /> } />
        <Route exact path="/register" element={ <Register /> } />
    </Routes>
    <Footer />
  </Container>
  </LoginContext.Provider>
  );
}


export default App;
