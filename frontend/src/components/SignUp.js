import React, { Component } from "react";
import "../shared/stylesheets/signup-style.css";
import Axios from "axios";
import { serverUrl } from "../shared/baseUrl";
import { withRouter, Link } from "react-router-dom";

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      username: "",
      name: "",
      gender: "MALE",
      accountType: "CLIENT",
      age: "",
    };
    this.handleChangeField = this.handleChangeField.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChangeField(key, event) {
    this.setState({
      [key]: event.target.value,
    });
  }
  handleSubmit(event) {
    event.preventDefault();
    Axios.post(serverUrl + "auth/signup", this.state)
      .then((res) => {
        this.props.handleAccount(
          res.data[0]["id"],
          res.data[0]["email"],
          res.data[0]["username"],
          res.data[0]["username"],
          true
        );
      })
      .then(() => {
        this.props.history.push("/");
        console.log("user created successfully");
      })
      .catch((err) => {
        console.log("Error ", err);
      });
  }
  render() {
    return (
      <form action="#" className="appointment">
        <div className="row justify-content-center">
          <div className="col-md-12">
            <div className="form-group">
              <input
                required
                onChange={(ev) => this.handleChangeField("name", ev)}
                value={this.state.name}
                type="text"
                className="form-control"
                placeholder="Full Name"
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <input
                required
                onChange={(ev) => this.handleChangeField("username", ev)}
                value={this.state.username}
                type="text"
                className="form-control"
                placeholder="Username"
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <input
                required
                onChange={(ev) => this.handleChangeField("email", ev)}
                value={this.state.email}
                type="email"
                className="form-control"
                placeholder="Email"
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <select
                onChange={(ev) => this.handleChangeField("gender", ev)}
                value={this.state.gender}
                type="text"
                className="form-control"
                placeholder="Gender"
              >
                <option value="MALE">Male</option>
                <option value="FEMALE">Female</option>
              </select>
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <input
                required
                onChange={(ev) => this.handleChangeField("password", ev)}
                value={this.state.password}
                type="password"
                className="form-control"
                placeholder="Password"
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <select
                onChange={(ev) => this.handleChangeField("type", ev)}
                value={this.state.accountType}
                type="text"
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
                onChange={(ev) => this.handleChangeField("age", ev)}
                value={this.state.age}
                type="number"
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
export default withRouter(SignUp);
