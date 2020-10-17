import React, { Component } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import { Homepage } from "./homepage";
import Login from "./Login";
import "bootstrap/dist/css/bootstrap.min.css";

import "../assets/css/animate.css";
import "../assets/css/owl.theme.default.min.css";
import "../assets/css/magnific-popup.css";

import "../assets/css/style.css";
import Navbar from "./../partials/navbar";
import Footer from "../partials/footer";
import { connect } from "react-redux";
import FindProfessionals, { SingleProfessional } from "./Professionals";
import ContactUs from "./ContactUs";
import SignUp from "./SignUp";
import Todo from "./Todo";

class Main extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Navbar auth={this.props.auth} />
        <Switch>
          <Route exact path="/" render={() => <Homepage />}></Route>
          <Route exact path="/contact" render={() => <ContactUs />}></Route>
          <Route exact path="/signin" render={() => <Login id={this.props.auth.id} />}></Route>
          <Route exact path="/signup" render={() => <SignUp />}></Route>
          <Route exact path="/dashboard" render={() => <Todo />} />
          <Route exact path="/proffesionals" render={() => <FindProfessionals />} />
          <Route
            exact
            path="/proffesionals/:name"
            render={(props) => <SingleProfessional name={props.match.params.name} />}
          />
        </Switch>
        <Footer />
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  console.log("MAP", state);
  return {
    auth: state.auth,
  };
};

export default connect(mapStateToProps, null)(Main);
