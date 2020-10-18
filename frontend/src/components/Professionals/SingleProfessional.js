import React, { useEffect } from "react";
import { connect } from "react-redux";
import dummyImage from "../../images/dummy.jpeg";
import { getProProfile } from "../../redux/actions/profileAction";

const SingleProfessional = (props) => {
  useEffect(() => {
    props.getAPro(props.name);
  });
  return (
    <div className="container emp-profile mt-5 mb-5">
      <form method="post">
        <div className="row">
          <div className="col-md-4">
            <div className="profile-img">
              <img src={dummyImage} alt="" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="profile-head">
              <h5>{props.name}</h5>
              <button className="btn btn-secondary">Register</button>
            </div>
          </div>
        </div>
        <div className="row" style={{ marginLeft: "20px" }}>
          <div className="col-md-10">
            <div className="tab-content profile-tab" id="myTabContent">
              <div
                className="tab-pane fade show active"
                id="home"
                role="tabpanel"
                aria-labelledby="home-tab"
              >
                <div className="row">
                  <div className="col-md-6">
                    <label>User Id</label>
                  </div>
                  <div className="col-md-6">
                    <p>{props.pro && props.pro.username}</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <label>Name</label>
                  </div>
                  <div className="col-md-6">
                    <p>{props.pro && props.pro.name}</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <label>Email</label>
                  </div>
                  <div className="col-md-6">
                    <p>{props.pro && props.pro.email}</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <label>Phone</label>
                  </div>
                  <div className="col-md-6">
                    <p>{props.pro && props.pro.phonenumber}</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <label>Profession</label>
                  </div>
                  <div className="col-md-6">
                    <p>{props.pro && props.pro.accountType}</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <label>About</label>
                  </div>
                  <div className="col-md-6">
                    <p>{props.pro && props.pro.description}</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <label>Address</label>
                  </div>
                  <div className="col-md-6">
                    <p>{props.pro && props.pro.address}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    pro: state.pros[0],
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getAPro: (ele) => dispatch(getProProfile(ele)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SingleProfessional);
