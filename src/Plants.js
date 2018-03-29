import React from "react";
import { Grid } from "semantic-ui-react";
import { Card, Icon, Image } from "semantic-ui-react";
import PlantCard from "./PlantCard";
import styles from "./styles";

export const Plants = props => {
  const renderPlant = props => {
    return props.plants.map(plant => {
      return (
        <Grid.Column>
        <PlantCard plant={plant} />
        </Grid.Column>
      )
    });
  };
  return (
    <div>
      <Grid columns={3} style={styles.plantGrid}>{renderPlant(props)}</Grid>
    </div>
  );
};

export default Plants;
