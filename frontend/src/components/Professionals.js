import React from "react";
import { Link } from "react-router-dom";

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
            <Link to="/" className="card w-100" style={{ borderBottom: "0px" }}>
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
              <img
                src="data:image/jpeg;base64,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"
                alt=""
              />
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
