import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Books from './pages/Books';
import Container from 'react-bootstrap/Container';
import './App.css';
import Login from './pages/Login';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  return (
  <Container fluid className='App'>
    <Header />
    <Container className='mt-4'>
        <Switch>
            <Route exact path="/" component={ Home } />
            <Route exact path="/about" component={ About } />
            <Route exact path="/books" component={ Books } />
            <Route exact path="/login" component={ Login } />
        </Switch>
    </Container>
    <Footer />
  </Container>
  );
}


export default App;
