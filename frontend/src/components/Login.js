import React, { Component } from "react";
import axios from "axios";
import "../shared/stylesheets/login-style.css";
import { withRouter, Link, Redirect } from "react-router-dom";
import { serverUrl } from "../shared/baseUrl";
import { signIn } from "../redux/actions/authAction";
import { connect } from "react-redux";
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
    this.handleChangeField = this.handleChangeField.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChangeField(key, event) {
    this.setState({
      [key]: event.target.value,
    });
  }
  getCookie = (name) => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(";").shift();
  };
  handleSubmit(event) {
    event.preventDefault();
    this.props.signIn(this.state);
  }
  render() {
    if (this.props.authError === null || this.props.id) {
      //TODO Redirect!
    }
    return (
      <div className="login-wrapper" style={{}}>
        <div className="inner">
          <form onSubmit={this.handleSubmit}>
            <h3>Sign In</h3>

            <div className="form-group">
              <input
                required
                onChange={(ev) => this.handleChangeField("email", ev)}
                value={this.state.email}
                type="text"
                className="form-control"
                placeholder="email / username"
              />
            </div>

            <div className="form-group">
              <input
                required
                onChange={(ev) => this.handleChangeField("password", ev)}
                type="password"
                value={this.state.password}
                className="form-control"
                placeholder="Enter password"
              />
            </div>
            <button type="submit" className="btn btn-primary btn-block">
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth.authError,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (creds) => dispatch(signIn(creds)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Login);
