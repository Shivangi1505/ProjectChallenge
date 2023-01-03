import React from "react";
import { useState } from "react";
import "./style.css"
import {useNavigate} from "react-router-dom"
 const Signup = () => {
  const [fname, setfname] = useState("");
  const [lname, setlname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");
 
  // const [emailValid,setemailValid] = useState(false);
  const [userInfo, setuserInfo] = useState([]);

  const navigate = useNavigate();

  const click = (e) => {
    e.preventDefault();

    let emailregex = /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i;

    if (fname.trim() === "" && lname.trim() === "" && email.trim() === "") {
      alert("Please enter your details");
      console.log("fle" + fname + lname + email);
      return;

      // alert("fname,email,lname")
    }
    if (password !== confirmPassword) {
      alert("Values should be same of password and confirm password");

      console.log("pass");
      return;
    }
    if (!email.match(emailregex)) {
      alert("Please enter valid email");

      console.log("emailregex");
      return;
    }
    if (
      fname.trim() !== "" &&
      lname.trim() !== "" &&
      email.match(emailregex) &&
      password === confirmPassword
    ) {
      const data = {
        fname: fname,
        lname: lname,
        email: email,
        password: password,
        id: Math.random(),
      };
      setuserInfo((prev) => {
        return [...prev, data];
      });
      const getLocaldata = localStorage.getItem("user");
      const parseGetLocaldata = JSON.parse(getLocaldata);
      console.log(parseGetLocaldata);
      if (parseGetLocaldata == null) {
        localStorage.setItem("user", JSON.stringify([data]));
      } else {
        localStorage.setItem(
          "user",
          JSON.stringify([...parseGetLocaldata, data])
        );
      }
      setfname("");
      setconfirmPassword("");
      setemail("");
      setlname("");
      setpassword("");
      alert("Account created successfully");
    }
    navigate("/");
  };

  const fnamehandler = (e) => {
    setfname(e.target.value);
  };

  const lnamehandler = (e) => {
    setlname(e.target.value);
  };

  const emailhandler = (e) => {
    setemail(e.target.value);
  };
  const passhandler = (e) => {
    setpassword(e.target.value);
  };
  const conpasshandler = (e) => {
    setconfirmPassword(e.target.value);
  };
  // console.log("info=============>", userInfo);

  return (
    <div className="div" >
    <h1>Signup Page</h1>
      {/* <UserContext.Provider value={dkey}> */}
      <form action="submit">
        
        <label htmlFor="fname" className="label">Enter your First Name: </label>
        <input type="text" className="input" onChange={fnamehandler} value={fname} />
        <br />
        <label htmlFor="lname" className="label">Enter your Last Name: </label>
        <input type="text" className="input" onChange={lnamehandler} value={lname} />
        <br />
        <label htmlFor="email" className="label">Enter your Email: </label>
        <input type="email" className="input" onChange={emailhandler} value={email} />
        <br />
        <label htmlFor="password" className="label">Enter Password: </label>
        <input type="password" className="input" onChange={passhandler} value={password} />
        <br />
        <label htmlFor="cpassword" className="label">Confirm Password: </label>
        <input
        className="input"
          type="password"
          onChange={conpasshandler}
          value={confirmPassword}
        />

        <button onClick={click} className="button">Submit</button>
     
     </form>
      {/* </UserContext.Provider> */}
    </div>
  );
};

export default Signup;