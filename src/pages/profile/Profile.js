import React, { useState } from "react";
import { API_URL } from "components/utils/url";
import { Link } from "react-router-dom";

import "./profile.css";

export const Profile = () => {
  const user = JSON.parse(localStorage.getItem("userData"));
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

          setUrl((prev) => {
            console.log("prev", prev);
            console.log("updated url in setUrl", data.url);
            //write user update here, push new url to your mongoDB -> ONLY UPDATE IMAGE,

            fetch(`${API_URL}/users/${id}`, {
              method: "PUT",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                userId: user._id,
                profilepicture: data.url,
              }),
            })
              .then((res) => res.json())
              .then((data1) => {
                if (data1.error) {
                  setErrorMessage("Try posting again");
                  setSuccessMessage("");
                } else {
                  console.log("data from fetch", data1);
                  localStorage.removeItem("userData");
                  localStorage.setItem("userData", JSON.stringify(data1));
                  setTimeout(setSuccessMessage("updated successfully"), 2000);
                  setErrorMessage("");
                }
              });
            return data.url;
          });
          setUrl(data.url);
        }
      })
      .catch((err) => {
        console.log(err);
      });
    //this is not a function
  };

  return (
    <div className="settings">
      <Link to="/home">
        <button className="homeButton">
          <i className="fa fa-home" aria-hidden="true"></i>
        </button>
      </Link>
      <div className="settingsWrapper">
        <div className="settingsTitle">Update Your Profile</div>
        <div>
          <img
            src={user.profilepicture}
            alt="porfile_user"
            className="userprofile"
          />
          <span className="settingsLabel">{user.username}</span>
        </div>

        <form className="settingsForm" onSubmit={(e) => e.preventDefault()}>
          <label></label>
          <div className="settingsPP">
            <label htmlFor="fileInput"></label>
            <br />

            <img
              className="profilePic"
              src={!image ? user.profilepicture : url}
              alt=""
            />
            <input
              id="fileInput"
              placeholder="Choose a new picture"
              type="file"
              className="settingsPPInput"
              onChange={(e) => setImage(e.target.files[0])}
            />
          </div>

          {!successMessage ? (
            <button
              className="settingsSubmitButton"
              type="submit"
              onClick={() => postDetails()}
            >
              Update
            </button>
          ) : (
            ""
          )}
        </form>
        <p>{errorMessage}</p>
        <p>{successMessage}</p>
      </div>

    </div>
  );
};
