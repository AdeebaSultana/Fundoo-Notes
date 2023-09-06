import React, { Component } from 'react'
import './Login.css'
import { Link } from "react-router-dom";

import { IconButton, Snackbar, TextField } from '@mui/material'
import { Button } from '@mui/material'
import { withRouter } from '../../Utils/withRouter.js';
import { logInService } from '../../Services/UserService';
//import { logInService } from '../../Services/UserService';
class Login extends Component {
  constructor(props) {
    super(props);
    this.inputHandler = this.inputHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);

    this.state = {

      username: "",
      password: "",
      userText: "",
      passwordText: "",
      SnackbarOpen: false,
      SnackbarMessage: "",

    }
  }


  // SnackbarClose() {
  //   this.setState(
  //     {
  //       SnackbarOpen: false
  //     }
    //)
  //}
  inputHandler(event) {
    let id = event.target.id;
    if (id === "username") {
      let username = event.target.value;
      
      let usernamespan = document.getElementById('spanUsername');
      let regexUsername = new RegExp('[a-z 0-9]+');
      //let regexpassword =   new RegExp('^[A-Z]+[a-z]*');
      if (!regexUsername.test(username)) {
        usernamespan.style.display = "block"
        this.setState(
          {
            usernameText: "username is incorrect"
          }
        )
      }
      else {
        usernamespan.style.display = "none"
        
        this.setState(
          {
            username: username,
            usernameText: ""
          }
        )
        console.log(
          this.state.username
        )
      }

    }

    else if (id == "logIn_password") {
      let password = event.target.value;
      let regexpassword = new RegExp('[0-9]+');
      if (!regexpassword.test(password)) {
        this.setState(
          {
            passwordText: "password is incorrect"
          }
        )
      }
      else {
        this.setState(
          {
            password: event.target.value,
            passwordText: ""
          }
        )
      }

    }


  }


  submitHandler = async () => {
    let logInData = {
      username : this.state.username,
      password : this.state.password

    }
    await logInService(logInData).then((res) => {
      let messaage = "";
      if (res.status == 200) {
        messaage = "login sucessfull"
        this.props.navigate('/Home')
      }

      console.log('res', res);
      // this.setState({
      //   SnackbarOpen: true,
      //   SnackbarMessage: messaage
      // })
    })
      .catch((data) => {
        let errorMessage = "";
        if (data.response.status == 401)
          errorMessage = "invalid cradentials !";
        else
          errorMessage = "sign in failed";
        // this.setState({
        //   SnackbarOpen: true,
        //   SnackbarMessage: errorMessage
        // })
      });
  }



  render() {
    return (
      <div className='center'>
        <h1>Login</h1>
        <form method="post" >
          <div className="txt_field">
            <input id="username" type="text" onChange={this.inputHandler} required />
            <span></span>
            <label>Username</label>
          </div>
          <div id="spanUsername">
          <span><h5>enter valid username</h5></span>
          </div>
          
          <div className="txt_field">
            <input type="password" id="logIn_password" onChange={this.inputHandler} required />
            <span></span>
            <label>Password</label>
          </div>
          <div className="pass">
          <Link to="/ForgetPassword">Forgot Password</Link>
          </div>
          <input type="button" value="Login" onClick={() =>this.submitHandler()} />
            <div className="signup_link">
              Not a member?
              <Link to="/SignUp">Signup</Link>
            </div>
        </form>
        <Snackbar
          autoHideDuration={3000}
          anchorOrigin={{vertical : 'botton',horizontal :"left"}} 
          open={this.state.SnackbarOpen} 
          message={<span id="message-id">{this.state.SnackbarMessage}</span>}
          action={[
            <IconButton key="close" color="inherit" onClick={() => this.SnackbarClose()} aria-label='Close' > X </IconButton>

          ]
          }
        />
      </div>
    )
  }
}
export default withRouter(Login);

