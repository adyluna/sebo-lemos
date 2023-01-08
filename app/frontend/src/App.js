import { useEffect, useState } from "react";
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { requestData } from './services/requests';

import './App.css';

import LoginContext from "./context/LoginContext";

import Home from './pages/Home';
import About from './pages/About';
import Books from './pages/Books';
import Login from './pages/Login';
import Footer from './components/Footer';
import Header from './components/Header';
import Register from './pages/Register';
import ShoppingCart from "./pages/ShoppingCart";
import Profile from "./pages/Profile";

function App() {
  const [logged, setLogged] = useState(false);
  const [allBooks, setAllBooks] = useState([]);
  const [cartProducts, setCartProducts] = useState([]);

  useEffect(() => {
    const handleFetchBooks = () => {
      const endpoint = '/allbooks';
      requestData(endpoint).then((response) => {
      setAllBooks(response);
      }).catch((error) => console.log(error));
    }

    const handleCartProducts = () => {
      const userCart = localStorage.getItem('cartProducts');
      if (userCart) {
        setCartProducts(JSON.parse(userCart));
      }
    }

    handleFetchBooks();
    handleCartProducts();
  }, []);
  
  useEffect(() => {
    const userAlreadyLogged = localStorage.getItem('token');
    if (userAlreadyLogged) {
      setLogged(true);
    } else setCartProducts(false);
  }, [logged]);

  const addProductToCart = (product) => {
    localStorage.setItem('cartProducts', JSON.stringify([...cartProducts, product]))
    setCartProducts([...cartProducts, product]);
  };

  return (
  <LoginContext.Provider  value={{ logged, setLogged }}>
    <BrowserRouter>
      <Header />
      <div style={{ backgroundColor: '#EBEEF3' }} className="text-center">
      <Routes>
        <Route exact path="/profile" element={ <Profile /> } />
        <Route exact path="/" element={ <Home allBooks={allBooks} addProductToCart={addProductToCart}/> } />
        <Route exact path="/home" element={ <Home allBooks={allBooks} addProductToCart={addProductToCart}/> } />
        <Route exact path="/about" element={ <About /> } />
        <Route exact path="/books" element={ <Books allBooks={allBooks} addProductToCart={addProductToCart}/> } />
        <Route exact path="/login" element={ <Login /> } />
        <Route exact path="/register" element={ <Register /> } />
        <Route exact path="/cart" element={<ShoppingCart products={cartProducts}/>}/>
      </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  </LoginContext.Provider>
  );
}


export default App;
