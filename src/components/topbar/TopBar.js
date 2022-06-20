import React from "react";
import { Link } from "react-router-dom";
import "./topbar.css";

export const TopBar = () => {
  const user = JSON.parse(localStorage.getItem("userData"));

  const id = user._id;
  console.log("id", id);





  return (
    <div className="topBar">


<div className="topLeft">
<button className="logout">
          <Link to="/" onClick={() => window.localStorage.clear()}>
            Logout
          </Link>
        </button>
  
        <ul className="topList">
          <Link to="/home">
            {" "}
            <li className="topListItem">HOME</li>
          </Link>
          <Link to="/newpost">
            <li className="topListItem">
              NEW POST
            </li>
          </Link>
          <li className="topListItem">FAVOURITES</li>
        </ul>
        </div>

  {/*     <div className="menu-btn">
<div className="menu-btn_burger"></div>
      </div> */}
    
      <div className="topCenter">

     
 
        </div>

      <div className="topRight">
        <div className="userInfo">
        <Link to="/users/pic">
          <img className="topImg" src={user.profilepicture} alt="" />
        </Link>
        <Link to={`/users/${id}`}>
          <p className="profileName">{user.username}</p>{" "}
        </Link>
        </div>
     

      
        </div>

    </div>
  );
};
