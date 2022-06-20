import React, { useEffect, useState } from "react";
import axios from "axios";

import { Header } from "components/header/Header";
import { TopBar } from "components/topbar/TopBar";

import "./home.css";

import { Posts } from "components/posts/posts";
import { useLocation } from "react-router-dom";

export const HomePage = () => {
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

    
    </>
  );
};
