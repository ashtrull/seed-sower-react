import React, { Component } from "react";
import { Button, Form, Grid, Menu, Segment } from "semantic-ui-react";
import Login from "./Login";
import axios from "axios";
import { Link } from "react-router-dom";
import { Table } from "semantic-ui-react";

function Garden() {
  return (
    <Table basic='very'>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Name</Table.HeaderCell>
        <Table.HeaderCell>Status</Table.HeaderCell>
        <Table.HeaderCell>Notes</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      <Table.Row>
        <Table.Cell>John</Table.Cell>
        <Table.Cell>Approved</Table.Cell>
        <Table.Cell>None</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Jamie</Table.Cell>
        <Table.Cell>Approved</Table.Cell>
        <Table.Cell>Requires call</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Jill</Table.Cell>
        <Table.Cell>Denied</Table.Cell>
        <Table.Cell>None</Table.Cell>
      </Table.Row>
    </Table.Body>
  </Table>
  )
}

export default Garden;
