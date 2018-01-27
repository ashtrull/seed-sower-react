import "./App.css";
import React, { Component } from "react";
import ReactDOM from "react-dom";
import injectTapEventPlugin from "react-tap-event-plugin";
import HomeScreen from "./HomeScreen.js";
import LoginScreen from "./LoginScreen.js";
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
    var loginPage = [];
    loginPage.push(<LoginScreen parentContext={this} />);
    this.setState({
      loginPage: loginPage
    });
  }
  render() {
    return (
      <div>
        <HomeScreen />
        <div className="App">
          {this.state.loginPage}
          {this.state.uploadScreen}
        </div>
      </div>
    );
  }
}
const style = {
  margin: 15
};

export default App;

// ReactDOM.render( <App />, document.getElementById('root'));
