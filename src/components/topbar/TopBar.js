import React from "react";
import { Link } from "react-router-dom";
import "./topbar.css";

export const TopBar = () => {
  const user = JSON.parse(localStorage.getItem("userData"));
  const p = localStorage.getItem("profilepicture");

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
          <Link to="/newpost">
            <li className="topListItem">
              NEW POST
              <span role="img" aria-label="image">
                ✍️
              </span>
            </li>
          </Link>
          <li className="topListItem">FAVOURITES</li>
        </ul>
      </div>
      <div className="topRight">
        <img className="topImg" src={p} alt=""></img>
        <Link to="/users/:id">
          <h2>{user.username}</h2>{" "}
        </Link>
        <i className="searchIcon fa-solid fa-magnifying-glass">
          <span className="searchIcon_input">
            <input />
          </span>
        </i>
        <button>
          <Link to="/" onClick={() => window.localStorage.clear()}>
            Logout
          </Link>
        </button>
      </div>
    </div>
  );
};
