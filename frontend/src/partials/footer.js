import React from "react";
import { Link } from "react-router-dom";

const Footer = () => (
  <footer class="footer ftco-section ftco-no-pt">
    <div class="container">
      <div class="row mb-5">
        <div class="col-md-6 col-lg">
          <div class="ftco-footer-widget py-4 py-md-5">
            <h2 class="logo">
              <Link to="/">Chiropractic</Link>
            </h2>
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </p>
            <ul class="ftco-footer-social list-unstyled float-md-left float-lft mt-4">
              <li class="ftco-animate">
                <Link to="#">
                  <span class="fa fa-twitter"></span>
                </Link>
              </li>
              <li class="ftco-animate">
                <Link to="#">
                  <span class="fa fa-facebook"></span>
                </Link>
              </li>
              <li class="ftco-animate">
                <Link to="#">
                  <span class="fa fa-instagram"></span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-md-6 col-lg">
          <div class="ftco-footer-widget ml-md-5 py-5">
            <h2 class="ftco-heading-2">Services</h2>
            <ul class="list-unstyled">
              <li>
                <Link to="#" class="py-1 d-block">
                  <span class="fa fa-check mr-3"></span>Spinal Manupulation
                </Link>
              </li>
              <li>
                <Link to="#" class="py-1 d-block">
                  <span class="fa fa-check mr-3"></span>Electrotherapy
                </Link>
              </li>
              <li>
                <Link to="#" class="py-1 d-block">
                  <span class="fa fa-check mr-3"></span>Manual Lympahtic
                </Link>
              </li>
              <li>
                <Link to="#" class="py-1 d-block">
                  <span class="fa fa-check mr-3"></span>Medical Acupuncture
                </Link>
              </li>
              <li>
                <Link to="#" class="py-1 d-block">
                  <span class="fa fa-check mr-3"></span>Therapeutic Exercise
                </Link>
              </li>
              <li>
                <Link to="#" class="py-1 d-block">
                  <span class="fa fa-check mr-3"></span>Joint Mobilization
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-md-6 col-lg">
          <div class="ftco-footer-widget py-4 py-md-5">
            <h2 class="ftco-heading-2">Contact information</h2>
            <div class="block-23 mb-3">
              <ul>
                <li>
                  <span class="icon fa fa-map-marker"></span>
                  <span class="text">
                    203 Fake St. Mountain View, San Francisco, California, USA
                  </span>
                </li>
                <li>
                  <Link to="#">
                    <span class="icon fa fa-phone"></span>
                    <span class="text">+2 392 3929 210</span>
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <span class="icon fa fa-paper-plane"></span>
                    <span class="text">info@yourdomain.com</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-lg">
          <div class="ftco-footer-widget bg-primary p-4 py-5">
            <h2 class="ftco-heading-2">Business Hours</h2>
            <div class="opening-hours">
              <h4>Opening Days:</h4>
              <p class="pl-3">
                <span>Monday – Friday : 9am to 20 pm</span>
                <span>Saturday : 9am to 17 pm</span>
              </p>
              <h4>Vacations:</h4>
              <p class="pl-3">
                <span>All Sunday Days</span>
                <span>All Official Holidays</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12 text-center">
          <p>
            Copyright &copy;
            <script>document.write(new Date().getFullYear());</script> All
            rights reserved | This template is made with{" "}
            <i class="fa fa-heart" aria-hidden="true"></i> by{" "}
            <a href="https://colorlib.com" target="_blank"  rel="noopener noreferrer">
              Colorlib
            </a>
          </p>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
