import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

class Airbnb extends Component {
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
            <div className="yellowbar-case yellowbar-case-selected"></div>
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
              src="/img/allproj-knightlab-hq.png"
              className="w-100 m-h-300 mobile-m-top-55"
            />
            <h1>How might we eliminate tedious, paper-based fact-checking?</h1>
            <div className="top-fold">
              <div className="col-8 d-inline v-align-top p-right-8 b-s-border-box  mobile-w-100">
                <p>
                  Fact-Check Flow was a project supported by the{" "}
                  <a href="https://knightlab.northwestern.edu/" target="_blank">
                    Northwestern University Knight Lab
                  </a>
                  , an interdisciplinary initiative in journalism and
                  technology.{" "}
                </p>
                <p>
                  As part of the Knight Lab's spring 2018 cohort, we designed
                  and developed a Google Docs plugin that allows writers and
                  fact-checkers in small, digital newsrooms to go through the
                  process of fact-checking without having to leave the platform
                  that they use to write stories.
                </p>
              </div>
              <div className="col-4 d-inline v-align-top top-right b-s-border-box p-right-3  mobile-w-100">
                <div className="top-fold-list">
                  <strong>Skills:</strong>
                  <ul>
                    <li>Wireframing (Figma)</li>
                    <li>Front-End Development</li>
                  </ul>
                </div>
                <p>
                  <strong>Timeline:</strong>
                  <br />
                  10 weeks
                </p>
                <p>
                  <strong>Teammates:</strong>
                  <br />
                  <a
                    href="https://www.linkedin.com/in/rafahali/"
                    target="_blank"
                  >
                    Rafah Ali
                  </a>
                  ,{" "}
                  <a
                    href="https://www.linkedin.com/in/laura-barrera-91a9b4122/"
                    target="_blank"
                  >
                    Laura Barrera
                  </a>
                  ,{" "}
                  <a
                    href="https://www.linkedin.com/in/madeline-kaufman-2018/"
                    target="_blank"
                  >
                    Madeline Kaufman
                  </a>
                  ,{" "}
                  <a
                    href="https://www.linkedin.com/in/madelinelefevour/"
                    target="_blank"
                  >
                    Madeline Lefevour
                  </a>
                </p>
              </div>
              <hr />
            </div>
            <h2>PROJECT OVERVIEW</h2>
            <h3>
              Though most of writing for a publication has moved online,
              journalistic fact-checking for stories / articles is still done on
              paper.
            </h3>
            <p>
              Fact-checking in its current state is a crueling process with
              steps that have to be performed meticulously, including:
              <ul>
                <li>
                  {" "}
                  Circling any word or phrase that could be spelled wrong or
                  factually incorrect.
                </li>
                <li>
                  {" "}
                  Crossing out each letter in the flagged words as they're
                  checked against a credible source.
                </li>
                <li>
                  Tracking down any in-person sources to confirm that they’ve
                  been quoted correctly.
                </li>
              </ul>
            </p>
            <p>
              This becomes a huge pain when fact-checkers have to receive
              digital copies of stories,{" "}
              <strong>
                print them and fact-check them, then summarize changes again
                digitally
              </strong>{" "}
              to send back to the writer/editor. We sought to make this process
              painless by maintaining this level of rigor, but{" "}
              <strong>eliminating the need for paper copies</strong> and related
              maintenance of each version of a story.
            </p>
            <h2>MY ROLE</h2>
            <p>
              I was responsible for turning our insights and desired features
              into testable prototypes at various fidelities; this entailed
              sketching and prototyping in Figma.
            </p>
            <img src="/img/journeymap.png" className="w-100 m-top-15" />
            <p className="m-top-0 m-bottom-5 t-align-center">
              <em>A journey map made by one of my teammates, Rafah</em>
            </p>
            <h2>DESIGN PROCESS</h2>
            <p>
              One of our teammates was a journalism student who was able to
              interview professionals in her network and verify that our
              identified steps were the ones that are usually taken in
              journalistic fact-checking (thanks,{" "}
              <a
                href="https://www.linkedin.com/in/madeline-kaufman-2018/"
                target="_blank"
              >
                Maddy!
              </a>
              ).
            </p>
            <p>
              After settling required tasks, we quickly decided that the ideal
              platform for our digitalized fact-checking was Google Docs; it’s
              highly accessible and used more commonly by smaller newsrooms,
              while larger publications often write their stories in
              custom-built content management systems (CMSs). To start testing
              our assumptions, we created a basic prototype on paper that mapped
              the flow for our core tasks, and tested them with two users.
            </p>{" "}
            <h2> Testing our paper prototype</h2>
            <img
              src="/img/fcf2.jpg"
              width="100%"
              className="p-top-0 mobile-w-100 mobile-m-l-0"
            />
            <p className="m-0 m-bottom-5">
              <em>
                Upon opening the plugin and highlighting a piece of text, the
                user would be given the option to add it as a fact to check
                later.
              </em>
            </p>
            <img
              src="/img/fcf25.jpg"
              width="100%"
              className="p-top-2 mobile-w-100 mobile-m-l-0"
            />
            <p className="m-0 m-bottom-5">
              <em>
                The text would then be highlighted with a colored background to
                indicate that it's been added to the list of facts. Users can
                then filter this list of facts with the pictured catagories.
              </em>
            </p>
            <img
              src="/img/fcf3.jpg"
              width="100%"
              className="p-top-2 mobile-w-100 mobile-m-l-0"
            />
            <p className="m-0 m-bottom-5">
              <em>
                Clicking on an unconfirmed fact would open a popup allowing
                useres to confirm it's been checked and attribute a source.
              </em>
            </p>{" "}
            <p>
              In testing our paper prototype with 2 journalism students who had
              learned to fact-check with the conventional method, we obtained
              two key insights from our first prototype: <br />
              <ul>
                <li>
                  <strong>
                    Consider functionality for the end-to-end flow of
                    fact-checking.
                  </strong>{" "}
                  <br />
                  Both users were confused by the function and purpose of the
                  buttons that were on the sidebar, and separately expressed
                  their desire to be able to see all of the facts at once. We
                  combined these observations as an opportunity to think
                  differently about our "core display" and to acknowledge the
                  set order of the steps in the procedure of fact-checking.
                </li>
                <br />
                <li>
                  <strong>The filter system had to be reworked.</strong> <br />
                  One user felt that the filters seemed too specific to be
                  useful, while the other simply felt that there were too many.
                  The categories that we had came out of our inquiries into the
                  most common types of facts that fact-checkers deal with, but
                  these tests inspired us to think twice about them.
                </li>
              </ul>
            </p>
            <h2>FINAL PROTOTYPE</h2>
            <p>
              After receving feedback on our initial ideas, we moved to
              higher-fidelity prototyping on Figma and mapped out a more
              thorough user flow to better align with our users' understanding
              of fact-checking.
            </p>
            <h4>Intended user flow</h4>
            <img
              src="/img/userflow.png"
              width="100%"
              className="mobile-w-100 mobile-m-l-0"
            />
            <img
              src="/img/fcffinal1.png"
              width="100%"
              className="p-top-0 mobile-w-100 mobile-m-l-0"
            />
            <p className="m-0 m-bottom-5">
              <em>
                The initial screen when the plugin is first opened from the
                Add-ons menu.
              </em>
            </p>
            <img
              src="/img/fcffinal2.png"
              width="100%"
              className="p-top-2 mobile-w-100 mobile-m-l-0"
            />
            <p className="m-0 m-bottom-5">
              <em>
                When facts have been selected by the user, they're highlighted
                in yellow and appear in the fact list on the sidebar. The
                question mark indicates that they haven't been checked.
              </em>
            </p>
            <img
              src="/img/fcffinal3.png"
              width="100%"
              className="p-top-2 mobile-w-100 mobile-m-l-0"
            />
            <p className="m-0 m-bottom-5">
              <em>
                When a fact is expanded in the sidebar, the type of source it
                came from can be selected.
              </em>
            </p>
            <img
              src="/img/fcffinalcrop4.png"
              width="100%"
              className="p-top-2 mobile-w-100 mobile-m-l-0"
            />
            <p className="m-0 m-bottom-5">
              <em>
                This interface varies slightly depending on whether the source
                is a person, since they will need to be contacted later.
              </em>
            </p>
            <img
              src="/img/fcffinalcrop5.png"
              width="100%"
              className="p-top-2 mobile-w-100 mobile-m-l-0"
            />
            <h2>What I Learned</h2>
            <p>
              This project taught me a lot about{" "}
              <strong>the meaning of an MVP</strong>. <br />
              <br />
              Our initial ideas for this project were complex and far-reaching;
              we daydreamed about fully-automated systems that could identify
              facts for you, find sources by searching Google for you, and store
              all of this information in an organization-wide knowledge base so
              it would only need to be checked once. Though we ran into a few
              roadblocks and impossible UI implementations along the way, even
              after paring down to just the core necessary tasks, we were still
              able to deliver value through workarounds and maintain sight of a
              product that could compete with the current solution.
            </p>
            <hr />
            <div className="text-links">
              <div className="col-6 d-inline mobile-w-100">
                <Link to="/braintree" className="see-all">
                  <i className="material-icons icon-smaller icon-flipped">
                    double_arrow
                  </i>
                  PREVIOUS: BRAINTREE
                </Link>
              </div>
              <div className="col-6 d-inline t-align-right mobile-w-100 mobile-t-align-left">
                <Link to="/visualdesign" className="see-all">
                  NEXT: VISUAL DESIGN
                  <i className="material-icons icon-smaller">double_arrow</i>
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

export default Airbnb;
