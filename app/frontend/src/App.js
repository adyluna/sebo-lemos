import { useEffect, useState } from "react";
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import LoginContext from "./context/LoginContext";
import Home from './pages/Home';
import About from './pages/About';
import Books from './pages/Books';
import './App.css';
import Login from './pages/Login';
import Footer from './components/Footer';
import Header from './components/Header';
import Register from './pages/Register';
import ShoppingCart from "./pages/ShoppingCart";

function App() {
  const [logged, setLogged] = useState(false);
  const [cartProducts, setCartProducts] = useState([]);
  
  useEffect(() => {
    const userAlreadyLogged = localStorage.getItem('token');
    if (userAlreadyLogged) {
      setLogged(true);
    } else setCartProducts(false);
  }, [logged]);

  useEffect(() => {
    const userCart = localStorage.getItem('cartProducts');
    if (userCart) {
      setCartProducts(JSON.parse(userCart));
    }
  }, []);

  const addProductToCart = (product) => {
    localStorage.setItem('cartProducts', JSON.stringify([...cartProducts, product]))
    setCartProducts([...cartProducts, product]);
  };


  return (
  <LoginContext.Provider  value={{ logged, setLogged }}>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/" element={ <Home /> } />
        <Route exact path="/home" element={ <Home /> } />
        <Route exact path="/about" element={ <About /> } />
        <Route exact path="/books" element={ <Books addProductToCart={addProductToCart}/> } />
        <Route exact path="/login" element={ <Login /> } />
        <Route exact path="/register" element={ <Register /> } />
        <Route exact path="/cart" element={<ShoppingCart products={cartProducts}/>}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  </LoginContext.Provider>
  );
}


export default App;
