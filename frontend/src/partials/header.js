import React from "react";

const SubHeader = ({ title }) => {
  return (
    <section className="hero-wrap hero-wrap-2" data-stellar-background-ratio="0.5">
      <div className="overlay"></div>
      <div className="container">
        <div className="row no-gutters slider-text align-items-end">
          <div className="col-md-9 pb-5">
            <p className="breadcrumbs mb-2">
              <span className="mr-2">
                <a href="index.html">
                  Home <i className="fa fa-chevron-right"></i>
                </a>
              </span>
              <span>
                {title} <i className="fa fa-chevron-right"></i>
              </span>
            </p>
            <h1 className="mb-0 bread">{title}</h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubHeader;
