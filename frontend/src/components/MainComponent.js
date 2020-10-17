import React from "react";
import { Route, Switch } from "react-router-dom";
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
import FindProfessionals from "./Professionals/Professionals";
import ContactUs from "./ContactUs";
import SignUp from "./SignUp";
import SingleProfessional from "./Professionals/SingleProfessional";

const Main = (props) => {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/" render={() => <Homepage id={props.id} />}></Route>
        <Route exact path="/contact" render={() => <ContactUs />}></Route>
        <Route exact path="/signin" render={() => <Login id={props.id} />}></Route>
        <Route exact path="/signup" render={() => <SignUp />}></Route>
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
  return {
    token: state.auth.token,
    id: state.auth.id,
    type: state.auth.type,
  };
};

export default connect(mapStateToProps, null)(Main);
