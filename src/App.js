import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Navbar from './components/Navbar';
import SignUp from './components/pages/signup/SignUp'
import Profile from './components/pages/profile/Profile'


function App() {
  return (
    <div>
      <Router>
      <Navbar/>
      <Switch>
        <Route path='/profile' component={Profile}/>
        <Route path='/sign-up' component={SignUp}/>
      </Switch>
    </Router>
    </div>
  );
}

export default App;
