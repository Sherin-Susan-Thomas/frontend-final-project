import React from "react";
import "./topbar.css";

export const TopBar = () => {
  return (
    <div className="topBar">
      {/* <div className="topLeft">
        <i className="topIcon fa-brands fa-facebook-f"></i>
        <i className="topIcon fa-brands fa-instagram"></i>
        <i className="topIcon fa-brands fa-github"></i>
        <i className="topIcon fa-solid fa-at"></i>
        </div> */}
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">HOME</li>
          <li className="topListItem">ABOUT</li>
          <li className="topListItem">PROFILE</li>
        </ul>
      </div>
      <div className="topRight">
        <img
          className="topImg"
          src="https://cdn.pixabay.com/photo/2017/06/13/12/53/profile-2398782_1280.png"
          alt=""
        ></img>
        <i className="searchIcon fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  );
};
