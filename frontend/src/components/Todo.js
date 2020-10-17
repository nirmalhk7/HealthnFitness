import React, { Component } from "react";
import axios from "axios";
import List from "./List";
import { withRouter, Link } from "react-router-dom";
import { serverUrl } from "../shared/baseUrl";

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: "",
      items: [],
    };
  }

  onChange = (event) => {
    this.setState({ term: event.target.value });
  };

  onSubmit = (event) => {
    event.preventDefault();
    this.setState({
      term: "",
      items: [...this.state.items, this.state.term],
    });
  };

  render() {
    return (
      <div className="wrapper" style={{}}>
        <div className="inner">
          <form onSubmit={this.onSubmit}>
            <h3>Todo List</h3>
            <input
              placeholder="Objectives"
              style={{ width: "75%" }}
              value={this.state.term}
              onChange={this.onChange}
            />
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
          <List items={this.state.items} />
        </div>
      </div>
    );
  }
}
export default withRouter(Todo);
