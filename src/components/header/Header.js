import { SideBar } from "components/sidebar/Sidebar";
import React from "react";
import "./header.css";
import cam from "./images/cam1.gif";
export const Header = () => {
  return (
    <>
      <div className="header">
        <p className="headerTitleLg">
          MEMORY BOX <img className="headerimage" src={cam} alt="camera-logo" />
        </p>{" "}
        <p className="headerTitleSm">Share your moments with other users</p>
      </div>
      <SideBar />
    </>
  );
};
