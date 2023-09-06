import  React, { Component } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import {
  Button,
  CardActionArea,
  InputAdornment,
  InputBase,
} from "@mui/material";

import CreateIcon from "@mui/icons-material/Create";
import ArchiveIcon from "@mui/icons-material/Archive";
import AddAlertIcon from "@mui/icons-material/AddAlert";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import MoreVertIcon from "@mui/icons-material/MoreVert";

import "./NoteCard.css";
import {addNote} from '../../Services/NoteService';

 class NoteCard extends Component {
  constructor() {
    super();
    this.state = {
      isAddNote: true,
      title:"",
      desc:""
    };
  }

  handleInput=(event)=>{
    console.log(event.target.id + "" + event.target.value);
    if(event.target.id === "title"){
        this.setState({
            title: event.target.value,
          });
    }
    else if(event.target.id === "desc"){
        this.setState({
            desc: event.target.value,
          });
    }
  }

  handleNoteAdd = () => {
    this.setState({
      isAddNote: !this.state.isAddNote,
    });
    console.log("Note add Called --"+this.state.title.length);
    if(this.state.title.length > 0 && this.state.desc.length > 0){
        this.handleSubmit();
    }
  
  };

  handleSubmit = async () => {
    console.log("submit called");
    let data={
        title:this.state.title,
        noteText:this.state.desc
        
    }
    await addNote(data).then((res)=>{
        console.log(res);
      }).catch((error) => {
        console.log("error" + error);
      });
  };
  render() {
    return (
      <div className="NoteCard">
        {this.state.isAddNote ? (
          <div id="take-note">
            <Card sx={{}}>
              <CardActionArea>
                <CardContent>
                    <div>
                  <Typography
                    id="take-note-text"
                    gutterBottom
                    variant="h5"
                    component="div"
                    onClick={this.handleNoteAdd}
                    // InputProps={{
                    //     startAdornment: (
                    //       <InputAdornment position="end">
                    //         <CreateIcon />
                    //       </InputAdornment>
                    //     )
                    //   }}
                  >
                    Take a note..
                  </Typography>

                  <CreateIcon id = "create-icon"/>
                  </div>
                </CardContent>
              </CardActionArea>
            </Card>
            {/* <div>
              <CreateIcon />
              </div> */}
          </div>
        ) : (
          <div id="take-note">
            <Card >
              <CardActionArea>
                <CardContent>
                  <div className="Note">
                    <InputBase placeholder="Title" id="title" onChange={this.handleInput}></InputBase>
                    <br />
                    <br />
                    <InputBase placeholder="Take a note.." id="desc"  onChange={this.handleInput} ></InputBase>
                  </div>
                </CardContent>
              </CardActionArea>
              <div className="NoteBottom">
                <div className="NoteIcons" >
                    <Button style={{color:"black"}}>{<GroupAddIcon />}</Button>
                    <Button style={{color:"black"}}>{<AddAlertIcon />}</Button>
                    <Button style={{color:"black"}} onClick={this.handleArchive}>{<ArchiveIcon />}</Button>
                    <Button style={{color:"black"}}>{<MoreVertIcon />}</Button>
                </div>
                <div className="NoteClose">
                  <Button onClick={this.handleNoteAdd}>Close</Button>
                </div>
              </div>
            </Card>
          </div>
        )}
      </div>
    );
  }
}
export default NoteCard;

