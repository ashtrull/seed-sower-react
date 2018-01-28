import React from "react";
import { Grid } from "semantic-ui-react";
import { Card, Icon, Image } from "semantic-ui-react";

function PlantCard(props) {
  return (
    <Grid.Column>
      <Card centered>
        <Image src={props.plant.image} alt={props.plant.name} />
        <Card.Content>
          <Card.Header>{props.plant.name}</Card.Header>
          <Card.Meta>
            <span className="date">{props.plant.description}</span>
          </Card.Meta>
          <Card.Description>{props.plant.indoor_start}</Card.Description>
          <Card.Description>{props.plant.outdoor_start}</Card.Description>
          <Card.Description>{props.plant.guidelines}</Card.Description>
        </Card.Content>
        <Card.Content extra>
          <a>
            <Icon name="user" />
            Companion Plants:
          </a>
        </Card.Content>
      </Card>
    </Grid.Column>
  );
}

export default PlantCard;
