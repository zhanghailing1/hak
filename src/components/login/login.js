import React, { Component } from "react";
import axios from "../../http";
import {
  Flex,
  WhiteSpace,
  NavBar,
  Icon,
  List,
  InputItem,
  Toast,
  Button
} from "antd-mobile";
import "./login.css";
import "antd-mobile/dist/antd-mobile.css";
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      uname: "",
      pwd: ""
    };
  }
  changValue = (k, v) => {
    // console.log(k, v);
    this.setState({
      [k]: v
    });
  };
  handleLogin = async () => {
    // console.log(this.props);
    const { history } = this.props;
    const body = this.state;
    // console.log(this.state);
    const res = await axios.post(`users/login`, body);
    // console.log(res);
    const { meta, data } = res.data;
    if (meta.status === 200) {
      history.push("/");
    } else {
      Toast.fail("Login failed !!!", 1);
    }
  };
  render() {
    return (
      <Flex direction="column" justify="center">
        {/* 导航 */}
        <Flex.Item>
          <NavBar mode="dark">NavBar</NavBar>
        </Flex.Item>
        <WhiteSpace size="lg" />
        {/* 表单 */}
        <Flex.Item>
          <List>
            <InputItem
              clear
              value={this.state.uname}
              onChange={v => {
                this.changValue("uname", v);
              }}
            >
              姓名
            </InputItem>
            <InputItem
              clear
              value={this.state.pwd}
              onChange={v => {
                this.changValue("pwd", v);
              }}
            >
              密码
            </InputItem>
            <Button type="primary" size="small" onClick={this.handleLogin}>
              登录
            </Button>
          </List>
        </Flex.Item>
      </Flex>
    );
  }
}
export default Login;
