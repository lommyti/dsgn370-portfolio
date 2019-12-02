import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import About from "./components/About";
import Airbnb from "./components/Airbnb";

import AllProjects from "./components/AllProjects";
import Braintree from "./components/Braintree";
import KnightLab from "./components/KnightLab";

import VisualDesign from "./components/VisualDesign";

import "./App.css";
import "./positioning.css";
import "./mobile.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/airbnb">
              <Airbnb />
            </Route>
            <Route path="/allprojects">
              <AllProjects />
            </Route>
            <Route path="/braintree">
              <Braintree />
            </Route>
            <Route path="/knightlab">
              <KnightLab />
            </Route>
            <Route path="/visualdesign">
              <VisualDesign />
            </Route>

            <Route path="/">
              <Homepage />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
