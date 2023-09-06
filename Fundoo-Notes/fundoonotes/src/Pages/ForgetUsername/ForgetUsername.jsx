import React, { Component } from 'react'
import './ForgetUsername.css'
import { IconButton, Snackbar, TextField } from '@mui/material'
import { Button } from '@mui/material'
import { Link } from "react-router-dom";
import { ResetService } from '../../Services/UserService';

export class ForgetUsername extends Component {
  
    constructor(props) {
        super(props);
        this.usernameHandler = this.usernameHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
        this.state = {

            usernameError: "",
            username : ""
        
        }
      }

      usernameHandler(event){
  let username = event.target.value;
  let regexUsername = new RegExp('^[A-Z a-z]+[a-z 0-9]+[@]{1}[a-z]*[.]{1}[a-z 0-9]*');
  if (!regexUsername.test(username)) {
    this.setState(
      {
        usernameError: "username is incorrect"
      }
    )
  }
  else{
    this.setState(
        {
            username: event.target.value,
            usernameError: ""
        }
      )

  }
}

    SnackbarClose() {
      this.setState(
        {
          SnackbarOpen: false
        }
      )
    }


    submitHandler = async ()=>{
      let data = {
        username : this.state.username
    }
    
       await ResetService(data).then((res)=>{
          console.log('res',res);
          this.setState({
            SnackbarOpen : true,
            SnackbarMessage : res.data.message
          })
       })
       .catch((error) =>{
        console.log(error);
        this.setState({
          SnackbarOpen : true,
          SnackbarMessage : error.message
        })
      });
    }




  render() {
    return (
        <div className="mainContent">
            <div className="topContent"></div>
                <div className="subContent">
                    <div className="leftContent"></div>
                    <div className="centerContent">
                        <div className="outerBroder">
                            <div className="form">
                                <div className="Hearder"><h2>Fundoo</h2></div>
                                <div className="paragraphContent">
                                <h4 >Find your username</h4>
                                </div>
                                <div className="subParagraphContent">
                                    Enter your Recovery Username
                                </div>
                                <div className="usernameContent">
                                <TextField id="Username_id" variant="standard" placeholder='Username'  onChange={this.usernameHandler} helperText={this.state.usernameError} fullWidth required/>
                                </div>
                                <div className="bottomContent">
                                <Button className="txtbtn" onClick={() =>this.submitHandler()}  variant="contained">Next</Button>
                                </div>
                                <div className="BackButton">
                                <Link to="/">Back</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="rightContent"></div>
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

        </div>

    )
  }
}

export default ForgetUsername