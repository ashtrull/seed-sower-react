import React from "react";
import { Grid } from "semantic-ui-react";
import { Card, Icon, Image } from "semantic-ui-react";

function Plants() {
  return (
    <div>
      <Grid columns={4}>
        <Grid.Column>
          <Card centered>
            <Image src="https://i.imgur.com/dLmSqIa.jpg" alt="tomatoes" />
            <Card.Content>
              <Card.Header>Tomatoes</Card.Header>
              <Card.Meta>
                <span className="date">
                  Tomatoes are basically the best plant and if you dont love
                  them, I dont want to know you.
                </span>
              </Card.Meta>
              <Card.Description>Indoor Start Date: 4/6/2018</Card.Description>
              <Card.Description>Outdoor Start Date: 6/6/2018</Card.Description>
              <Card.Description>
                Planting Guidelines: Space plants 18 inches apart, keep leaves
                dry, water at the base.
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <a>
                <Icon name="user" />
                Companion Plants: Basil
              </a>
            </Card.Content>
          </Card>
        </Grid.Column>
        <Grid.Column>
          <Card centered>
            <Image src="https://i.imgur.com/yoMWH5Q.jpg" alt="squash" />
            <Card.Content>
              <Card.Header>Summer Squash</Card.Header>
              <Card.Meta>
                <span className="date">
                  Tomatoes are basically the best plant and if you dont love
                  them, I dont want to know you.
                </span>
              </Card.Meta>
              <Card.Description>Indoor Start Date: 4/6/2018</Card.Description>
              <Card.Description>Outdoor Start Date: 6/6/2018</Card.Description>
              <Card.Description>
                Planting Guidelines: Space plants 18 inches apart, keep leaves
                dry, water at the base.
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <a>
                <Icon name="user" />
                Companion Plants: Basil
              </a>
            </Card.Content>
          </Card>
        </Grid.Column>
        <Grid.Column>
          <Card centered>
            <Image src="https://i.imgur.com/LjprDey.jpg" alt="Basil" />
            <Card.Content>
              <Card.Header>Basil</Card.Header>
              <Card.Meta>
                <span className="date">
                  Tomatoes are basically the best plant and if you dont love
                  them, I dont want to know you.
                </span>
              </Card.Meta>
              <Card.Description>Indoor Start Date: 4/6/2018</Card.Description>
              <Card.Description>Outdoor Start Date: 6/6/2018</Card.Description>
              <Card.Description>
                Planting Guidelines: Space plants 18 inches apart, keep leaves
                dry, water at the base.
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <a>
                <Icon name="user" />
                Companion Plants: Basil
              </a>
            </Card.Content>
          </Card>
        </Grid.Column>
      </Grid>
    </div>
  );
}

export default Plants;
