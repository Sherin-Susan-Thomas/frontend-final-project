import React from "react";
import { Link } from "react-router-dom";
import { SideBar } from "components/sidebar/Sidebar";
import { SinglePost } from "components/singlepost/SinglePost";

import "./single.css";

export const Single = () => {
  return (
    <div className="single">
      <Link to="/home">
        <button>Back to homepage</button>
      </Link>
      <SideBar />
      <SinglePost />
    </div>
  );
};
