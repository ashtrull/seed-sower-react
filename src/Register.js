import React, { Component } from 'react';
import { Button, Form, Grid, Menu, Segment} from 'semantic-ui-react'
import Login from './Login'
import axios from 'axios';

class Register extends Component {
  constructor(props){
    super(props);
    this.state={
      first_name:'',
      last_name:'',
      email:'',
      password:''
    }
}
    handleClick(event){
    var apiBaseUrl = "http://localhost:4000/api/";
    console.log("values",this.state.first_name,this.state.last_name,this.state.email,this.state.password);
    //To be done:check for empty values before hitting submit
    var self = this;
    var payload={
    "first_name": this.state.first_name,
    "last_name":this.state.last_name,
    "email":this.state.email,
    "password":this.state.password
    }
    axios.post(apiBaseUrl+'/register', payload)
   .then(function (response) {
     console.log(response);
     if(response.data.code == 200){
      //  console.log("registration successfull");
       var loginscreen=[];
       loginscreen.push(<Login parentContext={this}/>);
       var loginmessage = "Not Registered yet.Go to registration";
       self.props.parentContext.setState({loginscreen:loginscreen,
       loginmessage:loginmessage,
       buttonLabel:"Register",
       isLogin:true
        });
     }
   })
   .catch(function (error) {
     console.log(error);
   });
  }

  render() {
    return (
      <div>
          <div>
          <Segment >
            <Menu
            color="green"
            inverted
            centered
            >
            <h3>Welcome to Seed Sower!</h3>
            </Menu>
            </Segment>
           <br/>
           <Form>
           <Grid centered columns={3}>
           <Grid.Column>
           <Form.Input
             placeholder="Enter your Username"
             label="Username"
             onChange={(event, newValue) =>
               this.setState({ username: newValue })
             }
           />
           <br />
           <Form.Input
             centered
             type="password"
             placeholder="Enter your Password"
             label="Password"
             style={{"text-align": "center"}}
             onChange={(event, newValue) =>
               this.setState({ password: newValue })
             }
           />
           <Form.Input
             centered
             type="password"
             placeholder="Confirm Password"
             label="Password"
             style={{"text-align": "center"}}
             onChange={(event, newValue) =>
               this.setState({ password: newValue })
             }
           />
           </Grid.Column>
           </Grid>
           <br />
           <Button
             primary
             onClick={event => this.handleClick(event)}
             >
             Submit
           </Button>
           </Form>

          </div>
      </div>
    );
  }
}
const style = {
  margin: 15,
};
export default Register;
