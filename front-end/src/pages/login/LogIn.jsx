import React from "react";
import "./login.scss";

import icons from "../../constants/icons";
import { Link } from "react-router-dom";

function LogIn() {
  return (
    <div className="login grid-center">
      <div className="card ">
        <div className="left-container grid-center">
          <h1>Hippie</h1>
          <p>Connect with friends and the world around you on Hippie.</p>
          <span>Don't have an account?</span>
          <Link to="/register">
            <button>Register</button>
          </Link>
        </div>
        <div className="login-detail">
          <h1>Log In</h1>
          <form>
            <input type="email" name="email" id="email" placeholder="Email" />
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
            />
            <div className="login-detail-grid grid-center">
              <p>Forgot Password?</p>
              <button>LOG IN</button>
              <span>OR LOG IN BY:</span>
              <div className="login-icons">
                <icons.google size={32} />
                <icons.facebook size={29} />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LogIn;
