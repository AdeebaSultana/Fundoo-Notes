import { Card } from "@mui/material";
import React, { Component } from "react";
import { GetAllNote } from "../../Services/NoteService";
import "./CardNoteList.css";

class CardNoteList extends Component {
  constructor() {
    super();
    this.state = {
      noteData: [],
    };
  }
  componentDidMount = () => {
    GetAllNote().then((res) => {
      this.setState({
        noteData: res.data.data,
      });
    });
  };

  
  render() {
    return (
      <div className="CardNoteList">
        <div className="NoteList">
          {this.state.noteData.map((note, index) => {
            return (
              <div key={index} className="NoteDetails">
                <Card>
                  <p id="title">{note.title}</p>
                  <p id="note-text">{note.noteText}</p>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default CardNoteList;
