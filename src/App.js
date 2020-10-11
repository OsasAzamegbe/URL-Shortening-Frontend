import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Navbar from './components/Navbar';
import SignUp from './components/SignUp'


function App() {
  return (
    <div>
      <header className="App-header">
        <h1>Shorten</h1>
      </header>
      <Router>
      <Navbar/>
      <Switch>
        <Route path='/sign-up' component={SignUp}/>
      </Switch>
    </Router>
    </div>
  );
}

export default App;
