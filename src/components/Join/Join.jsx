import React from "react";
import "./Join.css";

export default function Join() {
  return (
    <div className="Join" id="Join-us">
      <div className="left-j">
        <hr />
        <div>
          <span className="stroke-text">READY TO</span>
          <span> LEVEL UP</span>
        </div>
        <div>
          <span>YOUR BODY</span>
          <span className="stroke-text"> WITH US?</span>
        </div>
      </div>
      <div className="right-j">
        <form action="" className="email-container">
            <input type="email" name="user_email" placeholder="Enter Your Email Address" />
            <button className="btn btn-j">Join Now</button>
        </form>
      </div>
    </div>
  );
}
