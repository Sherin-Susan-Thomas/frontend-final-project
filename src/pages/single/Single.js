import React from "react";

import { SideBar } from "components/sidebar/sidebar";
import { SinglePost } from "components/singlepost/singlePost";

import "./single.css";

export const Single = () => {
  return (
    <div className="single">
      <SideBar />
      <SinglePost />
    </div>
  );
};
