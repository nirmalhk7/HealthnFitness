import React from "react";
import { Route, Switch } from "react-router-dom";
import { Homepage } from "./homepage";
import Login from "./Auth/Login";
import "bootstrap/dist/css/bootstrap.min.css";

import Cookies from "js-cookie";
import "../assets/css/animate.css";
import "../assets/css/owl.theme.default.min.css";
import "../assets/css/magnific-popup.css";

import "../assets/css/style.css";
import Navbar from "./../partials/navbar";
import Footer from "../partials/footer";
import { connect } from "react-redux";
import FindProfessionals from "./Professionals/Professionals";
import ContactUs from "./ContactUs";
import SignUp from "./Auth/SignUp";
import SingleProfessional from "./Professionals/SingleProfessional";
import About from "./About";

const Main = (props) => {
  return (
    <div>
      <Navbar auth={props.auth} />
      <Switch>
        <Route exact path="/" render={() => <Homepage id={props.id} />}></Route>
        <Route exact path="/about" render={() => <About />} />
        <Route exact path="/contact" render={() => <ContactUs />}></Route>
        <Route exact path="/signin" render={() => <Login id={props.id} />}></Route>
        <Route exact path="/signup" render={() => <SignUp />}></Route>
        <Route
          exact
          path="/profile/:name"
          render={(props) => <SingleProfessional name={props.match.params.name} />}
        ></Route>
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
};
const mapStateToProps = (state) => {
  /**/
  return {
    auth: state.auth,
  };
};

export default connect(mapStateToProps, null)(Main);
