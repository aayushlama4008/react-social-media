import React from "react";
import "./login.scss";

import icons from "../../constants/icons";
function LogIn() {
  return (
    <div className="login grid-center">
      <div className="card ">
        <div className="left--container grid-center">
          <h1>Hippo</h1>
          <p>Connect with friends and the world around you on Hippo.</p>
          <span>Don't have an account?</span>
          <button>Register</button>
        </div>
        <div className="login--detail">
          <h1>Log In</h1>
          <form>
            <input type="email" name="email" id="email" placeholder="Email" />
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
            />
            <div className="grid-center login--detail-grid">
              <p className="grid-center">Forgot Password?</p>
              <button>LOG IN</button>
              <span className="grid-center">OR LOG IN BY:</span>
              <div className=" grid-center ">
                <span className="login--icons">
                  <icons.google size={32} />
                  <icons.facebook size={29} />
                  </span>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LogIn;
