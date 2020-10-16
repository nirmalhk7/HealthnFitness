import React from "react";
// import logo from "./logo.svg";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import { Homepage } from "./components/homepage";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import "./assets/css/animate.css";
// import './assets/css/owl.carousel.min.css'
import "./assets/css/owl.theme.default.min.css";
import "./assets/css/magnific-popup.css";

// import "./assets/css/flaticon.css"
import "./assets/css/style.css";
import Navbar from "./components/navbar";
import Footer from "./partials/footer";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" render={() => <Homepage />}></Route>
          <Route exact path="/sign-in" render={() => <Login />}></Route>
          <Route exact path="/signup" render={() => <SignUp />}></Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
