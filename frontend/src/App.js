import React from 'react';
import logo from './logo.svg';
import {Link,Route,Switch,Redirect,BrowserRouter as Router} from 'react-router-dom';
import { Homepage } from './components/homepage';
import Login from './components/Login';
import SignUp from './components/SignUp';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
   
      <Router>
        <div>
          <Switch>
            <Route exact path="/" render={ ()=><Homepage/>}></Route>;
            <Route exact path="/sign-in" render={ ()=><Login/>}></Route>;
            <Route exact path="/signup" render={ ()=><SignUp/>}></Route>
          </Switch>
        </div>
      </Router>
  );
}

export default App;
