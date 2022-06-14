import React, { useEffect } from "react";
import "./sidebar.css";
import { useState } from "react";
import axios from "axios";

export const SideBar = () => {
  const [cats, setCats] = useState([]);
  useEffect(() =>{
    const getCats = async () => {
      const res = await axios.get("/categories")
      setCats(res.data)
    };
    getCats();
  }, [])
  return (
    <div className="sidebar">
      {/* <div className="sidebarItem">
            <span className="sidebarTitle">ABOUT ME</span>
            <img className="topImg"
            src="https://cdn.pixabay.com/photo/2017/06/13/12/53/profile-2398782_1280.png"
            alt=""></img>
            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                Excepteur sint occaecat cupidatat non proident."</p>
        </div> */}
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          {cats.map((c)=>(
 <li className="sidebarListItem">{c.name}</li>
          ))}
        </ul>
      </div>
      <div className="sidebarItem">
        {/* <span className="sidebarTitle">FOLLOW US</span>
         <div className="sidebarSocial">
          <i className="sidebarIcon fa-brands fa-facebook-f"></i>
          <i className="sidebarIcon fa-brands fa-instagram"></i>
          <i className="sidebarIcon fa-brands fa-github"></i>
          <i className="sidebarIcon fa-solid fa-at"></i>
        </div>*/}
      </div>
    </div>
  );
};
