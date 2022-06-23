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

      setCategories(res.data);
    };

    getcategory();
  }, []);
  
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <div className="sidebarList">
          <b>
            <span>Tags:</span>
          </b>
          {categories.map((category) => {
            return (
              <div key={category._id}>
                <Link to={`/home/?category=${category.name}`} className="link">
                  {" "}
                  <span className="cat_name"> #{category.name}</span>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
      <div className="sidebarItem"></div>
    </div>
  );
};
