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
              How might we build trust between Airbnb hosts and travelers with
              pets?
            </h1>
            <div className="top-fold">
              <div className="col-8 d-inline v-align-top mobile-w-100 p-right-8 b-s-border-box">
                <p>
                  Airbnb hosts have to be ready for a wide range of guests, but
                  a lack of standards in accepting{" "}
                  <strong>travelers with pets</strong> makes it difficult to
                  justify potential damages / extra cleaning. This process is
                  considerably smoother on other homeshare platforms, so we
                  focused on satisfying hosts' diverse needs and keeping them on
                  Airbnb.
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
                  , our team designed new solutions, shared our work with teams
                  at Airbnb, and saw interest from{" "}
                  <strong>65% of surveyed hosts</strong>.
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
              Airbnb encourages guests to travel with pets, but doesn't support
              hosts in accommodating them.
            </h3>
            <p>
              It takes a certain degree of trust for Airbnb hosts to accept
              requests from guests, who are sometimes stepping into their
              personal homes. This required trust level, however, spikes when
              guests bring their pets along with them; pets often require extra
              cleaning afterwards, and damage from pets isn't covered currently
              by the platform's insurance policies. With these problems in mind,
              we created a new{" "}
              <strong>process for accepting pets + charging pet fees</strong> to
              increase hosts' satisfaction and increase the likelihood of{" "}
              <strong>hosts accepting guests with pets</strong>.
            </p>
            <h2>MY ROLE</h2>
            <p>
              I created and distributed a <strong>survey</strong> about hosting
              guests with pets and the potential for pet fees to 23 Airbnb hosts
              over various platforms, designed <strong>visuals</strong> for
              presentation materials, and created initial UI mockups for pet
              payments and pet profiles in <strong>Figma</strong>.
            </p>
            <h2>DESIGN PROCESS</h2>
            <h3>
              We rooted our understanding of hosts by gathering information
              across forums, surveys, and interviews.
            </h3>
            <p>
              A chance encounter with the "Pets Allowed" filter in the Airbnb
              search filters first piqued our team's interest in pet travel. The
              more casual feeling of booking an Airbnb as opposed to a hotel
              lends itself nicely to travelers looking to bring their pets with
              them, and the "Pets Allowed" filter makes it easy to see exactly
              which places they can choose from. But when we searched the Airbnb
              Community Forum to learn more, it became clear that{" "}
              <strong>hosts were the ones most adversely affected</strong> by
              the current process.
            </p>
            <img
              src="/img/numbers.png"
              width="100%"
              className="m-top-2 mobile-w-100 mobile-m-l-0"
            />
            <p>
              We found overwhelming evidence that hosts were not happy with the
              current handling of pets. To better understand their struggles, we
              sent out a survey across forums and Facebook groups intended
              specifically for Airbnb hosts. In follow-up interviews, three
              hosts recounted their current problems and processes surrounding
              travelers with pets to us.
            </p>
            <h2>Lack of Incentive</h2>
            <p>
              {" "}
              Through these interviews, we found that pet fees and related
              charges were considered{" "}
              <strong>standard in the hospitality industry</strong>. In
              comparison, on Airbnb there's currently no easy way to use these
              features, or to even know if a guest is planning to bring a pet.
              This made it clear to us that hosts lacked any incentives beyond
              empathy for allowing pets into their listings -- in fact,{" "}
              <strong>9/23</strong> of the hosts we worked with were not aware
              that damage done by pets isn't covered by Airbnb's insurance
              policy, and didn't know that they were actually taking on extra
              risk.
            </p>
            <h2>Current Workarounds</h2>
            <p>
              We also found that some more savvy hosts were currently using the
              Airbnb Resolution Center to charge pet fees and make up for this
              lack of incentive. However, to do so they were going through the
              same steps that they would to report damage costs and other
              retroactive fees. This is a{" "}
              <strong>slow, laborious process</strong> that required
              intervention from Airbnb reps and cans only be done{" "}
              <strong>after a stay is over</strong>.
            </p>
            <img src="/img/petquotes2.png" className="w-100" />
            <p>
              This less-than-ideal solution, used to compensate extra cleaning
              fees or protect against damage, was frustrating enough to have
              hosts question{" "}
              <strong>why they were on the platform at all.</strong>
            </p>
            <h2>Variety of Attitudes</h2>
            <p className="m-0">
              We also learned that Airbnb hosts vary significantly in their
              involvement and in how they value their space: from speaking to
              live-in hosts who love pets and empathize with the frustrations of
              pet travel, to hosts who make their living on Airbnb and are
              already thinking about the extra cleaning time before the next
              guest. In the design process we initially assumed most cases would
              involve a single pet staying for a few days, but{" "}
              <strong>
                accounts from hosts of multiple pets coming for 3+ months{" "}
              </strong>
              showed us the need for a flexible solution that could work for
              different kinds of listings. This led us to believe that a simple
              flat fee wouldn't be a sufficient solution.
            </p>
            <p className="m-0 m-bottom-5">
              <img
                src="/img/edgecases.jpg"
                width="100%"
                className="p-top-0 mobile-w-100 mobile-m-l-0"
              />
              <br />
              By considering the benefits of different kinds of payments, we
              concluded that{" "}
              <strong>
                a nightly fee dependent on the number of pets, charged at the
                time of booking
              </strong>{" "}
              was the best solution to incentivize hosts. This solution provides
              the greatest amount of flexibility and allows them to confidently
              prepare for allowing pets into their listing.
            </p>
            <img
              src="/img/nightlyfee.jpg"
              width="100%"
              className="p-top-0 mobile-w-100 mobile-m-l-0"
            />
            <p className="m-0 m-bottom-10">
              This was a crucial part of our solution, but in reflecting on our
              goal of supporting hosts, we felt like the process remained{" "}
              <strong>impersonal</strong>; it also still lacked a clear touch
              point at which a guest was expected to{" "}
              <strong>share that they were bringing a pet </strong> with them.
            </p>{" "}
            <strong>
              <h2>Creating a Pet Profile</h2>
            </strong>
            <h3>
              To make the experience of accepting a guest with pets a more clear
              and empathetic process, we built out initial mockups for a pet
              profile.{" "}
            </h3>
            <p className="m-0 m-bottom-5">
              This was a visionary part of the project and an opportunity for
              guests to share info about their pets / to give hosts a visual
              reference. It gave us a chance to plaster pet pictures all over
              our presentations, too!
            </p>
            <img
              src="/img/airbnb-animal.png"
              width="15%"
              className="d-inline padding-bottom-5"
            />
            <p className="padding-left-5 col-8 d-inline padding-bottom-5">
              <em>
                Our unofficial mascot for the project, featuring a not-so-subtle
                reference to the Airbnb Belo shape
              </em>
            </p>
            <img
              src="/img/airbnbflow.jpg"
              width="100%"
              className="p-top-0 mobile-w-100 mobile-m-l-0"
            />
            <p className="m-top-0 p-top-0 p-bottom-5">
              <em>
                Overview of the touch points where pets would now be mentioned.
                Guests would add their pets when reviewing product details
                (PDP). hosts would see this information in inquiries, the
                message board, and in viewing the guest's profile.
              </em>
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
            <p>
              This solution was developed with the needs of Airbnb hosts in
              mind, so our success metric for the project was contingent on host
              buy-in.
              <h3 class="padding-top-2">
                <strong>
                  {" "}
                  15/23 of hosts that we worked with would be interested in
                  using this feature, 3 of whom don't even accept pets right
                  now.
                </strong>{" "}
              </h3>
              Since this project was done as part of the Northwestern University
              Bay Area Immersion Program, we presented to the Experience
              Research team at the end of 10 weeks and passed on our final
              presentation to relevant teams across Airbnb.
              <br /> <br />
              If given the chance to continue this project, I would also want to
              ensure that secondary metrics like guest happiness / booking rates
              and overall revenue were flat or positively affected, and to
              ensure that pet fees wouldn't contribute to{" "}
              <em>
                that feeling when you look at an Airbnb, see how different the
                price after fees is, and immediately close it.{" "}
              </em>
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
