import React, { useState, useEffect } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import axios from "axios";
export const Userdetails = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("userData"));
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  useEffect(() => {
    const getuserdetails = () => {
      fetch("https://final-sprint.herokuapp.com/api/users/" + path, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setEmail(data.email);
          setUsername(data.username);
        });
    };
    getuserdetails();
  }, [path]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedUser = {
      userId: user._id,
      accessToken: user.accessToken,
      username,
      email,
      password,
    };

    try {
      await axios.put(
        "https://final-sprint.herokuapp.com/api/users/" + user._id,
        updatedUser
      );

      setSuccess("updated successfully");
      localStorage.clear();
      navigate("/login");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="settings">
      <Link to="/home">
        <button className="homeButton">
          <i className="fa fa-home" aria-hidden="true"></i>
        </button>
      </Link>
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsTitleUpdate">Update Your Account</span>
        </div>
        <form className="settingsForm" onSubmit={handleSubmit}>
          {/*   <label>Profile Picture</label> */}
          <div className="settingsPP"></div>
          <label className="settingsLabel">Username</label>
          <input
            className="settingsInput"
            type="text"
            placeholder={user.username}
            name="name"
            onChange={(e) => setUsername(e.target.value)}
          />
          <label className="settingsLabel">Email</label>
          <input
            type="email"
            placeholder={user.email}
            name="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <label className="settingsLabel">Password</label>
          <input
            required
            type="password"
            placeholder="Password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="settingsSubmitButton" type="submit">
            Update
          </button>
        </form>
        <p>{success}</p>
      </div>
    </div>
  );
};
