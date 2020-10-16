import React from "react";
import { Link } from "react-router-dom";

const FindProfessionals = () => {
  return (
    <>
      <section
        class="hero-wrap hero-wrap-2"
        //   style="background-image: url('images/bg_2.jpg');"
        data-stellar-background-ratio="0.5"
      >
        <div class="overlay"></div>
        <div class="container">
          <div class="row no-gutters slider-text align-items-end">
            <div class="col-md-9 pb-5">
              <p class="breadcrumbs mb-2">
                <span class="mr-2">
                  <a href="index.html">
                    Home <i class="fa fa-chevron-right"></i>
                  </a>
                </span>{" "}
                <span>
                  Find Professionals <i class="fa fa-chevron-right"></i>
                </span>
              </p>
              <h1 class="mb-0 bread">Find Professionals</h1>
            </div>
          </div>
        </div>
      </section>

      <section class="ftco-section">
        <div class="container">
          <div class="row no-gutters justify-content-center pb-5 mb-3">
            <div class="col-md-7 heading-section text-center">
              <span class="subheading">Professionals</span>
              <h2>Search through the best fitness professionals</h2>
            </div>
          </div>
          <div class="row">
            <Link to="/" class="card w-100" style={{ borderBottom: "0px" }}>
              <div class="card-body">
                <h5 class="card-title">Professional Name 1</h5>
                Details of Professional 1
              </div>
            </Link>
            <div class="card w-100" style={{ borderBottom: "0px" }}>
              <div class="card-body">
                <h5 class="card-title">Professional Name 1</h5>
                Details of Professional 1
              </div>
            </div>
            <div class="card w-100" style={{ borderBottom: "0px" }}>
              <div class="card-body">
                <h5 class="card-title">Professional Name 1</h5>
                Details of Professional 1
              </div>
            </div>
            <div class="card w-100" style={{ borderBottom: "0px" }}>
              <div class="card-body">
                <h5 class="card-title">Professional Name 1</h5>
                Details of Professional 1
              </div>
            </div>
            <div class="card w-100">
              <div class="card-body">
                <h5 class="card-title">Professional Name 1</h5>
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
        class="hero-wrap hero-wrap-2"
        //   style="background-image: url('images/bg_2.jpg');"
        data-stellar-background-ratio="0.5"
      >
        <div class="overlay"></div>
        <div class="container">
          <div class="row no-gutters slider-text align-items-end">
            <div class="col-md-9 pb-5">
              <p class="breadcrumbs mb-2">
                <span class="mr-2">
                  <a href="index.html">
                    Home <i class="fa fa-chevron-right"></i>
                  </a>
                </span>{" "}
                <span>
                  Find Professionals <i class="fa fa-chevron-right"></i>
                </span>
              </p>
              <h1 class="mb-0 bread">About {name}</h1>
            </div>
          </div>
        </div>
      </section>
      <section class="ftco-section">
        <div class="container">
          <div class="card w-100 h-100">
            <div class="card-body">Some Details to come here about {name}</div>
          </div>
        </div>
      </section>
    </>
  );
};
export default FindProfessionals;
