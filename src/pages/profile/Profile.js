import React, { useState } from "react";
import { API_URL } from "components/utils/url";

import "./profile.css";

/*{export const Profile = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState("");
  const [file, setFile] = useState(null);

  const user = JSON.parse(localStorage.getItem("userData"));
  console.log(user);
  const handleSubmit = async (e) => {
    e.preventDefault();

    const updatedUser = {
      userId: user._id,
      accessToken: user.accessToken,
      username,
      email,
      password,
    };
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      updatedUser.profilePic = filename;
      try {
        await axios.post("https://final-sprint.herokuapp.com/api/upload", data);
      } catch (err) {}
    }
    try {
      const res = await axios.put(
        "https://final-sprint.herokuapp.com/api/users/" + user._id,
        updatedUser
      );
      console.log(res);
      setSuccess("updated successfully. Login again");
    } catch (err) {}
  };

  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsTitleUpdate">Update Your Account</span>
        </div>
        <form className="settingsForm" onSubmit={handleSubmit}>
          <label>Profile Picture</label>
          <div className="settingsPP">
            <img
              src={file ? URL.createObjectURL(file) : user.profilepicture}
              alt=""
            />
            <label htmlFor="fileInput">
              <i className="settingsPPIcon far fa-user-circle"></i>{" "}
            </label>
            <input
              id="fileInput"
              type="file"
              onChange={(e) => setFile(e.target.files[0])}
              className="settingsPPInput"
            />
          </div>
          <label>Username</label>
          <input
            type="text"
            placeholder={user.username}
            name="name"
            onChange={(e) => setUsername(e.target.value)}
          />
          <label>Email</label>
          <input
            type="email"
            placeholder={user.email}
            name="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Password</label>
          <input
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
};}*/

export const Profile = () => {
  const user = JSON.parse(localStorage.getItem("userData"));
  const p = localStorage.getItem("profilepicture");
  console.log(user);
  console.log(user.profilepicture);
  const id = user._id;
  console.log(user.username);
  console.log(id);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [image, setImage] = useState("");
  const [url, setUrl] = useState("");
  const postpicture = () => {
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "final-project");
    data.append("cloud_name", "dsfrrrml8");
    fetch("https://api.cloudinary.com/v1_1/dsfrrrml8/image/upload", {
      method: "POST",
      body: data,
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setUrl(data.url);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const postDetails = () => {
    const Updateduser = {
      userId: user._id,
      username: user.username,
      profilepicture: url,
    };

    fetch(`${API_URL}/users/${id}`, Updateduser, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: user.username,
        profilepicture: url,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          setErrorMessage("Try posting again");
          setSuccessMessage("");
        } else {
          console.log("data", data);
          setTimeout(setSuccessMessage("updated successfully"), 2000);
          setErrorMessage("");
        }
      });
  };

  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle"></div>
        <h1>{user.username}</h1>
        <form className="settingsForm" onSubmit={(e) => e.preventDefault()}>
          <label></label>
          <div className="settingsPP">
            <label htmlFor="fileInput"></label>
            <br />
            <img src={url} alt="" />
            <input
              id="fileInput"
              placeholder="Choose a new picture"
              type="file"
              className="settingsPPInput"
              onChange={(e) => setImage(e.target.files[0])}
            />
          </div>
          <button
            className="settingsSubmitButton"
            type="submit"
            onClick={() => postDetails()}
          >
            Add pciture
          </button>
          <button
            className="settingsSubmitButton"
            type="submit"
            onClick={() => postDetails()}
          >
            Update Profile
          </button>
        </form>
        <p>{errorMessage}</p>
        <p>{successMessage}</p>
      </div>
    </div>
  );
};
