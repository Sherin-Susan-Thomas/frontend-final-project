import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./write.css";

import { API_URL } from "components/utils/url";
import { useNavigate } from "react-router-dom";
export const Write = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [categories, setcategories] = useState("");
  const [image, setImage] = useState("");
  const [url, setUrl] = useState("");
  const user = localStorage.getItem("user");

  const navigate = useNavigate();
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
        console.log(err);
      });
  };
  const postDetails = (e) => {
    e.preventDefault();
    fetch(`${API_URL}/posts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        description,
        categories,
        picture: url,
        username: user,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success === false) {
          console.log(data);
        } else {
          console.log(data);

          navigate("/home");
        }
      });
  };

  return (
    <>
      <Link to="/home">
        <button>Back to homepage</button>
      </Link>
      <div className="write">
        
        <img className="writeImge" src={url} alt="" />
        <form className="writeForm" onSubmit={(e) => postDetails(e)}>
          <div className="writeFormGroup">
            <label htmlFor="fileInput">
              <i className="writeIcon fas fa-plus"></i>
            </label>
            <input
              id="fileInput"
              type="file"
              required
              onChange={(e) => setImage(e.target.files[0])}
            />
            <button onClick={() => postpicture()}>Add Picture</button>
            <br /> <br />
            <label>Title:</label>
            <input
              className="writeInput"
              placeholder="Title"
              type="text"
              autoFocus={true}
              value={title}
              required
              onChange={(e) => setTitle(e.target.value)}
            />
            <br /> <br />
            <label>Choose a option:</label>
            <select
              name="pets"
              id="pet-select"
              value={categories}
              onChange={(e) => setcategories(e.target.value)}
            >
              <option value="">Choose a category</option>
              <option value="Countries">Countries</option>
              <option value="Europe">Europe</option>
              <option value="Cities">Cities</option>
              <option value="Wonders of the World">Wonders of the World</option>
              <option value="Asia">Asia</option>
              <option value="America">America</option>
            </select>
            <br /> <br />
          </div>
          <div className="writeFormGroup">
            <textarea
              className="writeText"
              placeholder="Tell your story..."
              type="textarea"
              rows="20"
              cols="70"
              required
              autoFocus={true}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <p>Author: {user}</p>
          </div>
          <button className="writeSubmit" type="submit">
            Post
          </button>
        </form>
      </div>
    </>
  );
};
