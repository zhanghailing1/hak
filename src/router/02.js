import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// BrowserRouter as -> Router ->所有路由的代码嘴歪参那个的容器
// Route填充位，-》配置路由-》path和component-》显示匹配到的组件
// Link-》导航连接，点击，url发生变化
class RouterComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/user">User</Link>
            </li>
          </ul>
          <hr />
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/user" component={User} />
        </div>
      </Router>
    );
  }
}
const About = () => {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
};
const Home = () => {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
};
const One = () => {
  return (
    <div>
      <h2>One</h2>
    </div>
  );
};
const Two = () => {
  return (
    <div>
      <h2>Two</h2>
    </div>
  );
};
const Three = () => {
  return (
    <div>
      <h2>Three</h2>
    </div>
  );
};
const User = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/user/one">user1</Link>
        </li>
        <li>
          <Link to="/user/two">user2</Link>
        </li>
        <li>
          <Link to="/user/three">user3</Link>
        </li>
      </ul>
      <hr />
      <Route exact path="/user/one" component={One} />
      <Route exact path="/user/two" component={One} />
      <Route exact path="/user/three" component={One} />
    </div>
  );
};
export default RouterComponent;
