import React from "react";
import "./register.scss";

import icons from "../../constants/icons";
import { Link } from "react-router-dom";
function Register() {
  return (
    <div className="register grid-center">
      <div className="card">
        <div className="login--detail">
          <h1>SIGN UP</h1>
          <form>
            <input type="text" name="username" placeholder="Username"></input>
            <input type="email" name="email" id="email" placeholder="Email" />
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
            />
            <div className="grid-center login--detail-grid">
              <p>Forgot Password?</p>
              <button>SIGN UP</button>
              <span>OR SIGN UP WITH:</span>
              <div className=" login--icons">
                <icons.google size={32} />
                <icons.facebook size={29} />
              </div>
            </div>
          </form>
        </div>
        <div className="left--container-register grid-center">
          <h1>Hippie</h1>
          <p>Connect with friends and the world around you on Hippo.</p>
          <span>Do you have an account?</span>
          <Link to={"/login"}>
            <button>LOG IN</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Register;
