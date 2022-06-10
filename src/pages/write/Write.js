import React from "react";
import { Link } from "react-router-dom";
import "./write.css";

export const Write = () => {
  return (
    <>
      <Link to="/home">
        <button>Back to homepage</button>
      </Link>
      <div className="write">
        <img className="writeImge" src="" alt="" />
        <form className="writeForm">
          <div className="writeFormGroup">
            <label htmlFor="fileInput">
              <i className="writeIcon fas fa-plus"></i>
            </label>
            <input id="fileInput" type="file" />
            <input
              className="writeInput"
              placeholder="Title"
              type="text"
              autoFocus={true}
            />
          </div>
          <div className="writeFormGroup">
            <textarea
              className="writeInput writeText"
              placeholder="Tell your story..."
              type="text"
              autoFocus={true}
            />
          </div>
          <button className="writeSubmit" type="submit">
            Post
          </button>
        </form>
      </div>
    </>
  );
};
