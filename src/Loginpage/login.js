import React from "react";
import "./styles.css";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GoogleIcon from "@mui/icons-material/Google";
import {Link} from "react-router-dom"

function Login() {
  return (
    <div className="side2">
      <div className="flexCol alignCntr justifyCntr">
          <div className="userdetails">
            <div className="input-box">
              <span className="details">Email Address *</span>
              <input type="email" placeholder="Email"></input>
            </div>
            <div className="hiddentext">
              <p>We'll never share your email with anyone else.</p>
            </div>
            <div className="input-box2">
              <span className="details">Password *</span>
              <input type="password" placeholder="password"></input>
            </div>

            <div className="captcha-box">
              <div className="verification-box">
                <input type="checkbox" className="checkbox"></input>
                <span className="captcha">I'm not a robot</span>
              </div>
              <div className="recaptchaimage">
                <img
                  src="https://www.google.com/recaptcha/about/images/reCAPTCHA-logo@2x.png"
                  alt="img"
                  className="img"
                ></img>
              </div>
            </div>
            <div className="verification-box1">
              <input type="checkbox" className="checkbox1"></input>
              <span className="forgotpassword">
                Remember me <p>Forgot Password ?</p>
              </span>
            </div>
            <div className="btn">
              <button className="btn1">Sign In</button>
<Link to="/Signup">
<button className="btn2" >Sign Up!</button>

</Link>
            </div>
            <div className="btn">
              <button className="btn1">
                <LinkedInIcon className="linkedinicon"></LinkedInIcon>
                <p>Sign in with linkedin</p>
              </button>
              <button className="btn2">
                <GoogleIcon className="googleicon"></GoogleIcon>
                <p>Sign in with Google</p>
              </button>
            </div>
          
          </div>
      </div>
    </div>
  );
}
export default Login;