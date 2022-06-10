import React from "react";

import { Header } from "components/header/Header";
import { TopBar } from "components/topbar/TopBar";

import "./home.css";
import { SideBar } from "components/sidebar/Sidebar";
import { Posts } from "components/posts/posts";
export const HomePage = () => {
  return (
    <>
      <div className="home">
        <TopBar />
        <Header />

        <Posts />
        <SideBar />
      </div>
    </>
  );
};
