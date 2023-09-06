import React, { Component } from 'react';
import NoteCard from '../../Components/NoteCard/NoteCard';
import ButtonAppBar from '../../Components/ButtonAppBar/ButtonAppBar';
import CardNoteList from '../../Components/CardNoteList/CardNoteList';

class Home extends Component {
    constructor(){
        super();
        console.log("constructor called");
    }
    // componentDidMount(){
    //     console.log("did mount called");
    // }
    // UNSAFE_componentWillMount(){
    //     console.log("will mount called");
    // }

    render() {
        return (
            <div>
                <div>
                    
                     <ButtonAppBar/> 
                    {/* <NoteCard/>
                    <CardNoteList/> */}
                </div>
            </div>
           
        );
    }
 }

export default Home;