import React, { useEffect, useState } from "react";
import axios from "axios";

import "./sidebar.css";
import { Link } from "react-router-dom";

export const SideBar = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const getcategory = async () => {
      const res = await axios.get(
        "https://final-sprint.herokuapp.com/api/categories"
      );
      console.log(res.data);
      setCategories(res.data);
    };

    getcategory();
  }, []);
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          {categories.map((category) => {
            return (
              <div key={category._id}>
                <Link to={`/home/?category=${category.name}`}>
                  {" "}
                  <li>{category.name.toUpperCase()}</li>
                </Link>
              </div>
            );
          })}
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
