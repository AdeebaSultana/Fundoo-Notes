import { IconButton, Snackbar, TextField } from '@mui/material'
import { Button } from '@mui/material'
import { color } from '@mui/system'
import React, { Component } from 'react'
import { bull, UserService } from '../../Services/UserService'
import '../signup/signUp.css'

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';


 class SignUp extends Component {
  constructor(props){
    super(props);
    this.inputHandler = this.inputHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);


    this.state ={
      firstName : "",
      lastName: "",
      username:"",
      password:"",
        firstNameText : "",
        usernameText : "",
       passwordText:"",
       conformPasswordText:"",
       lastNameText :"",
       SnackbarOpen : false,
       SnackbarMessage : "",

    }

    
}


SnackbarClose(){
  this.setState(
    {
      SnackbarOpen : false
    }
  )
}
inputHandler(event){
    let id =  event.target.id;
    if(id === "firstName"){
      let first =  event.target.value;

      let regexFirst =   new RegExp('^[A-Z]+[a-z]*');
      //let regexpassword =   new RegExp('^[A-Z]+[a-z]*');
      if(!regexFirst.test(first)){
        this.setState(
          {
            firstNameText : "first name is incorrect"
          }
      ) 
      }
      else{
        this.setState(
            {
              firstName :event.target.value,
              firstNameText : ""
            }
        )
        console.log(
          this.state.firstName
        )
          }

    }

    else if(id==="lastName"){
      let last =  event.target.value;

      let regexLast =   new RegExp('^[A-Z]+[a-z]*');
      //let regexpassword =   new RegExp('^[A-Z]+[a-z]*');
      if(!regexLast.test(last)){
        this.setState(
          {
            lastNameText : "last name is incorrect"
          }
      ) 
      }
      else{
        this.setState(
            {
              lastName :event.target.value,
              lastNameText : ""
            }
        )
        console.log(event.target.value);
          }

    }

    else if(id==="email"){
      let email =  event.target.value;

      let regexEamil =   new RegExp('^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$');
      //let regexpassword =   new RegExp('^[A-Z]+[a-z]*');
      if(!regexEamil.test(email)){
        this.setState(
          {
            usernameText : "username is incorrect"
          }
      ) 
      
      
      }
      else{
        this.setState(
          {
            email : email
          }
        )
        console.log("Is the email" + this.state.email)
      }
    }
   else if(id==="username"){
      let username =  event.target.value;

      let regexUsername =   new RegExp('^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$');
      //let regexpassword =   new RegExp('^[A-Z]+[a-z]*');
      if(!regexUsername.test(username)){
        console.log("username is incorrect");
        this.setState(
          {
            usernameText : "username is incorrect"
          }
      ) 
      }
      else{
        this.setState(
            {
              username :event.target.value,
              usernameText : ""
            }
        )
        console.log("username" + this.state.username)
          }

    }
    else if(id==="txtpassword"){
      let password =  event.target.value;
      let regexpassword =   new RegExp('[A-Z a-z 0-9]*');
      if(!regexpassword.test(password)){
        this.setState(
          {
            passwordText : "password is incorrect"
          }
      ) 
      }
      else{
        this.setState(
            {
                password :event.target.value,
                passwordText : ""
            }
        )
          }

    }

}

 

 submitHandler = async ()=>{
  let data={
    firstName:this.state.firstName,
    lastName:this.state.lastName,
    email:"adizaan8892@gmail.com",
    username:this.state.username,
    password:this.state.password
  }
   await UserService(data).then((res)=>{
      console.log('res',res);
      this.setState({
        SnackbarOpen : true,
        SnackbarMessage : res.data.data.message
      })
   })
   .catch((error) =>{
    console.log(error);
    this.setState({
      SnackbarOpen : true,
      SnackbarMessage : "sign up failed"
    })
  });
}


  render() {

    return (
      <div className="maincontainer">
        
        <div className="sub-container">
        <form className='form'>
          <div className="header">
          <button className="cart">go to card</button>
            <h1>fundoo</h1>
          </div>
          <div className="title">
            <h5>Create your Fundoo Account</h5>
          </div>
            <div className="first_last">
              <TextField id="firstName"  variant="standard"  onChange={this.inputHandler} placeholder='First name'  helperText ={this.state.firstNameText}  required/>
              <span id="textBoxSpace"></span>
              <TextField id ="lastName"placeholder='Last name' variant="standard"   onChange={this.inputHandler}  helperText ={this.state.lastNameText}/ >
            </div>
            <div className="emai_id">
              <TextField  id ="username" placeholder='Username id'  onChange={this.inputHandler} variant="standard"  helperText ={this.state.usernameText} />
              <span id="textBoxSpace"></span>
            </div>
            <div className="password_conform">
              <TextField  type="password" id="txtpassword" variant="standard"   onChange={this.inputHandler}  placeholder='password' helperText ={this.state.passwordText}/>
              <span id="textBoxSpace"></span>
              <TextField type="password" id ="conformPassword"placeholder='conform password' variant="standard" />
            </div>
            <div className="footer">
            <Button className="txtbtn" onClick={() =>this.submitHandler()} variant="contained">sign up</Button>
            <Snackbar 
            anchorOrigin={{vertical : 'botton',horizontal :"left"}} 
             open ={this.state.SnackbarOpen} autoHideDuration={3000} 
             message ={<span id="message-id">{this.state.SnackbarMessage}</span>}
            action={[
               <IconButton key="close"  color ="inherit"  onClick={() =>this.SnackbarClose()} aria-label='Close' > X </IconButton>

             ]
             }
            />
            </div>
          </form>
        </div>
      </div>
    )
  }
}


export default SignUp;
