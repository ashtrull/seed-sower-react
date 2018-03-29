import React, { Component } from "react";
import axios from "axios";
import { Button, Form, Grid, Image, Menu, Segment } from "semantic-ui-react";
import styles from "./styles";
import { Link } from "react-router-dom";
import StartPage from "./StartPage";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      token: "",
      id: ""
    };

    // this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    var apiBaseUrl = "http://localhost:4741/";
    var self = this;
    axios({
      method: "post",
      url: apiBaseUrl + "sign-in",
      header: "Content-Type: application/json",
      data: {
        credentials: {
          email: this.state.email.value,
          password: this.state.password.value
        }
      }
    })
      .then(function(response) {
        console.log(response);
        if (response.status === 200) {
          console.log("Login successfull");
          self.setState({
            token: response.data.user.token,
            id: response.data.user.id
          });
          console.log(self);
          var appScreen = [];
          appScreen.push(<StartPage credentials={self.state} />);
          self.props.appContext.setState({
            loginPage: [],
            uploadScreen: appScreen
          });
        } else if (response.status === 204) {
          console.log("Email/password combination does not exist");
          alert("Email/password combination does not exist");
        } else {
          console.log("No account associated with email");
          alert("No account associated with email");
        }
      })
      .catch(function(error) {
        console.log(error);
      });
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
          <Form>
            <Grid centered columns={3}>
              <Grid.Column>
                <Form.Input
                  type="text"
                  placeholder="Enter your Email"
                  label="Email"
                  onChange={(event, newValue) => {
                    console.log(this.state.email.value);
                    return this.setState({ email: newValue });
                  }}
                />
                <br />
                <Form.Input
                  centered
                  type="password"
                  placeholder="Enter your Password"
                  label="Password"
                  style={{ "text-align": "center" }}
                  onChange={(event, newValue) => {
                    console.log(this.state.password);
                    return this.setState({ password: newValue });
                  }}
                />
              </Grid.Column>
            </Grid>
            <br />
            <Button
              style={styles.button}
              primary
              onClick={event => this.handleClick(event)}
            >
              Submit
            </Button>
          </Form>
          <Link to="/startPage" />
        </div>
      </div>
    );
  }
}

export default Login;
