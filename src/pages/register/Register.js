import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { API_URL } from "components/utils/url";
import PWDRequisite from "./PWDRequisite";
import validator from "validator";
import "./register.css";

export const Register = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [pwdRequiste, setPWDRquisite] = useState(false);
  const [checks, setChecks] = useState({
    capsLetterCheck: false,
    numberCheck: false,
    pwdLengthCheck: false,
    specialCharCheck: false,
  });
  const [passwordShown, setPasswordShown] = useState(false);
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [error, setError] = useState("");
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
      setError("Is Strong Password");
    } else {
      setError("Is Not Strong Password");
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

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };
  const showicon = (
    <i
      className="fas fa-eye-slash"
      aria-hidden="true"
      onClick={togglePassword}
    ></i>
  );

  const hideicon = (
    <i className="far fa-eye" aria-hidden="true" onClick={togglePassword}></i>
  );
  const handleOnSubmit = (event) => {
    event.preventDefault();
    fetch(`${API_URL}/auth/register`, options)
      .then((response) => response.json())
      .then((data) => {
        if (data.success === false) {
          setErrorMessage("try again");
        } else {
          if (data.success === true) console.log(data);
          setSuccessMessage(`Profile ${username} created`);
          navigate("/login");
        }
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className="Register">
      <div className="titleBox">
        <span className="RegisterTitle">MEMORY</span>
        <span className="RegisterTitle">BOX.</span>
      </div>
      <p className="z-depth-5"></p>
      <div className="registerBox">
        <form className="RegisterForm" onSubmit={(e) => handleOnSubmit(e)}>
          <div className="inputDiv">
            <label className="registerLabel" htmlFor="username">
              username:
            </label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          {/*        <label htmlFor="picture">PP</label> */}

          <div className="inputDiv">
            <label className="registerLabel" htmlFor="email">
              email:
            </label>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="inputDiv">
            <label className="registerLabel" htmlFor="password">
              password:
            </label>
            <div className="registerPwd">
              <input
                type={passwordShown ? "text" : "password"}
                value={password}
                onChange={handleOnChange}
                onFocus={handleOnFocus}
                onBlur={handleOnBlur}
                onKeyUp={handleOnKeyUp}
              />
              <p> {!passwordShown ? showicon : hideicon}</p>
            </div>
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

            <span className="question">
              <i>Already have an account? </i>
            </span>
            <button className="registerLoginButton">
              <Link to="/login">LOGIN</Link>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
