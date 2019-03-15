import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import Home from "./components/home/home";
import Login from "./components/login/login";

class RouterCom extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Redirect to="/login" />
        </Switch>
      </Router>
    );
  }
}
export default RouterCom;
