import React, { useState } from "react";
import { Link } from "react-router-dom";
import { API_URL } from "components/utils/url";
import PWDRequisite from "./PWDRequisite";
import validator from "validator";
import "./register.css";

export const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordShown, setPasswordShown] = useState(false);
  const [pwdRequiste, setPWDRquisite] = useState(false);
  const [error, setError] = useState("");

  const [checks, setChecks] = useState({
    capsLetterCheck: false,
    numberCheck: false,
    pwdLengthCheck: false,
    specialCharCheck: false,
  });
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

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
  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };
  const showicon = (
    <i class="fas fa-eye-slash" aria-hidden="true" onClick={togglePassword}></i>
  );

  const hideicon = (
    <i class="far fa-eye" aria-hidden="true" onClick={togglePassword}></i>
  );
  const validate = (value) => {
    if (
      validator.isStrongPassword(value, {
        minLength: 8,
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 1,
      })
    ) {
      setError("Strong Password");
    } else {
      setError("Not a Strong Password");
    }
  };
  const handleOnChange = (e) => {
    validate(e.target.value);
    setPassword(e.target.value);
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
          setTimeout(window.location.reload.bind(window.location), 500);
        } else {
          if (data.success === true) console.log(data);
          setSuccessMessage(`Profile ${username} created`);
          localStorage.clear();
          setTimeout(() => window.location.replace("/login"), 1000);
        }
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className="Register">
      <span className="RegisterTitle">MEMORY</span>
      <span className="RegisterTitle">BOX.</span>
      <div className="registerBox">
        
        <form className="RegisterForm" onSubmit={handleOnSubmit}>

          <div className="inputDiv">
          <label htmlFor="username">username</label>
          <input className="registerInput"
            type="text"
            required
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          </div>

          <div className="inputDiv">
          <label htmlFor="email">email</label>
          <input className="registerInput"
            type="email"
            required
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          </div>

          <div className="inputDiv">
          <label htmlFor="password">password</label>
          <span>
            <input className="registerInput"
              type={passwordShown ? "text" : "password"}
              required
              placeholder="Enter your password"
              value={password}
              onChange={handleOnChange}
              onFocus={handleOnFocus}
              onBlur={handleOnBlur}
              onKeyUp={handleOnKeyUp}
            />
            {!passwordShown ? showicon : hideicon}
          </span>
          </div>

          {pwdRequiste ? (
            <PWDRequisite
              capsLetterFlag={checks.capsLetterCheck ? "valid" : "invalid"}
              numberFlag={checks.numberCheck ? "valid" : "invalid"}
              pwdLengthFlag={checks.pwdLengthCheck ? "valid" : "invalid"}
              specialCharFlag={checks.specialCharCheck ? "valid" : "invalid"}
            />
          ) : null}

          {error === "" ? null : (
            <span
              style={{
                fontWeight: "bold",
                fontStyle: "italic",
              }}
            >
              {error}
            </span>
          )}
          <p className="errorMessage">{errorMessage}</p>
          <p className="errorMessage">{successMessage}</p>
          <div className="buttonBox">
            <button
              className="registerButton"
              disabled={!username || !email || !password}
            >
              {" "}
              REGISTER
            </button>

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
