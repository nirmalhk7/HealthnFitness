import React, { Component } from "react";
import axios from "axios";
import List from "./List";
import { withRouter, Link } from "react-router-dom";
import { serverUrl } from "../shared/baseUrl";
import SubHeader from "../partials/header";

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: "",
      items: [],
      newTask: null,
      allTasks: [
        { name: "Task 1", date: "2001/01/20", shareWith: "Private" },
        { name: "Task 2", date: "2001/01/20", shareWith: "Private" },
        { name: "Task 3", date: "2001/01/20", shareWith: "Private" },
        { name: "Task 4", date: "2001/01/20", shareWith: "Private" },
        { name: "Task 5", date: "2001/01/20", shareWith: "Private" },
      ],
      taskSelected: null,
      name: null,
      date: null,
      sharedWith: null,
    };
    this.selectTask = this.selectTask.bind(this);
  }

  onChange = (event) => {
    this.setState({ term: event.target.value });
  };

  onItemEdit = (event) => {};

  onItemSave = (event) => {};

  selectTask = (event) => {
    event.preventDefault();
    console.log(event.target.id);
    let idSelected = parseInt(event.target.id.split("#")[1]);
    this.setState({ taskSelected: idSelected });
  };

  render() {
    return (
      <>
        <SubHeader title="Your Dashboard" />
        <section className="ftco-section">
          <div className="container">
            <div className="row no-gutters justify-content-center pb-5 mb-3">
              <div className="col-md-7 heading-section text-center">
                <span className="subheading">Professionals</span>
                <h2>Search through the best fitness professionals</h2>
              </div>
            </div>
            <div className="row">
              <Editable newTaskPadding={true} />

              {this.state.allTasks.map((ele, ind) => (
                <OnClickEdit
                  key={ind}
                  taskname={ele.name}
                  taskdate={ele.date}
                  taskshare={ele.shareWith}
                  editing={this.state.taskSelected === ind}
                  _onClickCallback={this.selectTask}
                  _onSave={this.selectTask}
                  _id={"Task#" + ind}
                />
              ))}
            </div>
          </div>
        </section>
      </>
    );
  }
}
export default withRouter(Todo);

const Hardwritten = (props) => {
  return (
    <div
      id={"ID" + props._id}
      onClick={props._onClickCallback}
      className="card w-100"
      style={{ padding: "0.75rem 0.375rem", height: "52px!important" }}
    >
      {props.taskshare + ": " + props.taskname}
    </div>
  );
};

const Editable = (props) => {
  return (
    <>
      <div className={`card w-100 ${props.newTaskPadding ? "mb-5 mt-5 " : ""}`}>
        <div className="card-body">
          {props.newTaskPadding ? (
            <>
              <h5 className="card-title">New Card</h5>
            </>
          ) : (
            <></>
          )}

          <div className="input-group w-100">
            <input className="form-control" value={props.taskname} />
            <div className="input-group-append">
              <input className="form-control" type="date" />
              <button className="btn btn-primary input-group-text">Save</button>
            </div>
          </div>

          <div className="input-group w-100 mt-3">
            <div className="input-group-prepend">
              <span className="input-group-text">Tags</span>
            </div>
            <input className="form-control" />
            <div className="input-group-append">
              <select class="form-control" style={{ minWidth: "240px" }}>
                <option selected>Choose...</option>
                <option value="PRIVATE">PRIVATE</option>
                <option value="2">DERTEC</option>
                <option value="3">Three</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const OnClickEdit = (props) => {
  if (!props.editing) {
    return Hardwritten(props);
  } else {
    return Editable(props);
  }
};
