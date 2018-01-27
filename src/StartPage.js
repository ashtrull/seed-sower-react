import React, { Component } from "react";
import { Button, Form, Grid, Menu, Segment } from "semantic-ui-react";
import Login from "./Login";
import axios from "axios";
import { Link } from "react-router-dom";
import Plants from "./Plants";
import { EMPTY_COMPONENT } from "./component_helpers";
import styles from "./styles";

const plants = <Plants />

class StartPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      plants: EMPTY_COMPONENT
    };
  }

  handleClick(event) {
    this.setState({
      plants: <Plants />
    });
  }

  render() {
    return (
      <div>
        <Segment textAlign="center" color="green" inverted>
          Welcome to Seed Sower!
        </Segment>
        <br />
        <Button.Group style={styles.button}>
          <Button>My Garden</Button>
          <Button onClick={event => this.handleClick(event)}>All Plants</Button>
        </Button.Group>
        {this.state.plants}
      </div>
    );
  }
}

export default StartPage;
