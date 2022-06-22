import React, { useEffect, useState } from "react";
import axios from "axios";

import { Header } from "components/header/Header";
import { TopBar } from "components/topbar/TopBar";
import "./home.css";

import { Posts } from "components/posts/posts";
import { useLocation } from "react-router-dom";

export const HomePage = () => {
  const date = new Date().getFullYear();
  const [posts, setPosts] = useState([]);
  const { search } = useLocation();
  console.log();

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get(
        "https://final-sprint.herokuapp.com/api/posts" + search
      );
      console.log(res.data);
      setPosts(res.data);
    };
    fetchPosts();
  }, [search]);

  return (
    <>
      <TopBar />
      <Header />

      <div className="home">
        <Posts posts={posts} />
      </div>
      <div className="cat"></div>
      <h4 className="aboutus">Copyright &copy; Jenny & Sherin {date}</h4>
      <h4 className="contacts">
        <i> Jenny Fiskaare</i> <i className="fab fa-linkedin-in"></i>{" "}
        <i className="fa-brands fa-github"></i>
      </h4>
      <h4 className="contacts">
        <i>Sherin Susan Thomas</i>
        <a href="https://www.linkedin.com/in/dr-sherin-thomas/">
          <i className="fab fa-linkedin-in"></i>
        </a>
        <a href="https://github.com/Sherin-Susan-Thomas?tab=repositories">
          <i className="fa-brands fa-github"></i>
        </a>
      </h4>
    </>
  );
};
