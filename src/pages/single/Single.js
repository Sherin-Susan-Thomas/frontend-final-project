import React from "react";

import { SideBar } from "components/sidebar/Sidebar";
import { SinglePost } from "components/singlepost/SinglePost";

import "./single.css";

export const Single = () => {
  return (
    <div className="single">
      <SideBar />
      <SinglePost />
    </div>
  );
};
