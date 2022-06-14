import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./write.css";
import { API_URL } from "components/utils/url";

export const Write = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  const [url, setUrl] = useState("");
  const user = localStorage.getItem("user");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const postDetails = () => {
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
        setUrl(data.url);
      })
      .catch((err) => {
        console.log(err);
      });
    fetch(`${API_URL}/posts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        description,
        picture: url,
        username: user,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (user) {
          console.log(data);
          setSuccessMessage(`created new post by ${user}`);
        } else if (!user) {
          setErrorMessage("Try posting again");
        }
      });
  };

  return (
    <>
      <Link to="/home">
        <button>Back to homepage</button>
      </Link>
      <div className="write">
        <p>Author :{user}</p>
        <img className="writeImge" src={url} alt="" />
        <form className="writeForm" onSubmit={(e) => e.preventDefault()}>
          <div className="writeFormGroup">
            <label htmlFor="fileInput">
              <i className="writeIcon fas fa-plus"></i>
            </label>
            <input
              id="fileInput"
              type="file"
              onChange={(e) => setImage(e.target.files[0])}
            />
            <input
              className="writeInput"
              placeholder="Title"
              type="text"
              autoFocus={true}
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="writeFormGroup">
            <textarea
              className="writeInput writeText"
              placeholder="Tell your story..."
              type="text"
              autoFocus={true}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <button
            className="writeSubmit"
            type="submit"
            onClick={() => postDetails()}
          >
            Post
          </button>

          <p>{errorMessage}</p>
          <p>{successMessage}</p>
        </form>
      </div>
    </>
  );
};
