import React from "react";
import { Button, Card, Modal, Image, Icon } from "semantic-ui-react";
import PlantCard from "./PlantCard";
import styles from "./styles";

function PlantModal(props) {

  console.log(props.plant)

  return (
    <Modal size="mini" trigger={<Button>More Details</Button>}>
      <Modal.Header style={styles.modalHeader}>
        {props.plant.name}
      </Modal.Header>
        <Modal.Content>
          <Image size="medium" src={props.plant.image} alt={props.plant.name} style={styles.modalImage}/>
          <p>{props.plant.description}</p>
          <p><strong>Indoor Start Date:</strong> {props.plant.indoor_start}</p>
          <p><strong>Outdoor Start Date:</strong> {props.plant.outdoor_start}</p>
          <p><strong>Guidelines:</strong> {props.plant.guidelines}</p>
          <Button style={styles.modalButton} floated="right" circular color="olive"> + </Button>
        </Modal.Content>
    </Modal>
    )
}



export default PlantModal
