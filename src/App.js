import "./App.css";
import React, { Component } from "react";
import injectTapEventPlugin from "react-tap-event-plugin";
import HomeScreen from "./HomeScreen.js";
import LoginScreen from "./LoginScreen.js";
import { BrowserRouter as Router } from "react-router-dom";
// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loginPage: [],
      uploadScreen: []
    };
  }
  componentWillMount() {
    console.log(this);
    var loginPage = [];
    loginPage.push(<LoginScreen parentContext={this} />);
    this.setState({
      loginPage: loginPage
    });
  }
  render() {
    return (
      <Router>
        <div>
          <HomeScreen />
          <div className="App">
            {this.state.loginPage}
            {this.state.uploadScreen}
          </div>
        </div>
      </Router>
    );
  }
}

export default App;

// ReactDOM.render( <App />, document.getElementById('root'));
