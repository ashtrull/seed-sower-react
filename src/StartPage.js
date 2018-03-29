import React, { Component } from "react";
import { Button, Dropdown, Segment, Menu, Image } from "semantic-ui-react";
import axios from "axios";
import { Link } from "react-router-dom";
import Plants from "./Plants";
import Garden from "./Garden";
import { EMPTY_COMPONENT } from "./component_helpers";
import styles from "./styles";

class StartPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      garden: <Garden />,
      plants: EMPTY_COMPONENT
    };
  }

  handlePlantClick(event) {
    var apiBaseUrl = "http://localhost:4741/";
    var self = this;
    console.log(self.props.token)
    const token = self.props.credentials.token
    axios({
        method:'get',
        url: apiBaseUrl + 'plants',
        header: "Authorization: Token token=" + token
      })
      .then(function(response) {
        console.log(response);
        const plantData = response.data.plants
        if (response.status === 200) {
          self.setState({
            garden: EMPTY_COMPONENT,
            plants: <Plants plants={plantData} />
          });
        }

      })

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
      <Menu color="yellow" fixed inverted large style={styles.menu}>
        <Image src="https://i.imgur.com/SL438yH.png" style={styles.menuImg}/>
        <h1 style={styles.menuHeader}>Seed Sower</h1>
        <Menu.Menu position="right">
          <Menu.Item
            name="about"
            onClick={this.handleItemClick}
          >
            About
          </Menu.Item>
          <Dropdown item text='Account'>
            <Dropdown.Menu>
              <Dropdown.Item>Settings</Dropdown.Item>
              <Dropdown.Item>Logout</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Menu.Menu>
      </Menu>
        <br />
        <Button.Group>
          <Button style={styles.switchButton} onClick={event => this.handleGardenClick(event)}>
            My Garden
          </Button>
          <Button style={styles.switchButton} onClick={event => this.handlePlantClick(event)}>
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
