import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => (
  <>
    <div className="fixed-top">
      <div className="wrap">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-md-3 mb-md-0 mb-4 d-flex align-items-center">
              <Link className="navbar-brand" to="index">
                MuscleTime
              </Link>
            </div>
            <div className="col-md-7">
              <div className="row">
                <div className="col-md-8 mb-md-0 mb-3">
                  <div className="top-wrap d-flex">
                    <div className="icon d-flex align-items-center justify-content-center">
                      <span className="fa fa-location-arrow"></span>
                    </div>
                    <div className="text">
                      <span>Address</span>
                      <span>198 West 21th Street, Suite 721 New York NY 10016</span>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="top-wrap d-flex">
                    <div className="icon d-flex align-items-center justify-content-center">
                      <span className="fa fa-phone"></span>
                    </div>
                    <div className="text">
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
        className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light "
        id="ftco-navbar"
      >
        <div className="container">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#ftco-nav"
            aria-controls="ftco-nav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="fa fa-bars"></span> Menu
          </button>
          <div className="order-lg-last">
            <Link to="/signin" className="btn btn-primary">
              Sign In
            </Link>
          </div>
          <div className="collapse navbar-collapse" id="ftco-nav">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/proffesionals" className="nav-link">
                  Search Professionals
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="nav-link">
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
