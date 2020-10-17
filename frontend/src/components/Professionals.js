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

export const SingleProfessional = ({ name }) => {
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
              <h1 className="mb-0 bread">About {name}</h1>
            </div>
          </div>
        </div>
      </section>
      <section className="ftco-section">
        <div className="container">
          <div className="card w-100 h-100">
            <div className="card-body">Some Details to come here about {name}</div>
          </div>
        </div>
      </section>
    </>
  );
};
export default FindProfessionals;
