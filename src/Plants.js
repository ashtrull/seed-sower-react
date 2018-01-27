import React, { Component } from "react";
import { Button, Form, Grid, Menu, Segment } from "semantic-ui-react";
import Login from "./Login";
import axios from "axios";
import { Link } from "react-router-dom";
import { Card, Icon, Image } from "semantic-ui-react";

function Plants() {
  return (
    <div>
      <Grid columns={4}>
        <Grid.Column>
          <Card centered>
            <Image src="https://i.imgur.com/KLkUb4k.jpg" alt="tomatoes" />
            <Card.Content>
              <Card.Header>Tomatoes</Card.Header>
              <Card.Meta>
                <span className="date">
                  Tomatoes are basically the best plant and if you don't love
                  them, I don't want to know you.
                </span>
              </Card.Meta>
              <Card.Description>Indoor Start Date: 4/6/2018</Card.Description>
              <Card.Description>Outdoor Start Date: 6/6/2018</Card.Description>
              <Card.Description>
                Planting Guidelines: Space plants 18" apart, keep leaves dry,
                water at the base.
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
            <Image src="https://i.imgur.com/KLkUb4k.jpg" alt="tomatoes" />
            <Card.Content>
              <Card.Header>Tomatoes</Card.Header>
              <Card.Meta>
                <span className="date">
                  Tomatoes are basically the best plant and if you don't love
                  them, I don't want to know you.
                </span>
              </Card.Meta>
              <Card.Description>Indoor Start Date: 4/6/2018</Card.Description>
              <Card.Description>Outdoor Start Date: 6/6/2018</Card.Description>
              <Card.Description>
                Planting Guidelines: Space plants 18" apart, keep leaves dry,
                water at the base.
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
            <Image src="https://i.imgur.com/KLkUb4k.jpg" alt="tomatoes" />
            <Card.Content>
              <Card.Header>Tomatoes</Card.Header>
              <Card.Meta>
                <span className="date">
                  Tomatoes are basically the best plant and if you don't love
                  them, I don't want to know you.
                </span>
              </Card.Meta>
              <Card.Description>Indoor Start Date: 4/6/2018</Card.Description>
              <Card.Description>Outdoor Start Date: 6/6/2018</Card.Description>
              <Card.Description>
                Planting Guidelines: Space plants 18" apart, keep leaves dry,
                water at the base.
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
            <Image src="https://i.imgur.com/KLkUb4k.jpg" alt="tomatoes" />
            <Card.Content>
              <Card.Header>Tomatoes</Card.Header>
              <Card.Meta>
                <span className="date">
                  Tomatoes are basically the best plant and if you don't love
                  them, I don't want to know you.
                </span>
              </Card.Meta>
              <Card.Description>Indoor Start Date: 4/6/2018</Card.Description>
              <Card.Description>Outdoor Start Date: 6/6/2018</Card.Description>
              <Card.Description>
                Planting Guidelines: Space plants 18" apart, keep leaves dry,
                water at the base.
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
