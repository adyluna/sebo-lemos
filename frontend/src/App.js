import './App.css';
import Header from './components/Header';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Books from './pages/Books';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="App"> 
    <Header />
    <Switch>
      <Route exact path="/" component={ Home } />
      <Route path="/about" component={ About } />
      <Route path="/books" component={ Books } />
      <Route path="/contact" component={ Contact } />
    </Switch>
  </div>
  );
}

export default App;