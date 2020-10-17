import React from "react";
import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="footer ftco-section ftco-no-pt">
    <div className="container">
      <div className="row mb-5">
        <div className="col-md-6 col-lg">
          <div className="ftco-footer-widget py-4 py-md-5">
            <h2 className="logo">
              <Link to="/">Chiropractic</Link>
            </h2>
            <p>
              Far far away, behind the word mountains, far from the countries Vokalia and
              Consonantia, there live the blind texts.
            </p>
            <ul className="ftco-footer-social list-unstyled float-md-left float-lft mt-4">
              <li className="ftco-animate">
                <Link to="#">
                  <span className="fa fa-twitter"></span>
                </Link>
              </li>
              <li className="ftco-animate">
                <Link to="#">
                  <span className="fa fa-facebook"></span>
                </Link>
              </li>
              <li className="ftco-animate">
                <Link to="#">
                  <span className="fa fa-instagram"></span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-md-6 col-lg">
          <div className="ftco-footer-widget ml-md-5 py-5">
            <h2 className="ftco-heading-2">Services</h2>
            <ul className="list-unstyled">
              <li>
                <Link to="#" className="py-1 d-block">
                  <span className="fa fa-check mr-3"></span>Spinal Manupulation
                </Link>
              </li>
              <li>
                <Link to="#" className="py-1 d-block">
                  <span className="fa fa-check mr-3"></span>Electrotherapy
                </Link>
              </li>
              <li>
                <Link to="#" className="py-1 d-block">
                  <span className="fa fa-check mr-3"></span>Manual Lympahtic
                </Link>
              </li>
              <li>
                <Link to="#" className="py-1 d-block">
                  <span className="fa fa-check mr-3"></span>Medical Acupuncture
                </Link>
              </li>
              <li>
                <Link to="#" className="py-1 d-block">
                  <span className="fa fa-check mr-3"></span>Therapeutic Exercise
                </Link>
              </li>
              <li>
                <Link to="#" className="py-1 d-block">
                  <span className="fa fa-check mr-3"></span>Joint Mobilization
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-md-6 col-lg">
          <div className="ftco-footer-widget py-4 py-md-5">
            <h2 className="ftco-heading-2">Contact information</h2>
            <div className="block-23 mb-3">
              <ul>
                <li>
                  <span className="icon fa fa-map-marker"></span>
                  <span className="text">
                    203 Fake St. Mountain View, San Francisco, California, USA
                  </span>
                </li>
                <li>
                  <Link to="#">
                    <span className="icon fa fa-phone"></span>
                    <span className="text">+2 392 3929 210</span>
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <span className="icon fa fa-paper-plane"></span>
                    <span className="text">info@yourdomain.com</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg">
          <div className="ftco-footer-widget bg-primary p-4 py-5">
            <h2 className="ftco-heading-2">Business Hours</h2>
            <div className="opening-hours">
              <h4>Opening Days:</h4>
              <p className="pl-3">
                <span>Monday – Friday : 9am to 20 pm</span>
                <span>Saturday : 9am to 17 pm</span>
              </p>
              <h4>Vacations:</h4>
              <p className="pl-3">
                <span>All Sunday Days</span>
                <span>All Official Holidays</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12 text-center">
          <p>
            Copyright &copy;
            <script>document.write(new Date().getFullYear());</script> All rights reserved | This
            template is made with <i className="fa fa-heart" aria-hidden="true"></i> by{" "}
            <a href="https://colorlib.com" target="_blank" rel="noopener noreferrer">
              Colorlib
            </a>
          </p>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
