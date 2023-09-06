import axios from "axios";

export const GetAllNote = () =>{

    try{
        const response =  axios.get('localhost:3000/home/signup',{
            headers :{
                Authorization:localStorage.getItem('token')
            }
        }
        )
          return response;
      }
      catch(error){
          return error;
  
      }


}
export const addNote = () =>{

    // try{
    //     const response =  axios.get('localhost:3000/home/signup',{
    //         headers :{
    //             Authorization:localStorage.getItem('token')
    //         }
    //     }
    //     )
    //       return response;
    //   }
    //   catch(error){
    //     return error;

   // }
}