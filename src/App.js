import React from "react";
import LoginPage from "./Loginpage";
import Signup from "./SignUp";
import {Routes,Route }from "react-router-dom"
function App() {
  return (
    <div>
   <Routes>
    <Route path="/" element={<LoginPage/>}></Route>
    <Route path="/Signup" element={<Signup/>}></Route>

   </Routes>
    </div>
  );
}
export default App;