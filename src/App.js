import React from 'react';
import Home from './pages/home';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from './pages/about';
import Service from './pages/service';
import Team from './pages/team';
import Portfolio from './pages/portfolio';
import Contact from './pages/contact';


function App() {
  return (
    <Router>


<Switch>
  


  <Route path="/service"  component={Service}/>
  <Route path="/contact"  component={Contact}/>
  <Route path="/portfolio"  component={Portfolio}/>
  <Route path="/team"  component={Team}/>
  <Route path="/about"  component={About}/>
  

  <Route path="/"  component={Home}/>
 
</Switch>

    </Router>
    

  
  );
}
export default App;

