import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { API_URL } from "components/utils/url";
import "./login.css";

export const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordShown, setPasswordShown] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();
  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };
  const showicon = (
    <i
      className="fas fa-eye-slash fa-sm"
      aria-hidden="true"
      onClick={togglePassword}
    ></i>
  );

  const hideicon = (
    <i
      className="far fa-eye fa-sm"
      aria-hidden="true"
      onClick={togglePassword}
    ></i>
  );
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
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
          navigate("/home");
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="login">
      <span className="loginTitle">MEMORY</span>
      <span className="loginTitle">BOX.</span>
      <div className="loginBox">
        <form className="loginForm" onSubmit={handleOnSubmit}>
          <div className="inputDiv">
            <label className="registerLabel" htmlFor="username">
              Username
            </label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className="inputDiv">
            <label className="registerLabel" htmlFor="password">
              Password
            </label>
            <div className="loginPwd">
              <input
                type={passwordShown ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <p>{!passwordShown ? showicon : hideicon}</p>
            </div>
          </div>
          <p>{errorMessage}</p>
          <div className="buttonBox2">
            <button className="loginButton">Login</button>

            <span className="question">New user? </span>
            <button className="loginRegisterButton">
              <Link to="/">New Account</Link>{" "}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
