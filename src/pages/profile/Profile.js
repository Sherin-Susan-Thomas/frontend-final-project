import React, { useState } from "react";
import { API_URL } from "components/utils/url";

import "./profile.css";

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
  const postDetails = () => {
    const Updateduser = {
      userId: user._id,
      username: user.username,
      profilepicture: url,
    };
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "final-project");
    data.append("cloud_name", "dsfrrrml8");
    fetch(
      "https://api.cloudinary.com/v1_1/dsfrrrml8/image/upload",

      {
        method: "POST",
        body: data,
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          console.log("upload a picture");
        } else {
          console.log("data", data);
          console.log(data.url);
          setUrl(data.url);
        }
      })
      .catch((err) => {
        console.log(err);
      });

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
          console.log(data);
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
            Update Profile picture
          </button>
        </form>
        <p>{errorMessage}</p>
        <p>{successMessage}</p>
      </div>
    </div>
  );
};
