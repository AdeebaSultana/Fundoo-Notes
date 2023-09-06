import axios from 'axios';
import React from 'react'
import Box from '@mui/material/Box';

 export const UserService = (data) => {

    // let data = {
    //     firstName : signUpData.firstName,
    //     lastName : signUpData.lastName,
    //     service :"advance",
    //     email : signUpData.email,
    //     password :signUpData.password
    // }
    try{
      const response =  axios.post('http://localhost:8080/api/user',data)
        return response;
    }
    catch(error){
        return error;

    }

}


export const logInService = (data) => {

    // let data = {
    //     email : logInData.email,
    //     password :logInData.password
    // }
    try{
      const response =  axios.put('http://localhost:8080/api/user/login',data)
        return response;
    }
    catch(error){
        return error;

    }

}

// export const bull = (
//     <Box
//       component="span"
//       sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
//     >
//       •
//     </Box>
//   );