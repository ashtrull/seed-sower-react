import React, { Component } from "react";
import { EMPTY_COMPONENT } from "./component_helpers";
import PlantModal from "./PlantModal";
import styles from "./styles"
import { Grid } from "semantic-ui-react";
import { Card, Icon, Image } from "semantic-ui-react";

class PlantCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Card centered style={styles.plantCard}>
        <Image src={this.props.plant.img} alt={this.props.plant.name} style={styles.plantCardImg}/>
        <Card.Content>
          <Card.Header>{this.props.plant.name}</Card.Header>
          <Card.Meta>
            <span className="date">{this.props.plant.description}</span>
          </Card.Meta>
        </Card.Content>
        <PlantModal plant={this.props.plant} />
      </Card>
    );
  }
}

export default PlantCard;
