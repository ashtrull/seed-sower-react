import React, { Component } from "react";
import { Button, Form, Grid, Menu, Segment } from "semantic-ui-react";
import Login from "./Login";
import axios from "axios";
import { Link } from "react-router-dom";
import { Table, Image } from "semantic-ui-react";
import styles from "./styles";

function Garden() {
  return (
    <Table basic='very' style={styles.gardenTable}>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell></Table.HeaderCell>
        <Table.HeaderCell>Name</Table.HeaderCell>
        <Table.HeaderCell>Indoor Start</Table.HeaderCell>
        <Table.HeaderCell>Started?</Table.HeaderCell>
        <Table.HeaderCell>Outdoor Start</Table.HeaderCell>
        <Table.HeaderCell>Planted?</Table.HeaderCell>
        <Table.HeaderCell>Notes</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      <Table.Row>
        <Table.Cell><Image src="https://i.imgur.com/dLmSqIa.jpg" height="100px" alt="tomatoes" /></Table.Cell>
        <Table.Cell>Tomato</Table.Cell>
        <Table.Cell>2018-02-03</Table.Cell>
        <Table.Cell>Yes</Table.Cell>
        <Table.Cell>2018-04-30</Table.Cell>
        <Table.Cell>No</Table.Cell>
        <Table.Cell>Going to grow Ruby Gold and German Johnson this year</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell><Image src="https://i.imgur.com/yoMWH5Q.jpg" height="100px" alt="squash" /></Table.Cell>
        <Table.Cell>Summer Squash</Table.Cell>
        <Table.Cell>2018-02-03</Table.Cell>
        <Table.Cell>Yes</Table.Cell>
        <Table.Cell>2018-04-30</Table.Cell>
        <Table.Cell>No</Table.Cell>
        <Table.Cell>Going to grow Ruby Gold and German Johnson this year</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell><Image src="https://i.imgur.com/LjprDey.jpg" height="100px" alt="Basil" /></Table.Cell>
        <Table.Cell>Basil</Table.Cell>
        <Table.Cell>2018-02-03</Table.Cell>
        <Table.Cell>Yes</Table.Cell>
        <Table.Cell>2018-04-30</Table.Cell>
        <Table.Cell>No</Table.Cell>
        <Table.Cell>Going to grow Ruby Gold and German Johnson this year</Table.Cell>
      </Table.Row>
    </Table.Body>
  </Table>
  )
}

export default Garden;
