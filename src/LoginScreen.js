import React, { Component } from "react";
import Login from "./Login";
import { Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
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

    const context = this.props.parentContext
    loginscreen.push(
      <Login parentContext={this} appContext={context} />
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
            <Link to="/register">
              <Button style={styles.button} primary>
                Register
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Loginscreen;
