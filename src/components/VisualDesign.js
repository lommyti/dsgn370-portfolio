import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

class VisualDesign extends Component {
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
            <div className="yellowbar-case mobile-no-show"></div>
          </Link>
          <Link to="/knightlab" className="link-case">
            <span className="mobile-no-show">NU Knight Lab</span>
            <img
              src="/img/logo-knightlab.png"
              className="desktop-no-show w-44px"
            />
            <div className="yellowbar-case "></div>
          </Link>
          <Link to="/visualdesign" className="link-case">
            <span className="mobile-no-show">Visual Design</span>
            <img
              src="/img/logo-visualdesign.png"
              className="desktop-no-show w-44px"
            />
            <div className="yellowbar-case yellowbar-case-selected"></div>
          </Link>
          <Link to="/allprojects" className="link-case mobile-no-show">
            See All
          </Link>
        </div>

        <div className="col-8 m-top-3 m-bottom-6 m-left-20 text-links  mobile-m-l-r-0 mobile-w-100">
          <div className="col-12 d-inline padding-right-1 padding-bottom-2 b-s-border-box case-body case-viz mobile-m-top-55">
            <h1>Visual Design</h1>
            <p>
              This is all the stuff I've loved working on that didn't quite fit
              a case study format!
            </p>
            <hr />
            <img src="/img/visualdesign/day2.png" className="w-100 m-h-200" />
            <img src="/img/visualdesign/day1.png" className="w-100" />
            <img src="/img/visualdesign/day5.png" className="w-100" />
            <img
              src="/img/visualdesign/weather1.png"
              className="col-4-left d-inline"
            />
            <img
              src="/img/visualdesign/weather2.png"
              className="col-4-center d-inline"
            />
            <img
              src="/img/visualdesign/weather3.png"
              className="col-4-right d-inline"
            />
            <img
              src="/img/visualdesign/toucan.jpg"
              className="d-inline col-4-left"
            />
            <img
              src="/img/visualdesign/disccover.jpg"
              className="d-inline col-8-right"
            />
            <img src="/img/visualdesign/discdataviz.png" className="w-100" />
            <img src="/img/visualdesign/toothless.png" className="w-100" />
            <img src="/img/visualdesign/btgraphics.png" className="w-100" />

            <img src="/img/visualdesign/buildux.png" className="w-100" />
            <hr />
            <div className="text-links">
              <Link to="/knightlab" className="see-all">
                <i className="material-icons icon-smaller icon-flipped">
                  double_arrow
                </i>
                PREVIOUS: KNIGHT LAB
              </Link>
            </div>
          </div>

          <Footer />
        </div>
      </div>
    );
  }
}

export default VisualDesign;
