import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import FloatingYellowBar from "./FYB";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      FYBselected: this.props.selected
    };
  }

  render() {
    return (
      <nav className="navbar">
        <a
          href="/"
          onMouseOver={() => this.setState({ FYBselected: "0" })}
          onMouseOut={() => this.setState({ FYBselected: this.props.selected })}
        >
          Home
        </a>
        <Link
          to="/about"
          onMouseOver={() => this.setState({ FYBselected: "1" })}
          onMouseOut={() => this.setState({ FYBselected: this.props.selected })}
        >
          About
        </Link>
        <a
          href="/Li_Thomas_Resume_2020.pdf"
          target="_blank"
          onMouseOver={() => this.setState({ FYBselected: "2" })}
          onMouseOut={() => this.setState({ FYBselected: this.props.selected })}
        >
          Resume
        </a>
        <FloatingYellowBar
          original={this.props.selected}
          selected={this.state.FYBselected}
        />
      </nav>
    );
  }
}

export default Header;
