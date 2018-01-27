import "./App.css";
import React, { Component } from "react";
import injectTapEventPlugin from "react-tap-event-plugin";
import HomeScreen from "./HomeScreen.js";
import LoginScreen from "./LoginScreen.js";
import Register from "./Register";
import StartPage from "./StartPage";
import { Route, BrowserRouter as Router } from "react-router-dom";
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
      <Router>
        <div>
          <HomeScreen />
          <div className="App">
            <Route exact path="/" component={LoginScreen} />
            <Route path="/signin" component={LoginScreen} />
            <Route path="/register" component={Register} />
            <Route path="/startPage" component={StartPage} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;

// ReactDOM.render( <App />, document.getElementById('root'));
