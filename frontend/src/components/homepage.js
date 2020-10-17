import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/homepage.css";
import image from "../images/nutrition.jpeg";
import SignUp from "./SignUp";

export class Homepage extends React.Component {
  render() {
    return (
      <>
        <div className="hero-wrap">
          <div className="home-slider owl-carousel">
            <div
              className="slider-item"
              style={{
                background: `linear-gradient( rgba(0,0,0,0.5), rgba(0, 0, 0, 0.5) ),url(${image}) `,
              }}
            >
              <div className="overlay"></div>
              <div className="container">
                <div className="row no-gutters slider-text align-items-center justify-content-end">
                  <div className="col-md-6 ">
                    <div className="text w-100">
                      <h1 className="mb-4">Welcome to our chiropractic centre</h1>
                      <p>
                        Far far away, behind the word mountains, far from the countries Vokalia and
                        Consonantia, there live the blind texts.
                      </p>
                      <p>
                        {/* <a href="#" className="btn btn-primary">
                          Book an appointment
                        </a> */}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className="ftco-appointment ftco-section ftco-no-pt ftco-no-pb">
          <div className="overlay"></div>
          <div className="container">
            <div className="row d-md-flex justify-content-center">
              <div className="col-md-12">
                <div className="wrap-appointment d-md-flex">
                  <div className="col-md-8 bg-primary p-5 heading-section heading-section-white">
                    <span className="subheading">Join Us</span>
                    <h2 className="mb-4">Sign Up</h2>
                    {/* <form action="#" className="appointment">
                      <div className="row justify-content-center">
                        <div className="col-md-8">
                          <button
                            type="submit"
                            className="btn btn-secondary py-3 px-4 w-100"
                          >
                            Sign Up
                          </button>
                        </div>
                        <div className="col-md-4">
                          <Link
                            to="/signin"
                            className="btn btn-dark py-3 px-4 w-100"
                          >
                            Sign In
                          </Link>
                        </div>
                      </div>
                    </form> */}
                    <SignUp />
                  </div>
                  <div className="col-md-4 bg-white text-center p-5">
                    <div className="desc border-bottom pb-4">
                      <h2>Business Hours</h2>
                      <div className="opening-hours">
                        <h4>Opening Days:</h4>
                        <p className="pl-3">
                          <span>
                            <strong>Monday – Friday:</strong> 9am to 20 pm
                          </span>
                          <span>
                            <strong>Saturday :</strong> 9am to 17 pm
                          </span>
                        </p>
                        <h4>Vacations:</h4>
                        <p className="pl-3">
                          <span>All Sunday Days</span>
                          <span>All Official Holidays</span>
                        </p>
                      </div>
                    </div>
                    <div className="desc pt-4 ">
                      <h3 className="heading">For Emergency Cases</h3>
                      <span className="phone">(+01) 123 456 7890</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="ftco-section">
          <div className="container">
            <div className="row justify-content-center pb-5 mb-3">
              <div className="col-md-7 heading-section text-center ">
                <span className="subheading">We offer Services</span>
                <h2>Our Benefits</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4 services ">
                <div className="d-block d-flex">
                  <div className="icon d-flex justify-content-center align-items-center">
                    <span className="flaticon-chiropractic"></span>
                  </div>
                  <div className="media-body pl-3">
                    <h3 className="heading">Spinal Manupulation</h3>
                    <p>
                      Even the all-powerful Pointing has no control about the blind texts it is an
                      almost unorthographic.
                    </p>
                    <p>
                      {/* <a href="#" className="btn-custom">
                        Read more
                      </a> */}
                    </p>
                  </div>
                </div>
                <div className="d-block d-flex">
                  <div className="icon d-flex justify-content-center align-items-center">
                    <span className="flaticon-acupuncture"></span>
                  </div>
                  <div className="media-body pl-3">
                    <h3 className="heading">Medical Acupuncture</h3>
                    <p>
                      Even the all-powerful Pointing has no control about the blind texts it is an
                      almost unorthographic.
                    </p>
                    <p>
                      {/* <a href="#" className="btn-custom">
                        Read more
                      </a> */}
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 services ">
                <div className="d-block d-flex">
                  <div className="icon d-flex justify-content-center align-items-center">
                    <span className="flaticon-electrotherapy"></span>
                  </div>
                  <div className="media-body pl-3">
                    <h3 className="heading">Electrotherapy</h3>
                    <p>
                      Even the all-powerful Pointing has no control about the blind texts it is an
                      almost unorthographic.
                    </p>
                    <p>
                      {/* <a href="#" className="btn-custom">
                        Read more
                      </a> */}
                    </p>
                  </div>
                </div>
                <div className="d-block d-flex">
                  <div className="icon d-flex justify-content-center align-items-center">
                    <span className="flaticon-examination"></span>
                  </div>
                  <div className="media-body pl-3">
                    <h3 className="heading">Therapeutic Exercise</h3>
                    <p>
                      Even the all-powerful Pointing has no control about the blind texts it is an
                      almost unorthographic.
                    </p>
                    <p>
                      {/* <a href="#" className="btn-custom">
                        Read more
                      </a> */}
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-4 services ">
                <div className="d-block d-flex">
                  <div className="icon d-flex justify-content-center align-items-center">
                    <span className="flaticon-lymph-nodes"></span>
                  </div>
                  <div className="media-body pl-3">
                    <h3 className="heading">Manual Lympahtic</h3>
                    <p>
                      Even the all-powerful Pointing has no control about the blind texts it is an
                      almost unorthographic.
                    </p>
                    <p>
                      {/* <a href="#" className="btn-custom">
                        Read more
                      </a> */}
                    </p>
                  </div>
                </div>
                <div className="d-block d-flex">
                  <div className="icon d-flex justify-content-center align-items-center">
                    <span className="flaticon-bone"></span>
                  </div>
                  <div className="media-body pl-3">
                    <h3 className="heading">Joint Mobilization</h3>
                    <p>
                      Even the all-powerful Pointing has no control about the blind texts it is an
                      almost unorthographic.
                    </p>
                    <p>
                      {/* <a href="#" className="btn-custom">
                        Read more
                      </a> */}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="ftco-section ftco-no-pt ftco-no-pb">
          <div className="container">
            <div className="row d-flex no-gutters">
              <div className="col-md-6 d-flex order-md-last">
                <div
                  className="img img-video d-flex align-self-stretch align-items-center justify-content-center mb-4 mb-sm-0"
                  style={{ backgroundImage: "url(images/person_2.jpg)" }}
                >
                  <a
                    href="https://vimeo.com/45830194"
                    className="icon-video popup-vimeo d-flex justify-content-center align-items-center"
                  >
                    <span className="fa fa-play"></span>
                  </a>
                </div>
              </div>
              <div className="col-md-6 pr-md-5 py-md-5">
                <div className="row justify-content-start py-5">
                  <div className="col-md-12 heading-section ">
                    <span className="subheading">Welcome to Chiropractic</span>
                    <h2 className="mb-4">About Chiropractic</h2>
                    <p>
                      Far far away, behind the word mountains, far from the countries Vokalia and
                      Consonantia, there live the blind texts. Separated they live in Bookmarksgrove
                      right at the coast of the Semantics, a large language ocean. A small river
                      named Duden flows by their place and supplies it with the necessary
                      regelialia. It is a paradisematic country, in which roasted parts of sentences
                      fly into your mouth.
                    </p>
                  </div>
                </div>
                <div className="row ftco-counter pb-5" id="section-counter">
                  <div className="col-md-6 col-lg-4 d-flex justify-content-center counter-wrap ">
                    <div className="block-18">
                      <div className="text">
                        <strong className="number" data-number="45">
                          0
                        </strong>
                      </div>
                      <div className="text">
                        <span>
                          Years of <br />
                          Experienced
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-4 d-flex justify-content-center counter-wrap ">
                    <div className="block-18">
                      <div className="text">
                        <strong className="number" data-number="2342">
                          0
                        </strong>
                      </div>
                      <div className="text">
                        <span>
                          Happy <br />
                          Customers
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-4 d-flex justify-content-center counter-wrap ">
                    <div className="block-18">
                      <div className="text">
                        <strong className="number" data-number="30">
                          0
                        </strong>
                      </div>
                      <div className="text">
                        <span>
                          Award <br />
                          Winning
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}
