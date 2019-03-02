import React, { Component } from 'react';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import muiTheme from './LoginScreen.js'
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import muiThemeable from 'material-ui/styles/muiThemeable';
import Colors from 'material-ui/styles/colors';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import axios from 'axios';
class Login extends Component {
constructor(props){
  super(props);
  this.state={
  username:'',
  password:''
  }
 }

 handleClick(event){
 var apiBaseUrl = "http://localhost:4000/api/";
 var self = this;
 var payload={
 "email":this.state.username,
 "password":this.state.password
 }
 axios.post(apiBaseUrl+'login', payload)
 .then(function (response) {
 console.log(response);
 if(response.data.code == 200){
 console.log("Login successfull");
 var uploadScreen=[];
 // uploadScreen.push(<UploadScreen appContext={self.props.appContext}/>)
 self.props.appContext.setState({loginPage:[]})
 }
 else if(response.data.code == 204){
 console.log("Username password do not match");
 alert("username password do not match")
 }
 else{
 console.log("Username does not exist");
 alert("Username does not exist");
 }
 })
 .catch(function (error) {
 console.log(error);
 });
 }

render() {
    return (
      <div>
        <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
          <div>
          <AppBar
             title="Welcome to Seed Sower"
           />
           <TextField
             hintText="Enter your Username"
             floatingLabelText="Username"
             onChange = {(event,newValue) => this.setState({username:newValue})}
             />
           <br/>
             <TextField
               type="password"
               hintText="Enter your Password"
               floatingLabelText="Password"
               onChange = {(event,newValue) => this.setState({password:newValue})}
               />
             <br/>
             <RaisedButton label="Submit" primary={true} style={style} onClick={(event) => this.handleClick(event)}/>
         </div>
         </MuiThemeProvider>
      </div>
    );
  }
}
const style = {
 margin: 15,
};
export default Login;
