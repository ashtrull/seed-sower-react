import React, { Component } from "react";
import { Button, Segment } from "semantic-ui-react";
import axios from "axios";
import { Link } from "react-router-dom";
import Plants from "./Plants";
import Garden from "./Garden";
import { EMPTY_COMPONENT } from "./component_helpers";
import styles from "./styles";

const plantData = [
  {
    name: "Tomato",
    description:
      "Tomatoes are basically the best plant and if you dont love them, I dont want to know you.",
    indoor_start: "2018-02-03",
    outdoor_start: "2018-04-03",
    guidelines:
      "Planting Guidelines: Space plants 18 inches apart, keep leaves dry, water at the base.",
    image: "https://i.imgur.com/dLmSqIa.jpg"
  },
  {
    name: "Summer Squash",
    description:
      "Tomatoes are basically the best plant and if you dont love them, I dont want to know you.",
    indoor_start: "2018-02-03",
    outdoor_start: "2018-04-03",
    guidelines:
      "Planting Guidelines: Space plants 18 inches apart, keep leaves dry, water at the base.",
    image: "https://i.imgur.com/yoMWH5Q.jpg"
  },
  {
    name: "Basil",
    description:
      "Tomatoes are basically the best plant and if you dont love them, I dont want to know you.",
    indoor_start: "2018-02-03",
    outdoor_start: "2018-04-03",
    guidelines:
      "Planting Guidelines: Space plants 18 inches apart, keep leaves dry, water at the base.",
    image: "https://i.imgur.com/LjprDey.jpg"
  }
];

class StartPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      garden: <Garden />,
      plants: EMPTY_COMPONENT
    };
  }

  handlePlantClick(event) {
    console.log(plantData);
    this.setState({
      garden: EMPTY_COMPONENT,
      plants: <Plants plants={plantData} />
    });
  }

  handleGardenClick(event) {
    this.setState({
      garden: <Garden />,
      plants: EMPTY_COMPONENT
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
          <Button onClick={event => this.handleGardenClick(event)}>
            My Garden
          </Button>
          <Button onClick={event => this.handlePlantClick(event)}>
            All Plants
          </Button>
        </Button.Group>
        {this.state.plants}
        {this.state.garden}
      </div>
    );
  }
}

export default StartPage;
