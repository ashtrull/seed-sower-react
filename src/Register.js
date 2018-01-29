import React, { Component } from "react";
import { Button, Form, Grid, Segment, Menu, Image } from "semantic-ui-react";
import styles from "./styles";
import LoginScreen from "./LoginScreen";
import Login from "./Login";
import axios from "axios";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
      confirm_password: "",
      zip: ""
    };
  }

  handleSignInClick(event) {
    var loginscreen = [];
    loginscreen.push(<LoginScreen parentContext={this.props.appContext} />);
    this.props.appContext.setState({
      loginPage: loginscreen,
      uploadScreen: []
    });
  }

  handleClick(event) {
    console.log(this.state);
    if (this.state.password !== this.state.confirm_password) {
      alert("Passwords do not match");
    } else {
      var apiBaseUrl = "http://localhost:4741/";
      //To be done:check for empty values before hitting submit
      var self = this;
      axios({
        method: "post",
        url: apiBaseUrl + "sign-up",
        header: "Content-Type: application/json",
        data: {
          credentials: {
            email: this.state.email,
            password: this.state.password,
            password_confirmation: this.state.confirm_password,
            name: this.state.name,
            zip: this.state.zip
          }
        }
      })
        .then(function(response) {
          console.log(response);
          if (response.status === 200) {
            console.log("registration successful");
            var loginscreen = [];
            loginscreen.push(<Login parentContext={this} />);
            self.props.parentContext.setState({
              loginscreen: loginscreen
            });
          }
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  }

  render() {
    return (
      <div>
        <div>
        <Menu color="yellow" fixed inverted large style={styles.menu}>
          <Image
            src="https://i.imgur.com/SL438yH.png"
            style={styles.menuImg}
          />
          <h1 style={styles.menuHeader}>Seed Sower</h1>
          <Menu.Menu position="right">
            <Menu.Item
              name="about"
              onClick={this.handleItemClick}
            >
              About
            </Menu.Item>

            <Menu.Item
              name="help"
              onClick={this.handleItemClick}
            >
              Help
            </Menu.Item>
          </Menu.Menu>
        </Menu>
          <br />
          <Form>
            <Grid centered columns={3}>
              <Grid.Column>
              <Form.Input
                required
                placeholder="Enter your Name"
                label="Name"
                onChange={(event, newValue) =>
                  this.setState({ name: newValue.value })
                }
              />
                <Form.Input
                  required
                  placeholder="Enter your Email"
                  label="Email"
                  onChange={(event, newValue) =>
                    this.setState({ email: newValue.value })
                  }
                />
                <br />
                <Form.Input
                  required
                  centered
                  type="password"
                  placeholder="Enter your Password"
                  label="Password"
                  style={{ "text-align": "center" }}
                  onChange={(event, newValue) =>
                    this.setState({ password: newValue.value })
                  }
                />
                <Form.Input
                  required
                  centered
                  type="password"
                  placeholder="Confirm Password"
                  label="Confirm Password"
                  style={{ "text-align": "center" }}
                  onChange={(event, newValue) =>
                    this.setState({ confirm_password: newValue.value })
                  }
                />
                <Form.Input
                  required
                  centered
                  placeholder="Enter your zip code"
                  label="Zipcode"
                  style={{ "text-align": "center" }}
                  onChange={(event, newValue) =>
                    this.setState({ zip: newValue.value })
                  }
                />
              </Grid.Column>
            </Grid>
            <br />
            <Button primary onClick={event => this.handleClick(event)}>
              Submit
            </Button>
          </Form>
          <br />
          <p>Already have an account?</p>
          <Button primary onClick={event => this.handleSignInClick(event)}>
            Sign In
          </Button>
        </div>
      </div>
    );
  }
}

export default Register;
