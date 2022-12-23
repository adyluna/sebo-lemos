import Header from './components/Header';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Books from './pages/Books';
import Container from 'react-bootstrap/Container';
import './App.css';
import Login from './pages/Login';
import Footer from './components/Footer';
import TestHeader from './components/TestHeader';

function App() {
  return (
  <Container fluid className='App w-100 vh-100'>
    <TestHeader />
    <Container fluid className='mt-4 w-100'>
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
