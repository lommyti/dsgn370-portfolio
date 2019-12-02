import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

class Homepage extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className="m-l-r-12-5 mobile-m-l-r-5">
        <div className="left-bar-gradient top-0 left-0" />

        <div className="sidebar mobile-w-100 col-3 m-top-3 ">
          <Header selected="0" />
          <img
            src="/img/self.png"
            alt=""
            className="profile-img col-3 m-top-15"
            draggable="false"
          />
          <img
            src="/img/circle-back.png"
            alt=""
            className="profile-img-back col-3 m-top-20 m-left-4"
            draggable="false"
          />
          <h1>Thomas Li</h1>
          <p className="col-9 text-links">
            Hey! Call me Tommy. I'm a product designer finishing up my degree in
            communication, computer science, and design @
            <a href="https://www.northwestern.edu/">Northwestern</a>.
          </p>
          <p className="col-9 text-links">
            Incoming design intern @
            <a
              href="https://wish.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Wish
            </a>
            . <br />
            Past PM intern @
            <a
              href="https://groupon.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Groupon
            </a>
            .
          </p>
        </div>

        <div className="col-8 m-top-4 m-l-37-5 snap mobile-w-100 mobile-m-l-r-0 ">
          <Link to="/airbnb" className="m-top-5 a-no-line case-airbnb">
            <div className="p-absolute col-8 case case-airbnb z-99 mobile-p-relative mobile-w-100">
              <img
                src="/img/logo-airbnb.png"
                className="w-5 m-top-5 p-absolute m-left-3 logo-hover mobile-no-show"
              />
              <img
                src="/img/button-airbnb.png"
                className="m-t-3-5 p-absolute w-7-5 cta-hover mobile-no-show"
              />
              <div className="m-l-12-5 m-top-5 p-absolute mobile-m-l-r-0 mobile-color mobile-p-relative">
                <h2 className="h2-hover">Airbnb</h2>
                <h3 className="h3-hover ">
                  <strong>Featured </strong> &middot; Client Project / Spring
                  2019 / Building a pet payments system
                </h3>
              </div>

              <img
                src="/img/wf-airbnb.png"
                className="col-8 m-t-7-5 img-hover mobile-w-100 mobile-m-l-10 mobile-m-top-3-5 mobile-p-absolute mobile-col-9"
              />
            </div>
            <img
              src="/img/bg-airbnb.png"
              className="w-150 m-l-12-5 bg-hover m-h-400  mobile-m-l-r-0 mobile-w-100"
            />
          </Link>

          <Link to="/braintree" className="m-top-10 a-no-line">
            <div className="case m-top-10 case-non">
              <div className="p-absolute col-8 z-99">
                <img
                  src="/img/logo-braintree.png"
                  className="w-5 m-top-5 p-absolute m-left-3 mobile-no-show"
                />

                <div className="m-left-10 m-top-5 p-absolute mobile-m-left-5">
                  <h2 className="">BRAINTREE</h2>
                  <h3 className="mobile-no-show">
                    Internship / Summer 2018 / Hosted Fields landing page{" "}
                  </h3>
                </div>
                <img
                  src="/img/wf-braintree.png"
                  className="col-8 m-t-7-5 m-l-8-33 mobile-w-100 mobile-m-l-10"
                />
              </div>
              <img src="/img/bg-braintree.png" className="w-100 bg-hover" />
            </div>
          </Link>
          <Link to="/knightlab" className="m-top-10 a-no-line">
            <div className="case m-top-10 case-non">
              <div className="p-absolute col-8 z-99 mobile-w-100">
                <img
                  src="/img/logo-knightlab.png"
                  className="w-5 m-top-5 p-absolute m-left-3 mobile-no-show"
                />
                <div className="m-left-10 m-top-5 p-absolute mobile-m-left-5">
                  <h2 className="mobile-m-top-1">NU Knight Lab</h2>
                  <h3 className="mobile-no-show">
                    Student Project / Spring 2018 / Fact-Check Flow
                  </h3>
                </div>
                <img
                  src="/img/wf-knightlab.png"
                  className="col-8 m-t-7-5 m-l-8-33 mobile-w-100 mobile-m-l-10 mobile-col-6"
                />
              </div>
              <img src="/img/bg-knightlab.png" className="w-100  bg-hover" />
            </div>
          </Link>
          <Link to="/visualdesign" className=" m-top-10 a-no-line">
            <div className="case m-top-10 case-non">
              <div className="p-absolute col-8 z-99 mobile-w-100">
                <img
                  src="/img/logo-visualdesign.png"
                  className="w-5 m-top-5 p-absolute m-left-3 mobile-no-show"
                />
                <div className="m-left-10 m-top-5 p-absolute mobile-m-left-5">
                  <h2 className="mobile-m-top-1">Visual Design</h2>
                  <h3 className="mobile-no-show">
                    Non-software / graphics work, and digital one-offs
                  </h3>
                </div>
                <img
                  src="/img/wf-visualdesign-mobile.png"
                  className="col-2 m-top-15 m-l-8-33 v-align-top mobile-m-l-10  mobile-m-t-17-5"
                />
                <img
                  src="/img/wf-visualdesign.png"
                  className="col-6 v-align-top m-top-15 mobile-m-top-15"
                />
              </div>
              <img
                src="/img/bg-visualdesign.png"
                className="w-100 m-bottom-5 bg-hover"
              />
            </div>
          </Link>
          <hr />
          <div className="text-links">
            <Link to="/allprojects" className="see-all m-top-3">
              SEE ALL PROJECTS
              <i className="material-icons icon-smaller">double_arrow</i>
            </Link>
          </div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default Homepage;
