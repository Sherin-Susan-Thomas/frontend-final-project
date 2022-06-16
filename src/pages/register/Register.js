import React, { useState } from "react";
import { Link } from "react-router-dom";
import { API_URL } from "components/utils/url";
import PWDRequisite from "./PWDRequisite";
import "./register.css";

export const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [pwdRequiste, setPWDRquisite] = useState(false);
  const [checks, setChecks] = useState({
    capsLetterCheck: false,
    numberCheck: false,
    pwdLengthCheck: false,
    specialCharCheck: false,
  });
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const handleOnChange = (e) => {
    setPassword(e.target.value);
  };

  const handleOnFocus = () => {
    setPWDRquisite(true);
  };

  const handleOnBlur = () => {
    setPWDRquisite(false);
  };
  const handleOnKeyUp = (e) => {
    const { value } = e.target;
    const capsLetterCheck = /[A-Z]/.test(value);
    const numberCheck = /[0-9]/.test(value);
    const pwdLengthCheck = value.length >= 8;
    const specialCharCheck = /[!@#$%^&*]/.test(value);
    setChecks({
      capsLetterCheck,
      numberCheck,
      pwdLengthCheck,
      specialCharCheck,
    });
  };

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
          if (data.success === true) console.log(data);
          setSuccessMessage(`Profile ${username} created`);
        }
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className="Register">
      <span className="RegisterTitle">MEMORY</span>
      <span className="RegisterTitle">BOX.</span>
      <div className="registerBox">
        <p class="z-depth-5"></p>
        <form className="RegisterForm" onSubmit={handleOnSubmit}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            required
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            required
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            required
            placeholder="Enter your password"
            value={password}
            onChange={handleOnChange}
            onFocus={handleOnFocus}
            onBlur={handleOnBlur}
            onKeyUp={handleOnKeyUp}
          />
          {pwdRequiste ? (
            <PWDRequisite
              capsLetterFlag={checks.capsLetterCheck ? "valid" : "invalid"}
              numberFlag={checks.numberCheck ? "valid" : "invalid"}
              pwdLengthFlag={checks.pwdLengthCheck ? "valid" : "invalid"}
              specialCharFlag={checks.specialCharCheck ? "valid" : "invalid"}
            />
          ) : null}
          <p className="errorMessage">{errorMessage}</p>
          <p className="errorMessage">{successMessage}</p>

          <div className="buttonBox">
            <button className="registerButton"> REGISTER</button>

            <p>Already have an account? </p>
            <button className="registerLoginButton">
              <Link to="/login">LOGIN</Link>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
