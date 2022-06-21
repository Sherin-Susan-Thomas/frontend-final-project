import React from "react";
import { Link } from "react-router-dom";

import { SinglePost } from "components/singlepost/SinglePost";

import "./single.css";

export const Single = () => {
  return (
    <div className="single">
      <Link to="/home" className="link">
        <button className="homeButton">
          <i className="fa fa-home" aria-hidden="true"></i>
        </button>
      </Link>

      <SinglePost />
    </div>
  );
};
