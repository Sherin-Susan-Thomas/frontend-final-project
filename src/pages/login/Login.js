import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { API_URL } from "components/utils/url";
import "./login.css";

export const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const options = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username: username, password: password }),
  };
  useEffect(() => {
    const userData = localStorage.getItem("userData");
    if (userData) {
      navigate("/home");
    }
  }, [navigate]);
  const handleOnSubmit = (e) => {
    e.preventDefault();
    fetch(`${API_URL}/auth/login`, options)
      .then((response) => response.json())
      .then((data) => {
        if (data.success === false) {
          setErrorMessage("Wrong Credentials. Try again!");
        } else {
          if (data.success === true)
            localStorage.setItem("accessToken", data.accessToken);
          localStorage.setItem("userData", JSON.stringify(data));
          localStorage.setItem("user", data.username);
          console.log(data);
          navigate("/home");
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="login">
      <span className="loginTitle">LOG IN HERE.</span>
      <div className="loginBox">
        <form className="loginForm" onSubmit={handleOnSubmit}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label htmlFor="password">Password</label>
          <input
            type="text"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="loginButton">Login</button>
          <p>{errorMessage}</p>

          <button className="loginRegisterButton">
            <Link to="/">New User? Create a new Acoount</Link>{" "}
          </button>
        </form>
      </div>
    </div>
  );
};
