import React, { createContext, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Admin from './Components/Admin/Admin';
import Home from './Components/Home/Home';
import AdminControl from './Components/AdminControl/AdminControl';
import Login from './Components/Login/Login';
import AdminAddEvent from './Components/AdminAddEvent/AdminAddEvent';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <div className="App">
      <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
        <Router>
          <div>
            <Switch>
              <Route exact path="/" >
                <Home></Home>
              </Route>
              <Route path="/home" >
                <Home></Home>
              </Route>
              <Route path="/admin" >
                <Admin></Admin>
              </Route>
              <Route exact path="/adminControl" >
                <AdminControl></AdminControl>
              </Route>
              <Route path="/adminAddEvent">
              <AdminAddEvent></AdminAddEvent>
            </Route>
              <Route path="/login">
                <Login></Login>
              </Route>
            </Switch>
          </div>
        </Router>
      </UserContext.Provider>
    </div>
  );
}

export default App;
