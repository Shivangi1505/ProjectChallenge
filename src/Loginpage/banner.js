import React from "react";
import "./styles.css";

function Banner() {
  return (
    <div className=" side1">
      <div className="flexCol alignCntr justifyCntr">
        <div className="pdngBLG">
          <img
            src="https://apps.webdew.com/public/images/webdew-logo-new_ver.svg"
            alt="banner"
            className="img"
          ></img> 
        </div>
        <div className="pdngTLG">
        <span className="wel">Welcome to Webdew</span>
        </div>
      </div>
    </div>
  );
}
export default Banner;