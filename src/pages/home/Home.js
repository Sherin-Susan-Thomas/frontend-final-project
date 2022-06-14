import React, { useEffect, useState } from "react";
import { Header } from "components/header/Header";
import { TopBar } from "components/topbar/TopBar";

import "./home.css";
import { SideBar } from "components/sidebar/Sidebar";
import { Posts } from "components/posts/posts";
import axios from "axios";




export const HomePage = () => {

const [posts, setPosts] = useState([])

useEffect(() =>{
  const fetchPosts = async () =>{
  const res = await  axios.get("https://final-sprint.herokuapp.com/api/posts")
console.log(res)
}
fetchPosts()
},[])

  return (
    <>
      <div className="home">
        <TopBar />
        <Header />

        <Posts posts={posts}/>
        <SideBar />
      </div>
    </>
  );
};
