import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';

import {
  Route,
  BrowserRouter as Router,
  Link
} from 'react-router-dom'

class NavComponent extends Component {
  constructor(props) {
    super(props)

  const burgerToggle = function() {
    let navLinks = document.querySelector('.narrowLinks');
    if (navLinks.style.display === 'block') {
      navLinks.style.display = 'none';
    } else {
      navLinks.style.display = 'block';
    }
  }
}

  render() {
    return (
      <nav>
        <div className="navWide">
          <div className="wideDiv">
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
          </div>
        </div>
        <div className="navNarrow">
          <i className="fa fa-bars fa-2x"></i>
            <div className="narrowLinks">
              <a href="#" onClick={this.burgerToggle}>Link 1</a>
              <a href="#" onClick={this.burgerToggle}>Link 2</a>
              <a href="#" onClick={this.burgerToggle}>Link 3</a>
            </div>
        </div>
      </nav>
    );
  }
}

export default NavComponent;
