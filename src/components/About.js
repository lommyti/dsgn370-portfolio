import React, { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";

class About extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className="m-l-r-12-5 about">
        <div className="left-bar-gradient top-0 left-0" />
        <div className="sidebar mobile-w-100 col-3 top-0 m-top-3">
          <Header selected="1" />
          <img
            src="/img/self-about.png"
            draggable="false"
            className="col-9 d-inline m-top-15 mobile-w-100"
            alt=""
          />
        </div>
        <div className="m-top-20">
          <div className="about-text col-8 m-l-37-5 d-inline text-links mobile-w-100 mobile-m-l-r-0">
            <h1>Hey there!</h1>
            <p>
              I’m Tommy, a digital product designer. I love to question
              assumptions, hone into clear user-centric problems, and explore
              new interactions to build elegant solutions.
            </p>
            <p>
              Right now, I’m focused on wrapping up my degree in communication
              studies, computer science, and design @
              <a href="https://www.northwestern.edu/">Northwestern</a>{" "}
              (graduating June 2020). Throughout college, I’ve had the chance to
              see how tech gets built at a variety of different companies,
              too--most recently by shipping products for Groupon Goods @
              <a
                href="https://groupon.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Groupon
              </a>
              , and designing effective documentation @
              <a
                href="https://braintreepayments.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Braintree
              </a>
              . This winter, I’ll be @
              <a
                href="https://wish.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Wish
              </a>{" "}
              specifically honing my product design skills on the Marketplace
              team!
            </p>
            <p>
              I like to work on the end-to-end process of building effective UX
              flows, and I have a tendency to approach life outside of work with
              a similar mindset: it shouldn’t be surprising that I approach
              tasks like Spotify playlist creation and organization with a
              hyper-critical eye. This goes in both directions, so if I refer
              to:
              <ul>
                <li>
                  {" "}
                  <a
                    href="https://sumocitrus.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Sumo citrus
                  </a>
                </li>
                <li>
                  {" "}
                  <a
                    href="https://www.youtube.com/watch?v=CAmiNMGIFWA"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    This clip from BoJack Horseman
                  </a>
                </li>
                <li>Geometric pie crust designs</li>
                <li>Something I saw on TikTok</li>
                <li>
                  The movie <em>Love, Simon</em>
                </li>
              </ul>
              as sources of inspiration at work, take it as me thinking deeply
              about the problem at hand.
            </p>
            <p className="m-top-5">
              Looking for an entry-level product/UX designer available
              Summer/Fall 2020, complete with a growth mindset and just enough
              sense to not ask, “should designers code?”{" "}
              <a
                className="m-left-1"
                href="mailto:thomastli@u.northwestern.edu"
              >
                Let’s chat{" "}
                <span role="img" aria-label="mailbox">
                  📬
                </span>
              </a>
            </p>
            <Footer />
          </div>
        </div>
      </div>
    );
  }
}

export default About;
