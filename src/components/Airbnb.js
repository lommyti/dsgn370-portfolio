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
            <div className="yellowbar-case yellowbar-case-selected "></div>
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
          <div className="col-12 d-inline padding-right-1 padding-bottom-2 b-s-border-box case-body">
            <img
              src="/img/allproj-airbnb.png"
              className="w-100 m-h-300 mobile-m-top-55"
            />
            <h1>
              How might we support Airbnb hosts in trusting guests traveling
              with pets?
            </h1>
            <div className="top-fold">
              <div className="col-8 d-inline v-align-top mobile-w-100 p-right-8 b-s-border-box">
                <p>
                  Airbnb hosts have to be ready for a wide range of guests, but
                  a lack of support for accepting{" "}
                  <strong>travelers with pets</strong> makes it difficult to
                  justify the potential damages / extra cleaning, especially
                  when other homeshare platform options handle this process more
                  smoothly.
                </p>
                <p>
                  {" "}
                  As part of the{" "}
                  <a
                    href="https://design.northwestern.edu/programs/bay-area-immersion/"
                    target="_blank"
                  >
                    NU Bay Area Immersion Program
                  </a>
                  , our team designed new solutions for handling guests with
                  pets, shared our work with teams at Airbnb, and saw interest
                  from <strong>65% of surveyed hosts</strong>.
                </p>
              </div>
              <div className="col-4 d-inline v-align-top top-right mobile-w-100">
                <div className="top-fold-list">
                  <strong>Skills:</strong>
                  <ul>
                    <li>Wireframing (Figma)</li>
                    <li>User Research</li>
                    <li>Survey Design</li>
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
                    href="https://www.linkedin.com/in/erica-cantor-273a12147/"
                    target="_blank"
                  >
                    Erica Cantor
                  </a>
                  <br />
                  <a
                    href="https://www.linkedin.com/in/idreeskamal/"
                    target="_blank"
                  >
                    Idrees Kamal
                  </a>
                </p>
              </div>
              <hr />
            </div>
            <h2>PROJECT OVERVIEW</h2>
            <h3>
              Airbnb encourages guests to travel with their pets, but doesn't
              support hosts in accommodating them.
            </h3>
            <p>
              It takes a certain degree of trust for Airbnb hosts to let guests
              in their listings, which are sometimes their personal homes, and
              the required trust level spikes when guests bring their pets along
              with them. Airbnb endorses this behavior by providing a "Pets
              Allowed" filter in the search navigation for guests; however,
              damage from pets isn't covered currently by the platform's
              insurance policies, and it lacks industry-standard features like
              pet fees that could put hosts at ease. With this in mind, we
              created a new{" "}
              <strong>process for accepting pets + charging pet fees</strong> to
              increase hosts' satisfaction and increase the likelihood of{" "}
              <strong>hosts accepting guests with pets</strong>.
            </p>
            <h2>MY ROLE</h2>
            <p>
              I created and distributed a survey about hosting guests with pets
              and the potential for pet fees to 23 Airbnb hosts over various
              platforms, designed visuals for presentation materials, and
              created initial UI mockups for pet payments and pet profiles in
              Figma.
            </p>
            <h2>DESIGN PROCESS</h2>
            <p>
              A chance encounter with the "Pets Allowed" filter in the Airbnb
              search filters first piqued our team's interest in the space of
              pet travel, but a quick search of the Airbnb Community Forum made
              it clear that{" "}
              <strong>hosts were the ones most adversely affected</strong> by
              the current process.
            </p>
            <img
              src="/img/numbers.png"
              width="100%"
              className="m-top-2 mobile-w-100 mobile-m-l-0"
            />
            <p>
              To better understand hosts' overwhelming request for a pet fee, we
              sent out a survey by across forums and Facebook groups intended
              specifically for Airbnb hosts. In follow-up phone interviews,
              three hosts recounted for us their current manual processes used
              when accepting travelers with pets. We found that pet fees and
              related charges were considered{" "}
              <strong>standard in the hospitality industry</strong>, and that
              many hosts were using the Airbnb Resolution Center to collect and
              charge pet fees already. However, this method was a{" "}
              <strong>slow, laborious process</strong> that required approval
              from Airbnb reps and could only be done{" "}
              <strong>after the booking was over</strong>.
            </p>
            <img src="/img/petquotes2.png" className="w-100" />
            <p>
              Though this wasn't an ideal solution, they continued to use it as
              a precaution against potential pet damages and extra cleaning fees
              that could ensue from having a larger pet, like a cat or dog,
              around.
            </p>
            <p className="m-0">
              Our research also showed that Airbnb hosts vary significantly in
              their involvement and in the ways they value their space: from
              live-in hosts who love pets and empathize with the frustrations of
              pet travel, to hosts who make their living on Airbnb and are
              already thinking about the extra cleaning time before the next
              guest. We often thought about cases where a single pet would stay
              for a few days, but{" "}
              <strong>
                accounts from hosts of multiple pets coming for 3+ months{" "}
              </strong>
              and the differences in attitude across hosts we talked to showed
              us the need for a flexible solution for all kinds of listings.{" "}
            </p>
            <p className="m-0 m-bottom-5">
              <img
                src="/img/edgecases.jpg"
                width="100%"
                className="p-top-0 mobile-w-100 mobile-m-l-0"
              />
              <br />
              This led us to believe that{" "}
              <strong>
                a nightly fee dependent on the number of pets made the most
                sense.{" "}
              </strong>
            </p>
            <img
              src="/img/nightlyfee.jpg"
              width="100%"
              className="p-top-0 mobile-w-100 mobile-m-l-0"
            />
            <p className="m-0 m-bottom-10">
              This pet fee system was exciting, but in reflecting on our goal of
              supporting hosts, we felt like the process remained{" "}
              <strong>impersonal</strong>, and did not have a clear touch point
              at which a guest was expected to{" "}
              <strong>share that they were bringing a pet </strong> with them.
            </p>{" "}
            <strong>
              <h2>Creating a Pet Profile</h2>
            </strong>
            <p className="m-0 m-bottom-5">
              To make the experience of accepting a guest with pets a more clear
              and empathetic process, we built out initial mockups for a pet
              profile. This was a visionary part of the project and an
              opportunity for guests to share info about their pets / to give
              hosts a visual reference. It gave us a chance to plaster dog
              pictures everywhere on our presentations, too!
            </p>
            <img
              src="/img/petprofile1.jpg"
              width="100%"
              className="p-top-0 mobile-w-100 mobile-m-l-0"
            />
            <img
              src="/img/petprofile2.jpg"
              width="100%"
              className="p-top-0 mobile-w-100 mobile-m-l-0"
            />
            <img
              src="/img/petprofile3.jpg"
              width="100%"
              className="p-top-0 mobile-w-100 mobile-m-l-0"
            />
            <h2>Results</h2>
            <img src="/img/airbnbflow.jpg" width="100%" />
            <p>
              This solution was developed with the needs of Airbnb hosts in
              mind, so our success metric for the project was contingent on host
              buy-in. By the end of the project we heard that{" "}
              <strong>
                {" "}
                15/23 of hosts that we worked with would be interested in using
                this feature, 3 of whom don't even accept pets right now.
              </strong>
              <br /> <br />
              Since this project was done as part of the Northwestern University
              Bay Area Immersion Program, we presented to the Experience
              Research team at the end of 10 weeks and passed on our final
              presentation to relevant teams across Airbnb.
            </p>{" "}
          </div>

          <hr />
          <div className="text-links t-align-right m-top-3">
            <Link to="/braintree" className="see-all">
              NEXT CASE STUDY: BRAINTREE
              <i className="material-icons icon-smaller">double_arrow</i>
            </Link>
          </div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default Airbnb;
