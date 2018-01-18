import './App.css';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import HomeScreen from './HomeScreen.js'
import LoginScreen from './LoginScreen.js'
// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      loginPage:[],
      uploadScreen:[]
    }
  }
  componentWillMount(){
    var loginPage =[];
    loginPage.push(<LoginScreen parentContext={this}/>);
    this.setState({
                  loginPage:loginPage
                    })
  }
  render() {
    return (
      <MuiThemeProvider>
      <HomeScreen />
      <div className="App">
        {this.state.loginPage}
        {this.state.uploadScreen}
      </div>
      </MuiThemeProvider>
    );
  }
}
const style = {
  margin: 15,
};

export default App;

// ReactDOM.render( <App />, document.getElementById('root'));
