import React from 'react';
import './App.css';
import Login from './components/Login/Login';
import SignUp from './components/Register/Signup';
import Home from './components/Home/Home';
import { Route } from "react-router-dom";
import OtpVerify from "./components/Register/OtpVerify";
// import Owldemo1 from './components/owl/Owl';
// import Owldemo1 from './components/owl/Owl';
  
// import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div>
      <Route exact path="/">
        <Home />
     </Route>
      <Route path="/login">
        <Login />
     </Route>

     <Route path="/signup">
       <SignUp />
     </Route>

     <Route path="/otpverify">
       <OtpVerify />
     </Route>
    
    
    </div>
   
  );
}

export default App;
