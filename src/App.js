import React, {useState, useEffect} from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Navbar from './components/Navbar';
import SignUp from './components/pages/signup/SignUp'
import Profile from './components/pages/profile/Profile'
import Login from './components/pages/login/Login'
import Logout from './components/pages/logout/Logout'


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
        <Route path='app/profile' exact render={(props) => <Profile {...props} user={user} />}/>
        <Route path='app/sign-up' exact component={SignUp}/>
        <Route path='app/login' exact render={(props) => <Login {...props} setUser={setUser}/>}/>
        <Route path='app/logout' exact component={Logout}/>
      </Switch>
    </Router>
    </div>
  );
}

export default App;
