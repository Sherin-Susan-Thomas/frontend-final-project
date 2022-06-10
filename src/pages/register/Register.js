import React, { useState } from "react";
import { Link } from "react-router-dom";
import { API_URL } from "components/utils/url";
import "./register.css";

export const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const options = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username: username,
      email: email,
      password: password,
    }),
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
    fetch(`${API_URL}/auth/register`, options)
      .then((response) => response.json())
      .then((data) => {
        if (data.success === false) {
          setErrorMessage("Error!! Try again");
        } else {
          if (data.success === false) console.log(data);
          setSuccessMessage(`Profile ${username} created`);
        }
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className="Register">
      <span className="RegisterTitle">Register</span>
      <form className="RegisterForm" onSubmit={handleOnSubmit}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          placeholder="Enter your username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="email">Email</label>
        <input
          type="text"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input
          type="text"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <p className="errorMessage">{errorMessage}</p>
        <p className="errorMessage">{successMessage}</p>
        <button className="registerButton"> Register</button>
      </form>

      <button className="registerLoginButton">
        <Link to="/login">Already have an account? Login</Link>
      </button>
    </div>
  );
};
