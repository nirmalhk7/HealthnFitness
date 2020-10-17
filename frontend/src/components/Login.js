import React, { Component } from "react";
import axios from "axios";
import "../shared/stylesheets/login-style.css";
import { withRouter, Link } from "react-router-dom";
import { serverUrl } from "../shared/baseUrl";
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user_email: "",
      user_password: "",
      user_remember: true,
    };
    this.handleChangeField = this.handleChangeField.bind(this);
  }
  handleChangeField(key, event) {
    this.setState({
      [key]: event.target.value,
    });
  }
  render() {
    const { user_email, user_password } = this.state;
    return (
      <div className="login-wrapper" style={{}}>
        <div className="inner">
          <form>
            <h3>Sign In</h3>

            <div className="form-group">
              <input
                required
                onChange={(ev) => this.handleChangeField("user_email", ev)}
                value={user_email}
                type="text"
                className="form-control"
                placeholder="email / username"
              />
            </div>

            <div className="form-group">
              <input
                required
                onChange={(ev) => this.handleChangeField("user_password", ev)}
                type="password"
                value={user_password}
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
export default withRouter(Login);
