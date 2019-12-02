import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

class Braintree extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className="m-l-r-12-5">
        <div className="left-bar-gradient top-0 left-0" />

        <div className="sidebar sidebar-case m-top-3 col-12">
          <Link to="/" className="link-case">
            Home
            <div className="yellowbar-case"></div>
          </Link>
          <Link to="/about" className="link-case">
            About
            <div className="yellowbar-case"></div>
          </Link>
          <a
            href="/Li_Thomas_Resume_2020.pdf"
            target="_blank"
            className="m-bottom-10 link-case mobile-m-bottom-10px"
          >
            Resume
            <div className="yellowbar-case"></div>
          </a>
          <div className="desktop-no-show"> </div>

          <Link
            to="airbnb"
            className="m-top-20 link-case yellowbar-case-selected mobile-m-top-0"
          >
            <span className="mobile-no-show">Airbnb</span>
            <img
              src="/img/logo-airbnb.png"
              className="desktop-no-show w-44px"
            />
            <div className="yellowbar-case mobile-no-show"></div>
          </Link>
          <Link to="/braintree" className="link-case">
            <span className="mobile-no-show">Braintree</span>
            <img
              src="/img/logo-braintree.png"
              className="desktop-no-show w-44px"
            />
            <div className="yellowbar-case yellowbar-case-selected"></div>
          </Link>
          <Link to="/knightlab" className="link-case">
            <span className="mobile-no-show">NU Knight Lab</span>
            <img
              src="/img/logo-knightlab.png"
              className="desktop-no-show w-44px"
            />
          </Link>
          <Link to="/visualdesign" className="link-case">
            <span className="mobile-no-show">Visual Design</span>
            <img
              src="/img/logo-visualdesign.png"
              className="desktop-no-show w-44px"
            />
          </Link>
          <Link to="/allprojects" className="link-case mobile-no-show">
            See All
            <div className="yellowbar-case"></div>
          </Link>
        </div>

        <div className="col-8 m-top-3 m-bottom-6 m-left-20 text-links mobile-m-l-r-0 mobile-w-100">
          <div className="col-12 d-inline padding-right-1 padding-bottom-2 b-s-border-box case-body ">
            <img
              src="/img/allproj-braintree.png"
              className="w-100 m-h-300 mobile-m-top-55"
            />
            <h1>Designing to bridge marketing & documentation</h1>
            <div className="top-fold">
              <div className="col-8 d-inline v-align-top b-s-border-box p-right-8 case-bt mobile-w-100">
                <p>
                  My very first tech internship was a chance for me to explore
                  and see different roles firsthand; as a intern on the Docs
                  team at Braintree, I worked with PMs, designers, and knowledge
                  strategists on an experimental product landing page within the
                  BT developer docs. Interested? Feel free to{" "}
                  <div class="text-links d-inline">
                    <a href="mailto:thomastli@u.northwestern.edu?subject=Learning more about your work @Braintree">
                      reach out
                    </a>
                  </div>
                  , and I'd be happy to provide the PDF password!
                </p>
                <div class="text-links text-links-bold m-top-5">
                  <a href="/Li_Thomas_Braintree_CaseStudy.pdf" target="_blank">
                    Download the pdf
                  </a>
                </div>
              </div>
              <div className="col-4 d-inline v-align-top top-right mobile-w-100">
                <div className="top-fold-list">
                  <strong>Skills:</strong>
                  <ul>
                    <li>Wireframing (Figma)</li>
                    <li>Visual Design</li>
                    <li>UX Writing</li>
                  </ul>
                </div>
                <p>
                  <strong>Timeline:</strong>
                  <br />
                  Summer 2018
                </p>
                <p>
                  <strong>Teammates:</strong>
                  <br />
                  Individual internship project
                </p>
              </div>
              <hr />
            </div>

            <div className="text-links">
              <div className="col-6 d-inline mobile-w-100">
                <Link to="/airbnb" className="see-all">
                  <i class="material-icons icon-smaller icon-flipped d-inline">
                    double_arrow
                  </i>
                  PREVIOUS: AIRBNB
                </Link>
              </div>
              <div className="col-6 d-inline t-align-right mobile-w-100 mobile-t-align-left">
                <Link to="/knightlab" className="see-all">
                  NEXT: NU KNIGHT LAB
                  <i class="material-icons icon-smaller">double_arrow</i>
                </Link>
              </div>
            </div>
          </div>

          <Footer />
        </div>
      </div>
    );
  }
}

export default Braintree;
