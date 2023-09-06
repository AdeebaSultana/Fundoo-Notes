import React from 'react';
import {
  BrowserRouter as Router, Routes,
  Route,
} from "react-router-dom";
import ButtonAppBar from './Components/ButtonAppBar/ButtonAppBar.jsx';
import ForgetPassword from './Pages/ForgetPassword/ForgetPassword.jsx';
import Home from './Pages/Home/Home.jsx';
import Login from './Pages/Login/Login.jsx';
import SignUp from './Pages/signup/SignUp.jsx';
//import Login from './Login/Login';
//import SignUp from './Pages/signup/signup';


function App() {
  return (
    <div><Router>
      <Routes>
        <Route path="/" element={<Login></Login>} />
        <Route path="/SignUp" element={< SignUp />} />
        <Route path="/ForgetPassword" element={<ForgetPassword/>} />
        <Route path="/Home" element={<Home/>} />
        <Route path="/ButtonAppBar" element={<ButtonAppBar/>} />

      </Routes>
    </Router></div>
  )

}

export default App;
