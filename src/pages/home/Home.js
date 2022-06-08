import React from "react";
import { Header } from "components/header/Header";
import "./home.css";
import { SideBar } from "components/sidebar/Sidebar";
import { Posts } from "components/posts/posts";

export const HomePage= () => {
return(
    <>
      <Header />
    <div className="home">
        <Posts />
        <SideBar/>
    </div>

    </>
)
};