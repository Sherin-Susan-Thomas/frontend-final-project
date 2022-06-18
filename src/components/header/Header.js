import React from "react";
import "./header.css";
import { SideBar } from "components/sidebar/Sidebar";

export const Header = () => {
  return (
    <div className="header">

      <div className="headerTitles">
        <p className="headerTitleLg">MEMORY BOX.</p>
       
        <p className="headerTitleSm"><i>Save and share your moments with other users</i>
        </p>
      
      </div>
      <SideBar />
   
    </div>
  );
};
