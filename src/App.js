import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Navbar from './components/Navbar';
import SignUp from './components/pages/signup/SignUp'
import Profile from './components/pages/profile/Profile'
import Login from './components/pages/login/Login'


function App() {
  return (
    <div>
      <Router>
      <Navbar/>
      <Switch>
        <Route path='/profile' component={Profile}/>
        <Route path='/sign-up' component={SignUp}/>
        <Route path='/login' component={Login}/>
      </Switch>
    </Router>
    </div>
  );
}

export default App;
