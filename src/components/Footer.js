import React, { Component } from "react";

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <footer className="footer text-links w-100">
        <hr />
        <p className="d-inline col-6 footer-social">
          <a href="mailto:thomastli@u.northwestern.edu">Email</a>
          <a href="https://twitter.com/thmstli">Twitter</a>
          <a href="https://linkedin.com/in/thomastli">LinkedIn</a>
          <a href="https://medium.com/@thomastli/">Medium</a>
        </p>
        <p className="d-inline col-6">
          Built with{" "}
          <i className="material-icons icon-small accent">favorite</i> & React
          in 2019.
        </p>
      </footer>
    );
  }
}

export default Footer;
