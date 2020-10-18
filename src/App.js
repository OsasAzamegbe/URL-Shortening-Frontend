import React, {useState, useEffect} from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Navbar from './components/Navbar';
import SignUp from './components/pages/signup/SignUp'
import Profile from './components/pages/profile/Profile'
import Login from './components/pages/login/Login'
import Logout from './components/pages/logout/Logout'
import Home from './components/pages/home/Home'
import HomeRedirect from './components/pages/home/HomeRedirect'


function App() {
  const [user, setUser] = useState({})
  const [alerts, setAlerts] = useState({})

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
        <Route path='/' exact component={HomeRedirect} />
        <Route path='/app' exact component={Home}/>
        <Route path='/app/profile' exact render={(props) => <Profile {...props} user={user} alerts={alerts} setAlerts={setAlerts}/>}/>
        <Route path='/app/sign-up' exact render={(props) => <SignUp {...props} alerts={alerts} setAlerts={setAlerts}/>}/>
        <Route path='/app/login' exact render={(props) => <Login {...props} setUser={setUser} alerts={alerts} setAlerts={setAlerts}/>}/>
        <Route path='/app/logout' exact render={(props) => <Logout {...props} setUser={setUser} />} />
      </Switch>
    </Router>
    </div>
  );
}

export default App;
