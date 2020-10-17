import React from "react";
import { Link } from "react-router-dom";
import dummy from "./../images/dummy.jpeg";

const FindProfessionals = () => {
  return (
    <>
      <section
        className="hero-wrap hero-wrap-2"
        //   style="background-image: url('images/bg_2.jpg');"
        data-stellar-background-ratio="0.5"
      >
        <div className="overlay"></div>
        <div className="container">
          <div className="row no-gutters slider-text align-items-end">
            <div className="col-md-9 pb-5">
              <p className="breadcrumbs mb-2">
                <span className="mr-2">
                  <a href="index.html">
                    Home <i className="fa fa-chevron-right"></i>
                  </a>
                </span>{" "}
                <span>
                  Find Professionals <i className="fa fa-chevron-right"></i>
                </span>
              </p>
              <h1 className="mb-0 bread">Find Professionals</h1>
            </div>
          </div>
        </div>
      </section>

      <section className="ftco-section">
        <div className="container">
          <div className="row no-gutters justify-content-center pb-5 mb-3">
            <div className="col-md-7 heading-section text-center">
              <span className="subheading">Professionals</span>
              <h2>Search through the best fitness professionals</h2>
            </div>
          </div>
          <div className="row">
            <Link to="/proffesionals/abcd" className="card w-100" style={{ borderBottom: "0px" }}>
              <div className="card-body">
                <h5 className="card-title">Professional Name 1</h5>
                Details of Professional 1
              </div>
            </Link>
            <div className="card w-100" style={{ borderBottom: "0px" }}>
              <div className="card-body">
                <h5 className="card-title">Professional Name 1</h5>
                Details of Professional 1
              </div>
            </div>
            <div className="card w-100" style={{ borderBottom: "0px" }}>
              <div className="card-body">
                <h5 className="card-title">Professional Name 1</h5>
                Details of Professional 1
              </div>
            </div>
            <div className="card w-100" style={{ borderBottom: "0px" }}>
              <div className="card-body">
                <h5 className="card-title">Professional Name 1</h5>
                Details of Professional 1
              </div>
            </div>
            <div className="card w-100">
              <div className="card-body">
                <h5 className="card-title">Professional Name 1</h5>
                Details of Professional 1
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export const SingleProfessional = ({
  name,
  position = "Web Developer and Designer",
  ranking = 8,
  username = "Mksiyak",
  mail = "mukeshsiyak002@gmail.com",
  phone = "0123456789",
  about = "about will go here ",
}) => {
  return (
    <div className="container emp-profile" style={{ marginTop: "50px" }}>
      <form method="post">
        <div className="row">
          <div className="col-md-4">
            <div className="profile-img">
              <img src={dummy} alt="" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="profile-head">
              <h5>{name}</h5>
              <h6>{position}</h6>
              <p className="proile-rating">
                RANKINGS : <span>{ranking}/10</span>
              </p>
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
                    <p>{username}</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <label>Name</label>
                  </div>
                  <div className="col-md-6">
                    <p>{name}</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <label>Email</label>
                  </div>
                  <div className="col-md-6">
                    <p>{mail}</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <label>Phone</label>
                  </div>
                  <div className="col-md-6">
                    <p>{phone}</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <label>Profession</label>
                  </div>
                  <div className="col-md-6">
                    <p>{position}</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <label>about</label>
                  </div>
                  <div className="col-md-6">
                    <p>{about}</p>
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
export default FindProfessionals;
