import Header from './components/Header';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Books from './pages/Books';
import Contact from './pages/Contact';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/esm/Row';
import './App.css';
import Login from './pages/Login';

function App() {
  return (
  <Container fluid className='App vh-100'>
    <Row>
      <Header />
    </Row>
    <Row>
        <Switch>
            <Route exact path="/" component={ Home } />
            <Route exact path="/about" component={ About } />
            <Route exact path="/books" component={ Books } />
            <Route exact path="/contact" component={ Contact } />
            <Route exact path="/login" component={ Login } />
        </Switch>
    </Row>
  </Container>
  );
}


export default App;
