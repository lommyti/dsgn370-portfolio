import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class FYB extends Component {
  constructor(props) {
    super(props);
    this.state = {
      adjustedSelection: this.props.selected
    };
  }

  renderSwitch() {
    var param = "";
    if (this.props.selected === "2" && this.props.original === "0") {
      param = "3";
    } else if (this.props.selected === "0" && this.props.original === "0") {
      param = "4";
    } else {
      param = this.props.selected;
    }
    switch (param) {
      case "0":
        return "fyb";
      case "1":
        return "fyb fyb-about";
      case "2":
        return "fyb fyb-resume";
      case "3":
        return "fyb fyb-resume fyb-long-transition";
      case "4":
        return "fyb fyb-long-transition";
      case "5":
        return "fyb fyb-invis";
      default:
        return "";
    }
  }

  render() {
    return <div className={this.renderSwitch()} />;
  }
}

export default FYB;
