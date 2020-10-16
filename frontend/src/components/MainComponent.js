import React, { Component } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import { Homepage } from "./homepage";
import Login from "./Login";
import SignUp from "./SignUp";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";

import "../assets/css/animate.css";
import "../assets/css/owl.theme.default.min.css";
import "../assets/css/magnific-popup.css";

import "../assets/css/style.css";
import Navbar from "./navbar";
import Footer from "../partials/footer";
import { connect } from 'react-redux';

const mapStateToProps = state =>{
    return {
      user: state.user
    }
  }
  class Main extends Component {
  
    render() {
      return (
        <div>
             <Navbar />
                <Switch>
                  <Route exact path="/" render={() => <Homepage />}></Route>;
                  <Route exact path="/sign-in" render={() => <Login />}></Route>;
                  <Route exact path="/signup" render={() => <SignUp />}></Route>
                </Switch>
             <Footer />
        </div>
      );
    }
  }
  
  export default withRouter(connect(mapStateToProps)(Main));