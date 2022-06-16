import React from "react";
import { Link } from "react-router-dom";

import { SinglePost } from "components/singlepost/SinglePost";

import "./single.css";

export const Single = () => {
  return (
    <div className="single">
      <Link to="/home">
        <button className="home">Home</button>
      </Link>

      <SinglePost />
    </div>
  );
};
