import React from "react";
import "./login.css";

export const Login = () => {
  return (
    <div className="login">
      <span className="loginTitle">login</span>
      <form className="loginForm">
        <label htmlFor="username">Username</label>
        <input type="text" placeholder="Enter your username" />
        <label htmlFor="password">Password</label>
        <input type="text" placeholder="Enter your password" />
        <button className="loginButton">Login</button>
        <button className="loginRegisterButton">Register</button>
      </form>
    </div>
  );
};
