import React from "react";
import { Grid } from "semantic-ui-react";
import { Card, Icon, Image } from "semantic-ui-react";
import PlantCard from "./PlantCard";

export const Plants = props => {
  const renderPlant = props => {
    return props.plants.map(plant => {
      console.log(plant);
      return <PlantCard plant={plant} />;
    });
  };
  return (
    <div>
      <Grid columns={4}>{renderPlant(props)}</Grid>
    </div>
  );
};

export default Plants;
