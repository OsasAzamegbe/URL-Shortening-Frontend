import React, {useState, useEffect} from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Navbar from './components/Navbar';
import SignUp from './components/pages/signup/SignUp'
import Profile from './components/pages/profile/Profile'
import Login from './components/pages/login/Login'


function App() {
  const [user, setUser] = useState({})

  useEffect(() => {

    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      setUser(foundUser);
    }

  }, [])

  return (
    <div>
      <Router>
      <Navbar user={user} />
      <Switch>
        <Route path='/profile' render={(props) => <Profile {...props} user={user} />}/>
        <Route path='/sign-up' component={SignUp}/>
        <Route path='/login' render={(props) => <Login {...props} setUser={setUser}/>}/>
      </Switch>
    </Router>
    </div>
  );
}

export default App;
