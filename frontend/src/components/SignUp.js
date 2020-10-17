import React, { Component } from "react";
import "../shared/stylesheets/signup-style.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { signUp } from "../redux/actions/authAction";

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      username: "",
      name: "",
      gender: "FEMALE",
      accountType: "CLIENT",
      age: "",
    };
    this.handleChangeField = this.handleChangeField.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChangeField(event) {
    this.setState({
      [event.target.id]: event.target.value,
    });
  }
  handleSubmit(event) {
    event.preventDefault();
    this.props.signUp(this.state);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="appointment">
        <div className="row justify-content-center">
          <div className="col-md-12">
            <div className="form-group">
              <input
                required
                onChange={(ev) => this.handleChangeField(ev)}
                value={this.state.name}
                type="text"
                id="name"
                className="form-control"
                placeholder="Full Name"
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <input
                required
                onChange={(ev) => this.handleChangeField(ev)}
                value={this.state.username}
                type="text"
                id="username"
                className="form-control"
                placeholder="Username"
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <input
                required
                onChange={(ev) => this.handleChangeField(ev)}
                value={this.state.email}
                type="email"
                id="email"
                className="form-control"
                placeholder="Email"
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <select
                onChange={(ev) => this.handleChangeField(ev)}
                value={this.state.gender}
                type="text"
                id="gender"
                className="form-control"
                placeholder="Gender"
              >
                <option value="MALE">Male</option>
                <option default value="FEMALE">
                  Female
                </option>
              </select>
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <input
                required
                onChange={(ev) => this.handleChangeField(ev)}
                value={this.state.password}
                type="password"
                id="password"
                className="form-control"
                placeholder="Password"
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <select
                onChange={(ev) => this.handleChangeField(ev)}
                value={this.state.accountType}
                type="text"
                id="accountType"
                className="form-control"
                placeholder="Account Type"
              >
                <option value="CLIENT">User</option>
                <option value="NUTRITIONIST">Nutritionist</option>
                <option value="PATHOLOGIST">Pathologist</option>
                <option value="FITNESSCOACH">Fitness Coach</option>
              </select>
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <input
                required
                onChange={(ev) => this.handleChangeField(ev)}
                value={this.state.age}
                type="number"
                id="age"
                className="form-control"
                placeholder="Age"
              />
            </div>
          </div>
          <div className="col-md-8">
            <button
              type="submit"
              onClick={this.handleSubmit}
              className="btn btn-secondary py-3 px-4 w-100"
            >
              Sign Up
            </button>
          </div>
          <div className="col-md-4">
            <Link to="/signin" className="btn btn-dark py-3 px-4 w-100">
              Sign In
            </Link>
          </div>
        </div>
      </form>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    signUp: (creds) => dispatch(signUp(creds)),
  };
};
export default connect(null, mapDispatchToProps)(SignUp);
