import React from 'react'
import './App.css';
import Navbar from './components/Navbar'
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom'
import Home from './components/pages/Home'
import Shop from './components/pages/Shop'
import Try from './components/pages/try'

function App() {
  return (
    <Router>
      {/* <Test/> */}
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path="/Shop" exact component={() => <Shop />} />

      </Switch>
    </Router>
    
    


    
  );
}

export default App;
