import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/homepage.css";
import image from "../images/nutrition.jpeg"

export class Homepage extends React.Component {
  render() {
    return (
      <>
        <div class="hero-wrap">
          <div class="home-slider owl-carousel">
            <div
              class="slider-item"
              style={{ background: `linear-gradient( rgba(0,0,0,0.5), rgba(0, 0, 0, 0.5) ),url(${image}) `}}
            >
              <div class="overlay"></div>
              <div class="container">
                <div class="row no-gutters slider-text align-items-center justify-content-end">
                  <div class="col-md-6 ">
                    <div class="text w-100">
                      <h1 class="mb-4">Welcome to our chiropractic centre</h1>
                      <p>
                        Far far away, behind the word mountains, far from the
                        countries Vokalia and Consonantia, there live the blind
                        texts.
                      </p>
                      <p>
                        {/* <a href="#" class="btn btn-primary">
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
        <section class="ftco-appointment ftco-section ftco-no-pt ftco-no-pb">
          <div class="overlay"></div>
          <div class="container">
            <div class="row d-md-flex justify-content-center">
              <div class="col-md-12">
                <div class="wrap-appointment d-md-flex">
                  <div class="col-md-8 bg-primary p-5 heading-section heading-section-white">
                    <span class="subheading">Booking an Appointment</span>
                    <h2 class="mb-4">Free Consultation</h2>
                    <form action="#" class="appointment">
                      <div class="row justify-content-center">
                        <div class="col-md-6">
                          <div class="form-group">
                            <input
                              type="text"
                              class="form-control"
                              placeholder="Your Name"
                            />
                          </div>
                        </div>
                        <div class="col-md-6">
                          <div class="form-group">
                            <input
                              type="text"
                              class="form-control"
                              placeholder="Phone number"
                            />
                          </div>
                        </div>
                        <div class="col-md-6">
                          <div class="form-group">
                            <div class="form-field">
                              <div class="select-wrap">
                                <div class="icon">
                                  <span class="fa fa-chevron-down"></span>
                                </div>
                                <select name="" id="" class="form-control">
                                  <option value="">Select Services</option>
                                  <option value="">Spinal Manupulation</option>
                                  <option value="">Electrotherapy</option>
                                  <option value="">Manual Lymphatic</option>
                                  <option value="">Medical Acupuncture</option>
                                  <option value="">Therapeutic Exercise</option>
                                  <option value="">Joint Mobilization</option>
                                </select>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col-md-6">
                          <div class="form-group">
                            <div class="form-field">
                              <div class="select-wrap">
                                <div class="icon">
                                  <span class="fa fa-chevron-down"></span>
                                </div>
                                <select name="" id="" class="form-control">
                                  <option value="">Select Chiropractor</option>
                                  <option value="">John Doe</option>
                                  <option value="">William Smith</option>
                                  <option value="">Danny Green</option>
                                  <option value="">Jason Thompson</option>
                                </select>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col-md-6">
                          <div class="form-group">
                            <div class="input-wrap">
                              <div class="icon">
                                <span class="fa fa-calendar"></span>
                              </div>
                              <input
                                type="text"
                                class="form-control appointment_date"
                                placeholder="Date"
                              />
                            </div>
                          </div>
                        </div>
                        <div class="col-md-6">
                          <div class="form-group">
                            <div class="input-wrap">
                              <div class="icon">
                                <span class="fa fa-clock-o"></span>
                              </div>
                              <input
                                type="text"
                                class="form-control appointment_time"
                                placeholder="Time"
                              />
                            </div>
                          </div>
                        </div>
                        <div class="col-md-6">
                          <div class="form-group">
                            <input
                              type="submit"
                              value="Send message"
                              class="btn btn-secondary py-3 px-4"
                            />
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                  <div class="col-md-4 bg-white text-center p-5">
                    <div class="desc border-bottom pb-4">
                      <h2>Business Hours</h2>
                      <div class="opening-hours">
                        <h4>Opening Days:</h4>
                        <p class="pl-3">
                          <span>
                            <strong>Monday – Friday:</strong> 9am to 20 pm
                          </span>
                          <span>
                            <strong>Saturday :</strong> 9am to 17 pm
                          </span>
                        </p>
                        <h4>Vacations:</h4>
                        <p class="pl-3">
                          <span>All Sunday Days</span>
                          <span>All Official Holidays</span>
                        </p>
                      </div>
                    </div>
                    <div class="desc pt-4 ">
                      <h3 class="heading">For Emergency Cases</h3>
                      <span class="phone">(+01) 123 456 7890</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section class="ftco-section">
          <div class="container">
            <div class="row justify-content-center pb-5 mb-3">
              <div class="col-md-7 heading-section text-center ">
                <span class="subheading">We offer Services</span>
                <h2>Our Benefits</h2>
              </div>
            </div>
            <div class="row">
              <div class="col-md-4 services ">
                <div class="d-block d-flex">
                  <div class="icon d-flex justify-content-center align-items-center">
                    <span class="flaticon-chiropractic"></span>
                  </div>
                  <div class="media-body pl-3">
                    <h3 class="heading">Spinal Manupulation</h3>
                    <p>
                      Even the all-powerful Pointing has no control about the
                      blind texts it is an almost unorthographic.
                    </p>
                    <p>
                      {/* <a href="#" class="btn-custom">
                        Read more
                      </a> */}
                    </p>
                  </div>
                </div>
                <div class="d-block d-flex">
                  <div class="icon d-flex justify-content-center align-items-center">
                    <span class="flaticon-acupuncture"></span>
                  </div>
                  <div class="media-body pl-3">
                    <h3 class="heading">Medical Acupuncture</h3>
                    <p>
                      Even the all-powerful Pointing has no control about the
                      blind texts it is an almost unorthographic.
                    </p>
                    <p>
                      {/* <a href="#" class="btn-custom">
                        Read more
                      </a> */}
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-md-4 services ">
                <div class="d-block d-flex">
                  <div class="icon d-flex justify-content-center align-items-center">
                    <span class="flaticon-electrotherapy"></span>
                  </div>
                  <div class="media-body pl-3">
                    <h3 class="heading">Electrotherapy</h3>
                    <p>
                      Even the all-powerful Pointing has no control about the
                      blind texts it is an almost unorthographic.
                    </p>
                    <p>
                      {/* <a href="#" class="btn-custom">
                        Read more
                      </a> */}
                    </p>
                  </div>
                </div>
                <div class="d-block d-flex">
                  <div class="icon d-flex justify-content-center align-items-center">
                    <span class="flaticon-examination"></span>
                  </div>
                  <div class="media-body pl-3">
                    <h3 class="heading">Therapeutic Exercise</h3>
                    <p>
                      Even the all-powerful Pointing has no control about the
                      blind texts it is an almost unorthographic.
                    </p>
                    <p>
                      {/* <a href="#" class="btn-custom">
                        Read more
                      </a> */}
                    </p>
                  </div>
                </div>
              </div>

              <div class="col-md-4 services ">
                <div class="d-block d-flex">
                  <div class="icon d-flex justify-content-center align-items-center">
                    <span class="flaticon-lymph-nodes"></span>
                  </div>
                  <div class="media-body pl-3">
                    <h3 class="heading">Manual Lympahtic</h3>
                    <p>
                      Even the all-powerful Pointing has no control about the
                      blind texts it is an almost unorthographic.
                    </p>
                    <p>
                      {/* <a href="#" class="btn-custom">
                        Read more
                      </a> */}
                    </p>
                  </div>
                </div>
                <div class="d-block d-flex">
                  <div class="icon d-flex justify-content-center align-items-center">
                    <span class="flaticon-bone"></span>
                  </div>
                  <div class="media-body pl-3">
                    <h3 class="heading">Joint Mobilization</h3>
                    <p>
                      Even the all-powerful Pointing has no control about the
                      blind texts it is an almost unorthographic.
                    </p>
                    <p>
                      {/* <a href="#" class="btn-custom">
                        Read more
                      </a> */}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section class="ftco-section ftco-no-pt ftco-no-pb">
          <div class="container">
            <div class="row d-flex no-gutters">
              <div class="col-md-6 d-flex order-md-last">
                <div
                  class="img img-video d-flex align-self-stretch align-items-center justify-content-center mb-4 mb-sm-0"
                  style={{ backgroundImage: "url(images/person_2.jpg)" }}
                >
                  <a
                    href="https://vimeo.com/45830194"
                    class="icon-video popup-vimeo d-flex justify-content-center align-items-center"
                  >
                    <span class="fa fa-play"></span>
                  </a>
                </div>
              </div>
              <div class="col-md-6 pr-md-5 py-md-5">
                <div class="row justify-content-start py-5">
                  <div class="col-md-12 heading-section ">
                    <span class="subheading">Welcome to Chiropractic</span>
                    <h2 class="mb-4">About Chiropractic</h2>
                    <p>
                      Far far away, behind the word mountains, far from the
                      countries Vokalia and Consonantia, there live the blind
                      texts. Separated they live in Bookmarksgrove right at the
                      coast of the Semantics, a large language ocean. A small
                      river named Duden flows by their place and supplies it
                      with the necessary regelialia. It is a paradisematic
                      country, in which roasted parts of sentences fly into your
                      mouth.
                    </p>
                  </div>
                </div>
                <div class="row ftco-counter pb-5" id="section-counter">
                  <div class="col-md-6 col-lg-4 d-flex justify-content-center counter-wrap ">
                    <div class="block-18">
                      <div class="text">
                        <strong class="number" data-number="45">
                          0
                        </strong>
                      </div>
                      <div class="text">
                        <span>
                          Years of <br />
                          Experienced
                        </span>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6 col-lg-4 d-flex justify-content-center counter-wrap ">
                    <div class="block-18">
                      <div class="text">
                        <strong class="number" data-number="2342">
                          0
                        </strong>
                      </div>
                      <div class="text">
                        <span>
                          Happy <br />
                          Customers
                        </span>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6 col-lg-4 d-flex justify-content-center counter-wrap ">
                    <div class="block-18">
                      <div class="text">
                        <strong class="number" data-number="30">
                          0
                        </strong>
                      </div>
                      <div class="text">
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
