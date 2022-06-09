import React from "react";
import "./register.css";

export const Register = () => {
  return (
    <div className="Regsiter">
      <span className="RegsiterTitle">Register</span>
      <form className="RegsiterForm">
        <label htmlFor="username">Username</label>
        <input type="text" placeholder="Enter your username" />
        <label htmlFor="email">Email</label>
        <input type="text" placeholder="Enter your email" />
        <label htmlFor="password">Password</label>
        <input type="text" placeholder="Enter your password" />
        <button className="regsiterButton">Register</button>
        <button className="regsiterLoginButton">Login</button>
      </form>
    </div>
  );
};
