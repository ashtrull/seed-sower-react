import React, { Component } from "react";
import Login from "./Login";
import Register from "./Register";
import { Button } from "semantic-ui-react";

class Loginscreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      loginscreen: [],
      loginmessage: "",
      buttonLabel: "Register",
      isLogin: true
    };
  }

  componentWillMount() {
    var loginscreen = [];
    loginscreen.push(
      <Login parentContext={this} appContext={this.props.parentContext} />
    );
    var loginmessage = "New to Seed Sower? Register now!";
    this.setState({
      loginscreen: loginscreen,
      loginmessage: loginmessage
    });
  }
  render() {
    return (
      <div className="loginscreen">
        {this.state.loginscreen}
        <div>
          {this.state.loginmessage}
          <div>
            <Button primary>Register</Button>
          </div>
        </div>
      </div>
    );
  }
}
const style = {
  margin: 15
};
export default Loginscreen;
