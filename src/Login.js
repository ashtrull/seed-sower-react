import React, { Component } from "react";
import axios from "axios";
import { Button, Form, Grid, Menu, Segment } from "semantic-ui-react";
import styles from "./styles";
import { Link } from "react-router-dom";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }

  handleClick(event) {
    var apiBaseUrl = "http://localhost:4000/api/";
    var self = this;
    var payload = {
      email: this.state.username,
      password: this.state.password
    };
    axios
      .post(apiBaseUrl + "login", payload)
      .then(function(response) {
        console.log(response);
        if (response.data.code === 200) {
          console.log("Login successfull");
          // var uploadScreen = [];
          // uploadScreen.push(<UploadScreen appContext={self.props.appContext}/>)
          self.props.appContext.setState({ loginPage: [] });
        } else if (response.data.code === 204) {
          console.log("Username password do not match");
          alert("username password do not match");
        } else {
          console.log("Username does not exist");
          alert("Username does not exist");
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
          <Segment textAlign="center" color="green" inverted>
            Welcome to Seed Sower!
          </Segment>
          <Form>
            <Grid centered columns={3}>
              <Grid.Column>
                <Form.Input
                  placeholder="Enter your Username"
                  label="Username"
                  onChange={(event, newValue) =>
                    this.setState({ username: newValue })
                  }
                />
                <br />
                <Form.Input
                  centered
                  type="password"
                  placeholder="Enter your Password"
                  label="Password"
                  style={{ "text-align": "center" }}
                  onChange={(event, newValue) =>
                    this.setState({ password: newValue })
                  }
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
          <Link to="/startPage">
            <Button style={styles.button} primary>
              Look Over Here
            </Button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Login;
