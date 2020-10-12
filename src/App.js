import React, {useState} from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Navbar from './components/Navbar';
import SignUp from './components/pages/signup/SignUp'
import Profile from './components/pages/profile/Profile'
import Login from './components/pages/login/Login'


function App() {
  const [loggedIn, setLoggedIn] = useState(false)
  const [Authorization, setAuthorization] = useState("")

  return (
    <div>
      <Router>
      <Navbar loggedIn={loggedIn} />
      <Switch>
        <Route path='/profile' render={(props) => <Profile {...props} Authorization={Authorization} />}/>
        <Route path='/sign-up' component={SignUp}/>
        <Route path='/login' render={(props) => <Login {...props} setLoggedIn={setLoggedIn} setAuthorization={setAuthorization} />}/>
      </Switch>
    </Router>
    </div>
  );
}

export default App;
