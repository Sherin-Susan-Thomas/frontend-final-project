import { SideBar } from "components/sidebar/Sidebar";
import React from "react";
import "./header.css";

export const Header = () => {
  return (
    <>
    <div className="header">
      <p className="headerTitleLg">MEMORY BOX.</p>
      <p className="headerTitleSm">
        Share your moments with other users
      </p>
    </div>
    <SideBar />
    </>
  );
};
