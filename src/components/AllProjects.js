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
      <div className="m-l-r-12-5">
        <div className="left-bar-gradient top-0 left-0" />

        <div className="sidebar sidebar-full col-12">
          <Header selected="5" />
          <h1>All Projects</h1>
        </div>

        <div className="col-12 all-projects m-top-20 m-bottom-6">
          {" "}
          <Link to="/airbnb" className="a-no-line">
            <div className="col-6 d-inline padding-right-1 padding-bottom-2 b-s-border-box mobile-w-100 mobile-padding-reset mobile-p-bottom-8">
              <img src="/img/allproj-airbnb.png" className="w-100" />
              <h2 className="d-inline v-align-baseline">Airbnb </h2>{" "}
              <p className="d-inline v-align-baseline">
                Building a pet payments system.
              </p>
            </div>
          </Link>
          <Link to="/braintree" className="a-no-line">
            <div className="col-6 d-inline padding-left-1 padding-bottom-2 b-s-border-box mobile-w-100 mobile-padding-reset mobile-p-bottom-8">
              <img src="/img/allproj-braintree.png" className="w-100" />
              <h2 className="d-inline v-align-baseline">Braintree </h2>{" "}
              <p className="d-inline v-align-baseline">
                Hosted Fields landing page.
              </p>{" "}
            </div>
          </Link>
          <Link to="/knightlab" className="a-no-line">
            <div className="col-4-left d-inline b-s-border-box mobile-w-100 mobile-padding-reset mobile-p-bottom-8">
              <img src="/img/allproj-knightlab.png" className="w-100" />
              <h3>NU Knight Lab</h3>
              Online fact-checking for digital newsrooms.
            </div>
          </Link>
          <Link to="/visualdesign" className="a-no-line">
            <div className="col-4-center d-inline mobile-w-100 mobile-w-100 mobile-padding-reset mobile-p-bottom-8">
              <img src="/img/allproj-visualdesign.png" className="w-100" />
              <h3>Visual Design</h3>Non-software work and digital one-offs.
            </div>
          </Link>
          <a href="/infoviz-a4" className="a-no-line">
            <div className="col-4-right d-inline padding-bottom-4 b-s-border-box mobile-w-100 mobile-padding-reset mobile-p-bottom-8">
              <img src="/img/allproj-cookie.png" className="w-100" />
              <h3>
                Interactive Info Viz{" "}
                <i className="material-icons icon-smaller">exit_to_app</i>
              </h3>
              What makes a perfect cookie?
            </div>
          </a>
          <a
            href="/Li_Thomas_Wish_Design_Challenge.pdf"
            target="_blank"
            className="a-no-line"
            rel="noopener noreferrer"
          >
            <div className="col-4-left d-inline mobile-w-100 mobile-padding-reset mobile-p-bottom-8">
              <img src="/img/allproj-wish.png" className="w-100" />
              <h3>
                Wish Design Challenge{" "}
                <i className="material-icons icon-smaller">exit_to_app</i>
              </h3>
              Redesigning Wish's "Order History" feature.
            </div>
          </a>
          <a
            href="/succulent-flex"
            target="_blank"
            rel="noopener noreferrer"
            className="a-no-line"
          >
            <div className="col-4-center d-inline mobile-w-100 mobile-padding-reset mobile-p-bottom-8">
              <img src="/img/allproj-succulent.png" className="w-100" />
              <h3>
                React Succulent Generator{" "}
                <i className="material-icons icon-smaller">exit_to_app</i>
              </h3>
              A goofy exercise in React.
            </div>
          </a>
          <div className="col-4-right d-inline text-links all-projects-writing mobile-w-100">
            <h3>Writing</h3>
            <hr />
            <a
              href="https://medium.com/@thomastli/my-best-ever-interview-question-response-was-about-an-orange-d077973a0d2c"
              target="_blank"
              rel="noopener noreferrer"
            >
              “My Best-Ever Interview Question Response Was About An Orange.”
              Medium. <i className="material-icons icon-smaller">exit_to_app</i>
            </a>
            <br /> <br />
            <a
              href="https://medium.com/@thomastli/staying-afloat-in-a-sea-of-incoming-78bb60a9124d?source=---------3------------------"
              target="_blank"
              rel="noopener noreferrer"
            >
              “Staying Afloat in a Sea of “Incoming.” <br />
              Medium. <i className="material-icons icon-smaller">exit_to_app</i>
            </a>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Homepage;
