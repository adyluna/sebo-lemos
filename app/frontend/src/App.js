// import './App.css';
import Header from './components/Header';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Books from './pages/Books';
import Contact from './pages/Contact';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function App() {
  return (
  <Container fluid>
    <Col className="border d-flex align-items-center justify-content-center">
      <Header />
    </Col>
    <Col className="border d-flex align-items-center justify-content-center">
    <Switch>
        <Route exact path="/" component={ Home } />
        <Route path="/about" component={ About } />
        <Route path="/books" component={ Books } />
        <Route path="/contact" component={ Contact } />
      </Switch>
    </Col>
  </Container>
  );
}

export default App;
