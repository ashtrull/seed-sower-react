import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';

import NavComponent from './NavComponent.js';
import TabMenu from './TabMenu.js';

import {
  Route,
  BrowserRouter as Router,
  Link
} from 'react-router-dom'


class HomeScreen extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Router>
      <div>
        <div>
        </div>
      </div>
      </Router>
    );
  }
}

export default HomeScreen;
