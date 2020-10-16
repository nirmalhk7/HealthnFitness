import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => (
  <>
    <div className="fixed-top">
      <div class="wrap">
        <div class="container">
          <div class="row justify-content-between">
            <div class="col-md-3 mb-md-0 mb-4 d-flex align-items-center">
              <Link class="navbar-brand" to="index">
                MuscleTime
              </Link>
            </div>
            <div class="col-md-7">
              <div class="row">
                <div class="col-md-8 mb-md-0 mb-3">
                  <div class="top-wrap d-flex">
                    <div class="icon d-flex align-items-center justify-content-center">
                      <span class="fa fa-location-arrow"></span>
                    </div>
                    <div class="text">
                      <span>Address</span>
                      <span>198 West 21th Street, Suite 721 New York NY 10016</span>
                    </div>
                  </div>
                </div>
                <div class="col">
                  <div class="top-wrap d-flex">
                    <div class="icon d-flex align-items-center justify-content-center">
                      <span class="fa fa-phone"></span>
                    </div>
                    <div class="text">
                      <span>Call us</span>
                      <span>(+01) 123 456 7890</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <nav
        class="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light "
        id="ftco-navbar"
      >
        <div class="container">
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#ftco-nav"
            aria-controls="ftco-nav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="fa fa-bars"></span> Menu
          </button>
          <div class="order-lg-last">
            <Link to="/" class="btn btn-primary">
              Make an appointment
            </Link>
          </div>
          <div class="collapse navbar-collapse" id="ftco-nav">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active">
                <Link to="/" class="nav-link">
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/about" class="nav-link">
                  About
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/proffesionals" class="nav-link">
                  Search Professionals
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/contact" class="nav-link">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
    <div style={{ paddingTop: "10em" }} />
  </>
);

export default Navbar;
