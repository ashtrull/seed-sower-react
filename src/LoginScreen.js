import React, { Component } from "react";
import Login from "./Login";
import Register from "./Register";
import { Button } from "semantic-ui-react";
import styles from "./styles";

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

  handleRegisterClick(event) {
    var registerScreen = [];
    registerScreen.push(
      <Register parentContext={this} appContext={this.props.parentContext} />
    );
    this.props.parentContext.setState({
      loginPage: [],
      uploadScreen: registerScreen
    });
  }

  render() {
    return (
      <div className="loginscreen">
        {this.state.loginscreen}
        {this.state.loginmessage}
        <div>
          <Button
            style={styles.button}
            primary
            onClick={event => this.handleRegisterClick(event)}
          >
            Register
          </Button>
        </div>
      </div>
    );
  }
}

export default Loginscreen;
