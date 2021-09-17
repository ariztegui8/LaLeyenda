import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Galeria from './pages/Galeria';
import Contacto from './pages/Contacto';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/galeria' component={Galeria} />
          <Route path='/contacto' component={Contacto} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
