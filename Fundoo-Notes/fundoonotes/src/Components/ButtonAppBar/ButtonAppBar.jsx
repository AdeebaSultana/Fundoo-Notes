import React, { Component } from 'react'
import './ButtonAppBar.css'
//import ButtonAppBar from '@mui/material/ButtonAppBar';
import MenuIcon from '@mui/icons-material/Menu';
import { IconButton, InputAdornment, InputBase, TextField, } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { AccountCircle, AddShoppingCart, ConstructionRounded, SearchOffOutlined, SearchOutlined, ShoppingCart, ViewStream, } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Home from '../../Pages/Home/Home';



class ButtonAppBar extends Component {

  constructor(props) {
     super(props);
    // let datas =  this.props.notesData;
  }

  render() {
   // const data =  this.props.notesData;
    //console.log("data is" +data);
   
    return (
      <div>
      
        <div className='main_content'>
          <div className='navbar'>
            <div className="toolbar">
              <div className="subcontent">
                <div className="itemcontent">
                  <div className='space_content'>

                  </div>
                  <div className='menuContent' >
                    {/* <TempDrawer/> */}
                  </div>
                  <span className='space_between'></span>
                  <div className='header_title'>
                    <h2>fundooNotes</h2>
                  </div>
                  <span className='space_for_fundoo'></span>
                  {/* <div className='search_icon'>
              <IconButton id='search_button' >
                <SearchIcon />
              </IconButton>
            </div> */}
                  {/* <div className='text_feild'>
              <input type="text" id='search_text' label="With normal TextField" />
            </div> */}
                  <div className='text_feild_div'>
                    <TextField
                      className='text_bar'
                      id="standard-bare"
                      variant="outlined"
                      placeholder='Search'
                      InputProps={{
                        startAdornment: (
                          <IconButton>
                            <SearchOutlined />
                          </IconButton>
                        ),
                      }}
                    />
                  </div>
                  <span className='space'></span>
                  <div className='shoppingCart'>
                    <ShoppingCart />
                  </div>
                  <span className='space_view'></span>
                  <div className='viewStream'>
                    <ViewStream />
                  </div>
                  <span className='space_view'></span>
                  <div className='Account_Circle'>
                  {/* <AccoutSettings /> */}
                  </div>
                 
                  <span className='space_view'></span>
                </div>

              </div>
            </div>
          </div>
        </div>
           <div className='spaceInBetween'>

            </div>
        <div className='mainBox'>
          < Home />
        </div>
      </div>

    )
  }
}

export default ButtonAppBar;